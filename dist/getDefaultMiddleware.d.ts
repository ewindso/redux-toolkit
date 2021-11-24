import type { Middleware, AnyAction } from 'redux';
import type { ThunkMiddleware } from 'redux-thunk';
import type { ImmutableStateInvariantMiddlewareOptions } from './immutableStateInvariantMiddleware';
import type { SerializableStateInvariantMiddlewareOptions } from './serializableStateInvariantMiddleware';
import { MiddlewareArray } from './utils';
interface ThunkOptions<E = any> {
    extraArgument: E;
}
interface GetDefaultMiddlewareOptions {
    thunk?: boolean | ThunkOptions;
    immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
    serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
}
export declare type ThunkMiddlewareFor<S, O extends GetDefaultMiddlewareOptions = {}> = O extends {
    thunk: false;
} ? never : O extends {
    thunk: {
        extraArgument: infer E;
    };
} ? ThunkMiddleware<S, AnyAction, E> : ThunkMiddleware<S, AnyAction, null> | ThunkMiddleware<S, AnyAction>;
export declare type CurriedGetDefaultMiddleware<S = any> = <O extends Partial<GetDefaultMiddlewareOptions> = {
    thunk: true;
    immutableCheck: true;
    serializableCheck: true;
}>(options?: O) => MiddlewareArray<Middleware<{}, S> | ThunkMiddlewareFor<S, O>>;
export declare function curryGetDefaultMiddleware<S = any>(): CurriedGetDefaultMiddleware<S>;
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */
export declare function getDefaultMiddleware<S = any, O extends Partial<GetDefaultMiddlewareOptions> = {
    thunk: true;
    immutableCheck: true;
    serializableCheck: true;
}>(options?: O): MiddlewareArray<Middleware<{}, S> | ThunkMiddlewareFor<S, O>>;
export {};
