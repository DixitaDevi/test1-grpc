package global

import (
	"context"
	"time"
)

const (
	performance = 100
)

//NewDBContext returns a new context according to app performance
func NewDBContext(d time.Duration) (context.Context, context.CancelFunc) {
	return context.WithTimeout(context.Background(), d*performance/100)
}
