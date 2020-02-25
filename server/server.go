package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"regexp"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/user/basic-crud/global"
	"github.com/user/basic-crud/proto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var collection *mongo.Collection

type server struct {
}

type personItem struct {
	ID   primitive.ObjectID `bson: "_id"`
	Name string             `bson: "name"`
}

func (*server) CreatePerson(ctx context.Context, req *proto.CreatePersonRequest) (*proto.CreatePersonResponse, error) {
	fmt.Println("Create person request")
	person := req.GetPerson()
	data := personItem{
		Name: person.GetName(),
	}

	res, err := collection.InsertOne(context.Background(), data)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			fmt.Sprintf("Internal error: %v", err),
		)
	}
	oid, ok := res.InsertedID.(primitive.ObjectID)
	if !ok {
		return nil, status.Errorf(
			codes.Internal,
			fmt.Sprintf("Cannot convert to OID"),
		)
	}
	return &proto.CreatePersonResponse{
		Person: &proto.Person{
			Id:   oid.Hex(),
			Name: person.GetName(),
		},
	}, nil
}

func (*server) ReadPerson(ctx context.Context, req *proto.ReadPersonRequest) (*proto.ReadPersonResponse, error) {
	fmt.Println("Read Person request")
	personID := req.GetPersonId()
	oid, err := primitive.ObjectIDFromHex(personID)
	if err != nil {
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Cannot parse ID"),
		)
	}
	data := personItem{}
	filter := bson.M{"_id": oid} //filter := bson.D{{"_id", oid}}
	res := collection.FindOne(ctx, filter)
	if err := res.Decode(&data); err != nil {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find person with specified Id: %v", err),
		)
	}
	response := &proto.ReadPersonResponse{
		Person: &proto.Person{
			Id:   oid.Hex(),
			Name: data.Name,
		},
	}
	return response, nil
}

/*func dataToPersonPb(data *personItem) *proto.Person {
	return &proto.Person{
		Id:   data.ID.Hex(),
		Name: data.Name,
	}
}*/

func (*server) UpdatePerson(ctx context.Context, req *proto.UpdatePersonRequest) (*proto.UpdatePersonResponse, error) {
	fmt.Println("Update person request")
	person := req.GetPerson()
	oid, err := primitive.ObjectIDFromHex(person.GetId())
	if err != nil {
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Cannot parse ID"),
		)
	}

	update := bson.M{
		"name": person.GetName(),
	}
	data := personItem{}
	filter := bson.D{{"_id", oid}}

	res := collection.FindOneAndUpdate(ctx, filter, bson.M{"$set": update})
	if err := res.Decode(&data); err != nil {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find person with specified Id: %v", err),
		)
	}
	return &proto.UpdatePersonResponse{
		Person: &proto.Person{
			Id:   data.ID.Hex(),
			Name: data.Name,
		},
	}, nil

}

func (*server) DeletePerson(ctx context.Context, req *proto.DeletePersonRequest) (*proto.DeletePersonResponse, error) {
	fmt.Println("Delete person request")
	oid, err := primitive.ObjectIDFromHex(req.GetPersonId())
	if err != nil {
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Cannot parse ID"),
		)
	}
	filter := bson.D{{"_id", oid}}
	res, err := collection.DeleteOne(ctx, filter)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			fmt.Sprintf("Cannot delete object in DB: %v", err),
		)
	}
	if res.DeletedCount == 0 {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find person in DB: %v", err),
		)
	}
	return &proto.DeletePersonResponse{PersonId: req.GetPersonId()}, nil
}

func (server) Login(_ context.Context, in *proto.LoginRequest) (*proto.AuthResponse, error) {
	login, password := in.GetLogin(), in.GetPassword()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	var user global.User
	collection.FindOne(ctx, bson.M{"$or": []bson.M{bson.M{"username": login}, bson.M{"email": login}}}).Decode(&user)
	if user == global.NilUser {
		return &proto.AuthResponse{}, errors.New("Wrong login credentials provided")
	}
	if bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)) != nil {
		return &proto.AuthResponse{}, errors.New("Wrong Login Credentials Provided")
	}
	return &proto.AuthResponse{Token: user.GetToken()}, nil
}

func (s server) Signup(_ context.Context, in *proto.SignupRequest) (*proto.AuthResponse, error) {
	username, email, password := in.GetUsername(), in.GetEmail(), in.GetPassword()
	match, _ := regexp.MatchString("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$", email)
	if len(username) < 4 || len(username) > 20 || len(email) < 7 || len(email) > 35 || len(password) < 8 || len(password) > 128 || !match {
		return &proto.AuthResponse{}, errors.New("Validation Failed")
	}

	res, err := s.UsernameUsed(context.Background(), &proto.UsernameUsedRequest{Username: username})
	if err != nil {
		log.Println("Error returned from UsernameUSed: ", err.Error())
		return &proto.AuthResponse{}, errors.New("Something went wrong")
	}
	if res.GetUsed() {
		return &proto.AuthResponse{}, errors.New("Username is used")
	}

	res, err = s.EmailUsed(context.Background(), &proto.EmailUsedRequest{Email: email})
	if err != nil {
		log.Println("Error returned from EmailUSed: ", err.Error())
		return &proto.AuthResponse{}, errors.New("Something went wrong")
	}
	if res.GetUsed() {
		return &proto.AuthResponse{}, errors.New("Email is used")
	}
	pw, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	newUser := global.User{ID: primitive.NewObjectID(), Username: username, Email: email, Password: string(pw)}

	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	_, err = collection.InsertOne(ctx, newUser)
	if err != nil {
		log.Println("Error in searching newUser: ", err.Error())
		return &proto.AuthResponse{}, errors.New("Something went wrong")
	}
	return &proto.AuthResponse{Token: newUser.GetToken()}, nil

}

func (server) UsernameUsed(_ context.Context, in *proto.UsernameUsedRequest) (*proto.UsedResponse, error) {
	username := in.GetUsername()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	var result global.User
	collection.FindOne(ctx, bson.M{"username": username}).Decode(&result)
	return &proto.UsedResponse{Used: result != global.NilUser}, nil
}
func (server) EmailUsed(_ context.Context, in *proto.EmailUsedRequest) (*proto.UsedResponse, error) {
	email := in.GetEmail()
	ctx, cancel := global.NewDBContext(5 * time.Second)
	defer cancel()
	var result global.User
	collection.FindOne(ctx, bson.M{"email": email}).Decode(&result)
	return &proto.UsedResponse{Used: result != global.NilUser}, nil
}

func (server) AuthUser(_ context.Context, in *proto.AuthUserRequest) (*proto.AuthUserResponse, error) {
	token := in.GetToken()
	user := global.UserFromToken(token)
	return &proto.AuthUserResponse{ID: user.ID.Hex(), Username: user.Username, Email: user.Email}, nil

}

func main() {
	//if the code crashes, we get the filename and line number
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fmt.Println("Connecting to MongoDB")
	//connect to DB
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatal(err)
	}
	err = client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Service started")
	collection = client.Database("mydb").Collection("stet")

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	opts := []grpc.ServerOption{}
	s := grpc.NewServer(opts...)
	proto.RegisterStetServiceServer(s, &server{})

	reflection.Register(s)

	go func() {
		fmt.Println("Starting server...")
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()
	//CTRL+C to exit
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)

	<-ch
	fmt.Println("Stopping the server")
	s.Stop()
	fmt.Println("Closing the listener")
	lis.Close()
	fmt.Println("Closing MongoDB Connection")
	client.Disconnect(context.TODO())
	fmt.Println("End of Program")

}
