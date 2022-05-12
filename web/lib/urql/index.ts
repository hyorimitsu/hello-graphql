import {
    useQuery as useQueryX,
    useMutation as useMutationX,
    UseQueryArgs as UseQueryArgsX,
    UseQueryResponse,
    OperationContext, OperationResult
} from 'urql'
import { DocumentNode } from 'graphql'
import { TypedDocumentNode } from '@urql/core'
import { UseMutationResponse } from 'urql/dist/types/hooks/useMutation'

const DefaultContext = {
    url: 'http://localhost:8080/query',
}

export interface UseQueryArgs<T = any, V = object> extends UseQueryArgsX<V, T> {}

export const useQuery = <T = any, V = object>(args: UseQueryArgs<T, V>): UseQueryResponse<T, V> => {
    const newArgs = { context: DefaultContext, ...args }
    return useQueryX(newArgs)
}

export const useMutation = <T = any, V = object>(query: DocumentNode | TypedDocumentNode<T, V> | string): UseMutationResponse<T, V> => {
    const [result, executor] = useMutationX(query)
    const newExecutor = (variables?: V, context?: Partial<OperationContext>): Promise<OperationResult<T, V>> => {
        const newContext = { ...DefaultContext, ...context }
        return executor(variables, newContext)
    }
    return [result, newExecutor]
}
