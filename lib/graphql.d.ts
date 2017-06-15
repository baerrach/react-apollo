/// <reference types="react" />
import { ComponentClass, StatelessComponent } from 'react';
import { MutationQueryReducersMap, ApolloQueryResult, ApolloError, FetchPolicy, FetchMoreOptions, UpdateQueryOptions, FetchMoreQueryOptions, SubscribeToMoreOptions } from 'apollo-client';
import { DocumentNode } from 'graphql';
export interface MutationOpts {
    variables?: Object;
    optimisticResponse?: Object;
    updateQueries?: MutationQueryReducersMap;
}
export interface QueryOpts {
    ssr?: boolean;
    variables?: {
        [key: string]: any;
    };
    fetchPolicy?: FetchPolicy;
    pollInterval?: number;
    skip?: boolean;
}
export interface QueryProps {
    error?: ApolloError;
    networkStatus: number;
    loading: boolean;
    variables: {
        [variable: string]: any;
    };
    fetchMore: (fetchMoreOptions: FetchMoreQueryOptions & FetchMoreOptions) => Promise<ApolloQueryResult<any>>;
    refetch: (variables?: any) => Promise<ApolloQueryResult<any>>;
    startPolling: (pollInterval: number) => void;
    stopPolling: () => void;
    subscribeToMore: (options: SubscribeToMoreOptions) => () => void;
    updateQuery: (mapFn: (previousQueryResult: any, options: UpdateQueryOptions) => any) => void;
}
export declare type MutationFunc<TResult> = (opts: MutationOpts) => Promise<ApolloQueryResult<TResult>>;
export interface OptionProps<TProps, TResult> {
    ownProps: TProps;
    data?: QueryProps & TResult;
    mutate?: MutationFunc<TResult>;
}
export declare type DefaultChildProps<P, R> = P & {
    data?: QueryProps & R;
    mutate?: MutationFunc<R>;
};
export interface OperationOption<TProps, TResult> {
    options?: QueryOpts | MutationOpts | ((props: TProps) => QueryOpts | MutationOpts);
    props?: (props: OptionProps<TProps, TResult>) => any;
    skip?: boolean | ((props: any) => boolean);
    name?: string;
    withRef?: boolean;
    shouldResubscribe?: (props: TProps, nextProps: TProps) => boolean;
    alias?: string;
}
export declare type CompositeComponent<P> = ComponentClass<P> | StatelessComponent<P>;
export interface ComponentDecorator<TOwnProps, TMergedProps> {
    (component: CompositeComponent<TMergedProps>): ComponentClass<TOwnProps>;
}
export interface InferableComponentDecorator<TOwnProps> {
    <T extends CompositeComponent<TOwnProps>>(component: T): T;
}
export default function graphql<TResult = {}, TProps = {}, TChildProps = DefaultChildProps<TProps, TResult>>(document: DocumentNode, operationOptions?: OperationOption<TProps, TResult>): ComponentDecorator<TProps, TChildProps>;
