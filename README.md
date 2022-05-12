hello-graphql
---

This is a sample of [GraphQL](https://graphql.org/), a query language for APIs and a runtime for fulfilling those queries in Go.

## Description

This is a sample of [GraphQL](https://graphql.org/) using Go and Next.js.

## Structure

|        |language/tools                                                                |description                                       |
|--------|------------------------------------------------------------------------------|--------------------------------------------------|
|backend |[Go](https://github.com/golang/go)                                            |programming language                              |
|        |[gqlgen](https://github.com/99designs/gqlgen)                                 |library for building GraphQL servers              |
|frontend|[Next.js](https://github.com/vercel/next.js/)                                 |React framework                                   |
|        |[GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator)|tool for generates code out of your GraphQL schema|
|        |[URQL](https://github.com/FormidableLabs/urql)                                |GraphQL client                                    |

## Usage

1. Run the application.

```shell
make run
```

2. Access the following URL.

http://localhost:3000

3. Down the application.

```shell
make down
```

## Implement Steps

1. Update [schema.graphqls](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/schema.graphqls)
2. Execute `make gql-generate`
3. If you want to prevent over fetching, modify the [models_gen.go](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/model/models_gen.go) generation code. (See notes below)
4. If you try `3.`, execute `make gql-generate` again.
5. Implements [resolver.go](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/resolver.go) and [schema.resolvers.go](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/schema.resolvers.go).

Note: [schema.resolvers.go](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/schema.resolvers.go) is generated based on the difference between [schema.graphqls](https://github.com/hyorimitsu/hello-graphql/blob/main/api/graph/schema.graphqls) and `model/*.go` definitions when `make gql-generate` is executed. (See [commit history](https://github.com/hyorimitsu/hello-graphql/compare/cef9d952d411ad310e5e44c9c9238700eb58c77d...7bb982c8e4032fd8cdada5c23ba8f81bed6e6fd9))
