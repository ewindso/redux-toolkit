import type { ThunkDispatch } from '@reduxjs/toolkit';
import type { MaybePromise, UnwrapPromise } from './tsHelpers';
export interface BaseQueryApi {
    signal: AbortSignal;
    dispatch: ThunkDispatch<any, any, any>;
    getState: () => unknown;
}
export declare type QueryReturnValue<T = unknown, E = unknown, M = unknown> = {
    error: E;
    data?: undefined;
    meta?: M;
} | {
    error?: undefined;
    data: T;
    meta?: M;
};
export declare type BaseQueryFn<Args = any, Result = unknown, Error = unknown, DefinitionExtraOptions = {}, Meta = {}> = (args: Args, api: BaseQueryApi, extraOptions: DefinitionExtraOptions) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;
export declare type BaseQueryEnhancer<AdditionalArgs = unknown, AdditionalDefinitionExtraOptions = unknown, Config = void> = <BaseQuery extends BaseQueryFn>(baseQuery: BaseQuery, config: Config) => BaseQueryFn<BaseQueryArg<BaseQuery> & AdditionalArgs, BaseQueryResult<BaseQuery>, BaseQueryError<BaseQuery>, BaseQueryExtraOptions<BaseQuery> & AdditionalDefinitionExtraOptions>;
export declare type BaseQueryResult<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>> extends infer Unwrapped ? Unwrapped extends {
    data: any;
} ? Unwrapped['data'] : never : never;
export declare type BaseQueryMeta<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>>['meta'];
export declare type BaseQueryError<BaseQuery extends BaseQueryFn> = Exclude<UnwrapPromise<ReturnType<BaseQuery>>, {
    error?: undefined;
}>['error'];
export declare type BaseQueryArg<T extends (arg: any, ...args: any[]) => any> = T extends (arg: infer A, ...args: any[]) => any ? A : any;
export declare type BaseQueryExtraOptions<BaseQuery extends BaseQueryFn> = Parameters<BaseQuery>[2];
