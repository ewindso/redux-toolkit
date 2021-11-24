var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __objSpread = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
// src/query/react/index.ts
import { coreModule, buildCreateApi } from "@reduxjs/toolkit/query";
// src/query/react/buildHooks.ts
import { createSelector } from "@reduxjs/toolkit";
import { useCallback, useEffect as useEffect2, useLayoutEffect, useMemo, useRef as useRef2, useState } from "react";
import { QueryStatus, skipToken } from "@reduxjs/toolkit/query";
import { shallowEqual as shallowEqual2 } from "react-redux";
// src/query/react/useShallowStableValue.ts
import { useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
function useShallowStableValue(value) {
    const cache = useRef(value);
    useEffect(() => {
        if (!shallowEqual(cache.current, value)) {
            cache.current = value;
        }
    }, [value]);
    return shallowEqual(cache.current, value) ? cache.current : value;
}
// src/query/react/constants.ts
var UNINITIALIZED_VALUE = Symbol();
// src/query/react/buildHooks.ts
var defaultQueryStateSelector = (x) => x;
var defaultMutationStateSelector = (x) => x;
var queryStatePreSelector = (currentState, lastResult) => {
    var _a;
    const data = (_a = currentState.isSuccess ? currentState.data : lastResult == null ? void 0 : lastResult.data) != null ? _a : currentState.data;
    const isFetching = currentState.isLoading;
    const isLoading = !data && isFetching;
    const isSuccess = currentState.isSuccess || isFetching && !!data;
    return __objSpread(__objSpread({}, currentState), {
        data,
        isFetching,
        isLoading,
        isSuccess
    });
};
var noPendingQueryStateSelector = (selected) => {
    if (selected.isUninitialized) {
        return __objSpread(__objSpread({}, selected), {
            isUninitialized: false,
            isFetching: true,
            isLoading: true,
            status: QueryStatus.pending
        });
    }
    return selected;
};
function buildHooks({ api, moduleOptions: { batch, useDispatch, useSelector, useStore } }) {
    return { buildQueryHooks, buildMutationHook, usePrefetch };
    function usePrefetch(endpointName, defaultOptions) {
        const dispatch = useDispatch();
        const stableDefaultOptions = useShallowStableValue(defaultOptions);
        return useCallback((arg, options) => dispatch(api.util.prefetch(endpointName, arg, __objSpread(__objSpread({}, stableDefaultOptions), options))), [endpointName, dispatch, stableDefaultOptions]);
    }
    function buildQueryHooks(name) {
        const useQuerySubscription = (arg, { refetchOnReconnect, refetchOnFocus, refetchOnMountOrArgChange, skip = false, pollingInterval = 0 } = {}) => {
            const { initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const stableArg = useShallowStableValue(skip ? skipToken : arg);
            const stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect,
                refetchOnFocus,
                pollingInterval
            });
            const promiseRef = useRef2();
            useEffect2(() => {
                var _a;
                const lastPromise = promiseRef.current;
                if (stableArg === skipToken) {
                    lastPromise == null ? void 0 : lastPromise.unsubscribe();
                    promiseRef.current = void 0;
                    return;
                }
                const lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
                if (!lastPromise || lastPromise.arg !== stableArg) {
                    lastPromise == null ? void 0 : lastPromise.unsubscribe();
                    const promise = dispatch(initiate(stableArg, {
                        subscriptionOptions: stableSubscriptionOptions,
                        forceRefetch: refetchOnMountOrArgChange
                    }));
                    promiseRef.current = promise;
                }
                else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [
                dispatch,
                initiate,
                refetchOnMountOrArgChange,
                stableArg,
                stableSubscriptionOptions
            ]);
            useEffect2(() => {
                return () => {
                    var _a;
                    (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promiseRef.current = void 0;
                };
            }, []);
            return useMemo(() => ({
                refetch: () => {
                    var _a;
                    return void ((_a = promiseRef.current) == null ? void 0 : _a.refetch());
                }
            }), []);
        };
        const useLazyQuerySubscription = ({ refetchOnReconnect, refetchOnFocus, pollingInterval = 0 } = {}) => {
            const { initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const [arg, setArg] = useState(UNINITIALIZED_VALUE);
            const promiseRef = useRef2();
            const stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect,
                refetchOnFocus,
                pollingInterval
            });
            useEffect2(() => {
                var _a, _b;
                const lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
                if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    (_b = promiseRef.current) == null ? void 0 : _b.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [stableSubscriptionOptions]);
            const subscriptionOptionsRef = useRef2(stableSubscriptionOptions);
            useEffect2(() => {
                subscriptionOptionsRef.current = stableSubscriptionOptions;
            }, [stableSubscriptionOptions]);
            const trigger = useCallback(function (arg2, preferCacheValue = false) {
                batch(() => {
                    var _a;
                    (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promiseRef.current = dispatch(initiate(arg2, {
                        subscriptionOptions: subscriptionOptionsRef.current,
                        forceRefetch: !preferCacheValue
                    }));
                    setArg(arg2);
                });
            }, [dispatch, initiate]);
            useEffect2(() => {
                return () => {
                    var _a;
                    (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
                };
            }, []);
            useEffect2(() => {
                if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
                    trigger(arg, true);
                }
            }, [arg, trigger]);
            return useMemo(() => [trigger, arg], [trigger, arg]);
        };
        const useQueryState = (arg, { skip = false, selectFromResult = defaultQueryStateSelector } = {}) => {
            const { select } = api.endpoints[name];
            const stableArg = useShallowStableValue(skip ? skipToken : arg);
            const lastValue = useRef2();
            const selectDefaultResult = useMemo(() => createSelector([select(stableArg), (_, lastResult) => lastResult], queryStatePreSelector), [select, stableArg]);
            const querySelector = useMemo(() => createSelector([selectDefaultResult], selectFromResult), [selectDefaultResult, selectFromResult]);
            const currentState = useSelector((state) => querySelector(state, lastValue.current), shallowEqual2);
            const store = useStore();
            const newLastValue = selectDefaultResult(store.getState(), lastValue.current);
            useLayoutEffect(() => {
                lastValue.current = newLastValue;
            }, [newLastValue]);
            return currentState;
        };
        return {
            useQueryState,
            useQuerySubscription,
            useLazyQuerySubscription,
            useLazyQuery(options) {
                const [trigger, arg] = useLazyQuerySubscription(options);
                const queryStateResults = useQueryState(arg, __objSpread(__objSpread({}, options), {
                    skip: arg === UNINITIALIZED_VALUE
                }));
                const info = useMemo(() => ({ lastArg: arg }), [arg]);
                return useMemo(() => [trigger, queryStateResults, info], [
                    trigger,
                    queryStateResults,
                    info
                ]);
            },
            useQuery(arg, options) {
                const querySubscriptionResults = useQuerySubscription(arg, options);
                const queryStateResults = useQueryState(arg, __objSpread({
                    selectFromResult: arg === skipToken || (options == null ? void 0 : options.skip) ? void 0 : noPendingQueryStateSelector
                }, options));
                return useMemo(() => __objSpread(__objSpread({}, queryStateResults), querySubscriptionResults), [queryStateResults, querySubscriptionResults]);
            }
        };
    }
    function buildMutationHook(name) {
        return ({ selectFromResult = defaultMutationStateSelector } = {}) => {
            const { select, initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const [requestId, setRequestId] = useState();
            const promiseRef = useRef2();
            useEffect2(() => {
                return () => {
                    var _a;
                    (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promiseRef.current = void 0;
                };
            }, []);
            const triggerMutation = useCallback(function (arg) {
                let promise;
                batch(() => {
                    var _a;
                    (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
                    promise = dispatch(initiate(arg));
                    promiseRef.current = promise;
                    setRequestId(promise.requestId);
                });
                return promise;
            }, [dispatch, initiate]);
            const mutationSelector = useMemo(() => createSelector([select(requestId || skipToken)], (subState) => selectFromResult(subState)), [select, requestId, selectFromResult]);
            const currentState = useSelector(mutationSelector, shallowEqual2);
            return useMemo(() => [triggerMutation, currentState], [
                triggerMutation,
                currentState
            ]);
        };
    }
}
// src/query/endpointDefinitions.ts
var DefinitionType;
(function (DefinitionType2) {
    DefinitionType2["query"] = "query";
    DefinitionType2["mutation"] = "mutation";
})(DefinitionType || (DefinitionType = {}));
function isQueryDefinition(e) {
    return e.type === DefinitionType.query;
}
function isMutationDefinition(e) {
    return e.type === DefinitionType.mutation;
}
// src/query/utils/capitalize.ts
function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
// src/query/tsHelpers.ts
function safeAssign(target, ...args) {
    Object.assign(target, ...args);
}
// src/query/react/module.ts
import { useDispatch as rrUseDispatch, useSelector as rrUseSelector, useStore as rrUseStore, batch as rrBatch } from "react-redux";
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = ({ batch = rrBatch, useDispatch = rrUseDispatch, useSelector = rrUseSelector, useStore = rrUseStore } = {}) => ({
    name: reactHooksModuleName,
    init(api, options, context) {
        const anyApi = api;
        const { buildQueryHooks, buildMutationHook, usePrefetch } = buildHooks({
            api,
            moduleOptions: { batch, useDispatch, useSelector, useStore }
        });
        safeAssign(anyApi, { usePrefetch });
        safeAssign(context, { batch });
        return {
            injectEndpoint(endpointName, definition) {
                if (isQueryDefinition(definition)) {
                    const { useQuery, useLazyQuery, useLazyQuerySubscription, useQueryState, useQuerySubscription } = buildQueryHooks(endpointName);
                    safeAssign(anyApi.endpoints[endpointName], {
                        useQuery,
                        useLazyQuery,
                        useLazyQuerySubscription,
                        useQueryState,
                        useQuerySubscription
                    });
                    api[`use${capitalize(endpointName)}Query`] = useQuery;
                    api[`useLazy${capitalize(endpointName)}Query`] = useLazyQuery;
                }
                else if (isMutationDefinition(definition)) {
                    const useMutation = buildMutationHook(endpointName);
                    safeAssign(anyApi.endpoints[endpointName], {
                        useMutation
                    });
                    api[`use${capitalize(endpointName)}Mutation`] = useMutation;
                }
            }
        };
    }
});
// src/query/react/index.ts
export * from "@reduxjs/toolkit/query";
// src/query/react/ApiProvider.tsx
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
function ApiProvider(props) {
    const [store] = React.useState(() => configureStore({
        reducer: {
            [props.api.reducerPath]: props.api.reducer
        },
        middleware: (gDM) => gDM().concat(props.api.middleware)
    }));
    setupListeners(store.dispatch, props.setupListeners);
    return /* @__PURE__ */ React.createElement(Provider, {
        store,
        context: props.context
    }, props.children);
}
// src/query/react/index.ts
var createApi = /* @__PURE__ */ buildCreateApi(coreModule(), reactHooksModule());
export { ApiProvider, createApi, reactHooksModule };
//# sourceMappingURL=module.js.map