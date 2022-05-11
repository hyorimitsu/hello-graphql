FROM golang:1.18.1-alpine3.15

RUN apk --no-cache add alpine-sdk

ENTRYPOINT ["go", "run", "github.com/99designs/gqlgen"]
CMD ["init"]
