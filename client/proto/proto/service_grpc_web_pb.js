/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.StetServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.StetServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.CreatePersonRequest,
 *   !proto.proto.CreatePersonResponse>}
 */
const methodDescriptor_StetService_CreatePerson = new grpc.web.MethodDescriptor(
  '/proto.StetService/CreatePerson',
  grpc.web.MethodType.UNARY,
  proto.proto.CreatePersonRequest,
  proto.proto.CreatePersonResponse,
  /**
   * @param {!proto.proto.CreatePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreatePersonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.CreatePersonRequest,
 *   !proto.proto.CreatePersonResponse>}
 */
const methodInfo_StetService_CreatePerson = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.CreatePersonResponse,
  /**
   * @param {!proto.proto.CreatePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreatePersonResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.CreatePersonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreatePersonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.createPerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/CreatePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_CreatePerson,
      callback);
};


/**
 * @param {!proto.proto.CreatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreatePersonResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.createPerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/CreatePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_CreatePerson);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadPersonRequest,
 *   !proto.proto.ReadPersonResponse>}
 */
const methodDescriptor_StetService_ReadPerson = new grpc.web.MethodDescriptor(
  '/proto.StetService/ReadPerson',
  grpc.web.MethodType.UNARY,
  proto.proto.ReadPersonRequest,
  proto.proto.ReadPersonResponse,
  /**
   * @param {!proto.proto.ReadPersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadPersonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadPersonRequest,
 *   !proto.proto.ReadPersonResponse>}
 */
const methodInfo_StetService_ReadPerson = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.ReadPersonResponse,
  /**
   * @param {!proto.proto.ReadPersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ReadPersonResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ReadPersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.ReadPersonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ReadPersonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.readPerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/ReadPerson',
      request,
      metadata || {},
      methodDescriptor_StetService_ReadPerson,
      callback);
};


/**
 * @param {!proto.proto.ReadPersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ReadPersonResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.readPerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/ReadPerson',
      request,
      metadata || {},
      methodDescriptor_StetService_ReadPerson);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdatePersonRequest,
 *   !proto.proto.UpdatePersonResponse>}
 */
const methodDescriptor_StetService_UpdatePerson = new grpc.web.MethodDescriptor(
  '/proto.StetService/UpdatePerson',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdatePersonRequest,
  proto.proto.UpdatePersonResponse,
  /**
   * @param {!proto.proto.UpdatePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdatePersonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UpdatePersonRequest,
 *   !proto.proto.UpdatePersonResponse>}
 */
const methodInfo_StetService_UpdatePerson = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdatePersonResponse,
  /**
   * @param {!proto.proto.UpdatePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdatePersonResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdatePersonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdatePersonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.updatePerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/UpdatePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_UpdatePerson,
      callback);
};


/**
 * @param {!proto.proto.UpdatePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdatePersonResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.updatePerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/UpdatePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_UpdatePerson);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.DeletePersonRequest,
 *   !proto.proto.DeletePersonResponse>}
 */
const methodDescriptor_StetService_DeletePerson = new grpc.web.MethodDescriptor(
  '/proto.StetService/DeletePerson',
  grpc.web.MethodType.UNARY,
  proto.proto.DeletePersonRequest,
  proto.proto.DeletePersonResponse,
  /**
   * @param {!proto.proto.DeletePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.DeletePersonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.DeletePersonRequest,
 *   !proto.proto.DeletePersonResponse>}
 */
const methodInfo_StetService_DeletePerson = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.DeletePersonResponse,
  /**
   * @param {!proto.proto.DeletePersonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.DeletePersonResponse.deserializeBinary
);


/**
 * @param {!proto.proto.DeletePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.DeletePersonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.DeletePersonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.deletePerson =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/DeletePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_DeletePerson,
      callback);
};


/**
 * @param {!proto.proto.DeletePersonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.DeletePersonResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.deletePerson =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/DeletePerson',
      request,
      metadata || {},
      methodDescriptor_StetService_DeletePerson);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.LoginRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_StetService_Login = new grpc.web.MethodDescriptor(
  '/proto.StetService/Login',
  grpc.web.MethodType.UNARY,
  proto.proto.LoginRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.LoginRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_StetService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/Login',
      request,
      metadata || {},
      methodDescriptor_StetService_Login,
      callback);
};


/**
 * @param {!proto.proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/Login',
      request,
      metadata || {},
      methodDescriptor_StetService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.SignupRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_StetService_Signup = new grpc.web.MethodDescriptor(
  '/proto.StetService/Signup',
  grpc.web.MethodType.UNARY,
  proto.proto.SignupRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.SignupRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodInfo_StetService_Signup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/Signup',
      request,
      metadata || {},
      methodDescriptor_StetService_Signup,
      callback);
};


/**
 * @param {!proto.proto.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/Signup',
      request,
      metadata || {},
      methodDescriptor_StetService_Signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UsernameUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodDescriptor_StetService_UsernameUsed = new grpc.web.MethodDescriptor(
  '/proto.StetService/UsernameUsed',
  grpc.web.MethodType.UNARY,
  proto.proto.UsernameUsedRequest,
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.UsernameUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.UsernameUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodInfo_StetService_UsernameUsed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.UsernameUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UsernameUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UsedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UsedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.usernameUsed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/UsernameUsed',
      request,
      metadata || {},
      methodDescriptor_StetService_UsernameUsed,
      callback);
};


/**
 * @param {!proto.proto.UsernameUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UsedResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.usernameUsed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/UsernameUsed',
      request,
      metadata || {},
      methodDescriptor_StetService_UsernameUsed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.EmailUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodDescriptor_StetService_EmailUsed = new grpc.web.MethodDescriptor(
  '/proto.StetService/EmailUsed',
  grpc.web.MethodType.UNARY,
  proto.proto.EmailUsedRequest,
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.EmailUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.EmailUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodInfo_StetService_EmailUsed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.EmailUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @param {!proto.proto.EmailUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UsedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UsedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.emailUsed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/EmailUsed',
      request,
      metadata || {},
      methodDescriptor_StetService_EmailUsed,
      callback);
};


/**
 * @param {!proto.proto.EmailUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UsedResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.emailUsed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/EmailUsed',
      request,
      metadata || {},
      methodDescriptor_StetService_EmailUsed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthUserRequest,
 *   !proto.proto.AuthUserResponse>}
 */
const methodDescriptor_StetService_AuthUser = new grpc.web.MethodDescriptor(
  '/proto.StetService/AuthUser',
  grpc.web.MethodType.UNARY,
  proto.proto.AuthUserRequest,
  proto.proto.AuthUserResponse,
  /**
   * @param {!proto.proto.AuthUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.AuthUserRequest,
 *   !proto.proto.AuthUserResponse>}
 */
const methodInfo_StetService_AuthUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.AuthUserResponse,
  /**
   * @param {!proto.proto.AuthUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.AuthUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StetServiceClient.prototype.authUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StetService/AuthUser',
      request,
      metadata || {},
      methodDescriptor_StetService_AuthUser,
      callback);
};


/**
 * @param {!proto.proto.AuthUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthUserResponse>}
 *     A native promise that resolves to the response
 */
proto.proto.StetServicePromiseClient.prototype.authUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StetService/AuthUser',
      request,
      metadata || {},
      methodDescriptor_StetService_AuthUser);
};


module.exports = proto.proto;

