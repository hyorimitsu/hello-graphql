import gql from 'graphql-tag';
import * as Urql from '../lib/urql/index.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FindTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', text: string, done: boolean, user: { __typename?: 'User', name: string } }> };

export type CreateTodoMutationVariables = Exact<{
  input: NewTodo;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', text: string, done: boolean, user: { __typename?: 'User', name: string } } };


export const FindTodosDocument = gql`
    query findTodos {
  todos {
    text
    done
    user {
      name
    }
  }
}
    `;

export function useFindTodosQuery(options?: Omit<Urql.UseQueryArgs<FindTodosQueryVariables>, 'query'>) {
  return Urql.useQuery<FindTodosQuery>({ query: FindTodosDocument, ...options });
};
export const CreateTodoDocument = gql`
    mutation createTodo($input: NewTodo!) {
  createTodo(input: $input) {
    text
    done
    user {
      name
    }
  }
}
    `;

export function useCreateTodoMutation() {
  return Urql.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument);
};