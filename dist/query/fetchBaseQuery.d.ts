import type { BaseQueryFn } from './baseQueryTypes';
import type { MaybePromise, Override } from './tsHelpers';
export declare type ResponseHandler = 'json' | 'text' | ((response: Response) => Promise<any>);
declare type CustomRequestInit = Override<RequestInit, {
    headers?: Headers | string[][] | Record<string, string | undefined> | undefined;
}>;
export interface FetchArgs extends CustomRequestInit {
    url: string;
    params?: Record<string, any>;
    body?: any;
    responseHandler?: ResponseHandler;
    validateStatus?: (response: Response, body: any) => boolean;
}
export interface FetchBaseQueryError {
    status: number;
    data: unknown;
}
export declare type FetchBaseQueryArgs = {
    baseUrl?: string;
    prepareHeaders?: (headers: Headers, api: {
        getState: () => unknown;
    }) => MaybePromise<Headers>;
    fetchFn?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
} & RequestInit;
export declare type FetchBaseQueryMeta = {
    request: Request;
    response: Response;
};
/**
 * This is a very small wrapper around fetch that aims to simplify requests.
 *
 * @example
 * ```ts
 * const baseQuery = fetchBaseQuery({
 *   baseUrl: 'https://api.your-really-great-app.com/v1/',
 *   prepareHeaders: (headers, { getState }) => {
 *     const token = (getState() as RootState).auth.token;
 *     // If we have a token set in state, let's assume that we should be passing it.
 *     if (token) {
 *       headers.set('authorization', `Bearer ${token}`);
 *     }
 *     return headers;
 *   },
 * })
 * ```
 *
 * @param {string} baseUrl
 * The base URL for an API service.
 * Typically in the format of http://example.com/
 *
 * @param {(headers: Headers, api: { getState: () => unknown }) => Headers} prepareHeaders
 * An optional function that can be used to inject headers on requests.
 * Provides a Headers object, as well as the `getState` function from the
 * redux store. Can be useful for authentication.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Headers
 *
 * @param {(input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>} fetchFn
 * Accepts a custom `fetch` function if you do not want to use the default on the window.
 * Useful in SSR environments if you need to use a library such as `isomorphic-fetch` or `cross-fetch`
 *
 */
export declare function fetchBaseQuery({ baseUrl, prepareHeaders, fetchFn, ...baseFetchOptions }?: FetchBaseQueryArgs): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>;
export {};
