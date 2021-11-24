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
// src/index.ts
import { enableES5 as enableES52 } from "immer";
export * from "redux";
import { default as default2, current as current2, freeze, original, isDraft as isDraft4 } from "immer";
import { createSelector as createSelector2 } from "reselect";
// src/createDraftSafeSelector.ts
import { current, isDraft } from "immer";
import { createSelector } from "reselect";
var createDraftSafeSelector = (...args) => {
    const selector = createSelector(...args);
    const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
    return wrappedSelector;
};
// src/configureStore.ts
import { createStore, compose as compose2, applyMiddleware, combineReducers } from "redux";
// src/devtoolsExtension.ts
import { compose } from "redux";
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return compose;
    return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop) {
        return noop;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
// src/getDefaultMiddleware.ts
import thunkMiddleware from "redux-thunk";
// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
        measureTime(fn) {
            const started = Date.now();
            try {
                return fn();
            }
            finally {
                const finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded() {
            if (elapsed > maxDelay) {
                console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
            }
        }
    };
}
var MiddlewareArray = class extends Array {
    constructor(...args) {
        super(...args);
        Object.setPrototypeOf(this, MiddlewareArray.prototype);
    }
    static get [Symbol.species]() {
        return MiddlewareArray;
    }
    concat(...arr) {
        return super.concat.apply(this, arr);
    }
    prepend(...arr) {
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new MiddlewareArray(...arr[0].concat(this));
        }
        return new MiddlewareArray(...arr.concat(this));
    }
};
// src/immutableStateInvariantMiddleware.ts
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(`${prefix}: ${message || ""}`);
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    let stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations() {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "") {
    const tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (const key in obj) {
            const childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignorePaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    const keysToDetect = {};
    for (let key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (let key in obj) {
        keysToDetect[key] = true;
    }
    for (let key in keysToDetect) {
        const childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
            continue;
        }
        const result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options = {}) {
    if (process.env.NODE_ENV === "production") {
        return () => (next) => (action) => next(action);
    }
    let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32, ignore } = options;
    ignoredPaths = ignoredPaths || ignore;
    const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return ({ getState }) => {
        let state = getState();
        let tracker = track(state);
        let result;
        return (next) => (action) => {
            const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(() => {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
            });
            const dispatchedAction = next(action);
            measureUtils.measureTime(() => {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    const type = typeof val;
    return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = []) {
    let foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries) {
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
            continue;
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    return false;
}
function createSerializableStateInvariantMiddleware(options = {}) {
    if (process.env.NODE_ENV === "production") {
        return () => (next) => (action) => next(action);
    }
    const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = ["meta.arg", "meta.baseQueryMeta"], ignoredPaths = [], warnAfter = 32, ignoreState = false } = options;
    return (storeAPI) => (next) => (action) => {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
            return next(action);
        }
        const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        measureUtils.measureTime(() => {
            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
            if (foundActionNonSerializableValue) {
                const { keyPath, value } = foundActionNonSerializableValue;
                console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
            }
        });
        const result = next(action);
        if (!ignoreState) {
            measureUtils.measureTime(() => {
                const state = storeAPI.getState();
                const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
                if (foundStateNonSerializableValue) {
                    const { keyPath, value } = foundStateNonSerializableValue;
                    console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options = {}) {
    const { thunk = true, immutableCheck = true, serializableCheck = true } = options;
    let middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(thunkMiddleware);
        }
        else {
            middlewareArray.push(thunkMiddleware.withExtraArgument(thunk.extraArgument));
        }
    }
    if (process.env.NODE_ENV !== "production") {
        if (immutableCheck) {
            let immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            let serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = process.env.NODE_ENV === "production";
function configureStore(options) {
    const curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    const { reducer = void 0, middleware = curriedGetDefaultMiddleware(), devTools = true, preloadedState = void 0, enhancers = void 0 } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = combineReducers(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    let finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some((item) => typeof item !== "function")) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    const middlewareEnhancer = applyMiddleware(...finalMiddleware);
    let finalCompose = compose2;
    if (devTools) {
        finalCompose = composeWithDevTools(__objSpread({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    let storeEnhancers = [middlewareEnhancer];
    if (Array.isArray(enhancers)) {
        storeEnhancers = [middlewareEnhancer, ...enhancers];
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(storeEnhancers);
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            let prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __objSpread(__objSpread({
                type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type, payload: args[0] };
    }
    actionCreator.toString = () => `${type}`;
    actionCreator.type = type;
    actionCreator.match = (action) => action.type === type;
    return actionCreator;
}
function isFSA(action) {
    return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return `${actionCreator}`;
}
// src/createReducer.ts
import createNextState, { isDraft as isDraft2, isDraftable, enableES5 } from "immer";
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
        addCase(typeOrActionCreator, reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher(matcher, reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher, reducer });
            return builder;
        },
        addDefaultCase(reducer) {
            if (process.env.NODE_ENV !== "production") {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function createReducer(initialState, mapOrBuilderCallback, actionMatchers = [], defaultCaseReducer) {
    enableES5();
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer];
    const frozenInitialState = createNextState(initialState, () => {
    });
    return function (state = frozenInitialState, action) {
        let caseReducers = [
            actionsMap[action.type],
            ...finalActionMatchers.filter(({ matcher }) => matcher(action)).map(({ reducer }) => reducer)
        ];
        if (caseReducers.filter((cr) => !!cr).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce((previousState, caseReducer) => {
            if (caseReducer) {
                if (isDraft2(previousState)) {
                    const draft = previousState;
                    const result = caseReducer(draft, action);
                    if (typeof result === "undefined") {
                        return previousState;
                    }
                    return result;
                }
                else if (!isDraftable(previousState)) {
                    const result = caseReducer(previousState, action);
                    if (typeof result === "undefined") {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return createNextState(previousState, (draft) => {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    };
}
// src/createSlice.ts
function getType2(slice, actionKey) {
    return `${slice}/${actionKey}`;
}
function createSlice(options) {
    const { name, initialState } = options;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    const reducers = options.reducers || {};
    const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
    const reducerNames = Object.keys(reducers);
    const sliceCaseReducersByName = {};
    const sliceCaseReducersByType = {};
    const actionCreators = {};
    reducerNames.forEach((reducerName) => {
        const maybeReducerWithPrepare = reducers[reducerName];
        const type = getType2(name, reducerName);
        let caseReducer;
        let prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    const finalCaseReducers = __objSpread(__objSpread({}, extraReducers), sliceCaseReducersByType);
    const reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    return {
        name,
        reducer,
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState = {}) {
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        const selectIds = (state) => state.ids;
        const selectEntities = (state) => state.entities;
        const selectAll = createDraftSafeSelector(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
        const selectId = (_, id) => id;
        const selectById = (entities, id) => entities[id];
        const selectTotal = createDraftSafeSelector(selectIds, (ids) => ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        const selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors };
}
// src/entities/state_adapter.ts
import createNextState2, { isDraft as isDraft3 } from "immer";
function createSingleArgumentStateOperator(mutator) {
    const operator = createStateOperator((_, state) => mutator(state));
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        const runMutator = (draft) => {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if (isDraft3(state)) {
            runMutator(state);
            return state;
        }
        else {
            return createNextState2(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if (process.env.NODE_ENV !== "production" && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    const added = [];
    const updated = [];
    for (const entity of newEntities) {
        const id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities) {
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities) {
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        let didMutate = false;
        keys.forEach((key) => {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter((id) => id in state.entities);
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        const original2 = state.entities[update.id];
        const updated = Object.assign({}, original2, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        const updatesPerEntity = {};
        updates.forEach((update) => {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __objSpread(__objSpread({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update) => takeNewKey(newKeys, update, state)).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map((id) => newKeys[id] || id);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        const models = newEntities.filter((model) => !(selectIdValue(model, selectId) in state.entities));
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        const original2 = state.entities[update.id];
        const updated = Object.assign({}, original2, update.changes);
        const newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        const models = [];
        updates.forEach((update) => takeUpdatedModel(models, update, state));
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach((model) => {
            state.entities[selectId(model)] = model;
        });
        const allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        const newSortedIds = allEntities.map(selectId);
        const { ids } = state;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = __objSpread({
        sortComparer: false,
        selectId: (instance) => instance.id
    }, options);
    const stateFactory = createInitialStateFactory();
    const selectorsFactory = createSelectorsFactory();
    const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __objSpread(__objSpread(__objSpread({
        selectId,
        sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
    let id = "";
    let i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = class {
    constructor(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
};
var FulfillWithMeta = class {
    constructor(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
};
var miniSerializeError = (value) => {
    if (typeof value === "object" && value !== null) {
        const simpleError = {};
        for (const property of commonProperties) {
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
        payload,
        meta: __objSpread(__objSpread({}, meta || {}), {
            arg,
            requestId,
            requestStatus: "fulfilled"
        })
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
        payload: void 0,
        meta: __objSpread(__objSpread({}, meta || {}), {
            arg,
            requestId,
            requestStatus: "pending"
        })
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __objSpread(__objSpread({}, meta || {}), {
            arg,
            requestId,
            rejectedWithValue: !!payload,
            requestStatus: "rejected",
            aborted: (error == null ? void 0 : error.name) === "AbortError",
            condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
    }));
    let displayedWarning = false;
    const AC = typeof AbortController !== "undefined" ? AbortController : class {
        constructor() {
            this.signal = {
                aborted: false,
                addEventListener() {
                },
                dispatchEvent() {
                    return false;
                },
                onabort() {
                },
                removeEventListener() {
                }
            };
        }
        abort() {
            if (process.env.NODE_ENV !== "production") {
                if (!displayedWarning) {
                    displayedWarning = true;
                    console.info(`This platform does not implement AbortController. 
If you want to use the AbortController to react to \`abort\` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.`);
                }
            }
        }
    };
    function actionCreator(arg) {
        return (dispatch, getState, extra) => {
            var _a;
            const requestId = ((_a = options == null ? void 0 : options.idGenerator) != null ? _a : nanoid)();
            const abortController = new AC();
            let abortReason;
            const abortedPromise = new Promise((_, reject) => abortController.signal.addEventListener("abort", () => reject({ name: "AbortError", message: abortReason || "Aborted" })));
            let started = false;
            function abort(reason) {
                if (started) {
                    abortReason = reason;
                    abortController.abort();
                }
            }
            const promise = async function () {
                var _a2;
                let finalAction;
                try {
                    if (options && options.condition && options.condition(arg, { getState, extra }) === false) {
                        throw {
                            name: "ConditionError",
                            message: "Aborted due to condition callback returning false."
                        };
                    }
                    started = true;
                    dispatch(pending(requestId, arg, (_a2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _a2.call(options, { requestId, arg }, { getState, extra })));
                    finalAction = await Promise.race([
                        abortedPromise,
                        Promise.resolve(payloadCreator(arg, {
                            dispatch,
                            getState,
                            extra,
                            requestId,
                            signal: abortController.signal,
                            rejectWithValue: (value, meta) => {
                                return new RejectWithValue(value, meta);
                            },
                            fulfillWithValue: (value, meta) => {
                                return new FulfillWithMeta(value, meta);
                            }
                        })).then((result) => {
                            if (result instanceof RejectWithValue) {
                                throw result;
                            }
                            if (result instanceof FulfillWithMeta) {
                                return fulfilled(result.payload, requestId, arg, result.meta);
                            }
                            return fulfilled(result, requestId, arg);
                        })
                    ]);
                }
                catch (err) {
                    finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                }
                const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) {
                    dispatch(finalAction);
                }
                return finalAction;
            }();
            return Object.assign(promise, {
                abort,
                requestId,
                arg,
                unwrap() {
                    return promise.then(unwrapResult);
                }
            });
        };
    }
    return Object.assign(actionCreator, {
        pending,
        rejected,
        fulfilled,
        typePrefix
    });
}
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
// src/tsHelpers.ts
var hasMatchFunction = (v) => {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = (matcher, action) => {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf(...matchers) {
    return (action) => {
        return matchers.some((matcher) => matches(matcher, action));
    };
}
function isAllOf(...matchers) {
    return (action) => {
        return matchers.every((matcher) => matches(matcher, action));
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    const hasValidRequestId = typeof action.meta.requestId === "string";
    const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action) => hasExpectedRequestMetadata(action, ["pending"]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return (action) => {
        const matchers = asyncThunks.map((asyncThunk) => asyncThunk.pending);
        const combinedMatcher = isAnyOf(...matchers);
        return combinedMatcher(action);
    };
}
function isRejected(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return (action) => {
        const matchers = asyncThunks.map((asyncThunk) => asyncThunk.rejected);
        const combinedMatcher = isAnyOf(...matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue(...asyncThunks) {
    const hasFlag = (action) => {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return (action) => {
            const combinedMatcher = isAllOf(isRejected(...asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return (action) => {
        const combinedMatcher = isAllOf(isRejected(...asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action) => hasExpectedRequestMetadata(action, ["fulfilled"]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return (action) => {
        const matchers = asyncThunks.map((asyncThunk) => asyncThunk.fulfilled);
        const combinedMatcher = isAnyOf(...matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action) => hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return (action) => {
        const matchers = [];
        for (const asyncThunk of asyncThunks) {
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        const combinedMatcher = isAnyOf(...matchers);
        return combinedMatcher(action);
    };
}
// src/index.ts
enableES52();
export { MiddlewareArray, configureStore, createAction, createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createImmutableStateInvariantMiddleware, default2 as createNextState, createReducer, createSelector2 as createSelector, createSerializableStateInvariantMiddleware, createSlice, current2 as current, findNonSerializableValue, freeze, getDefaultMiddleware, getType, isAllOf, isAnyOf, isAsyncThunkAction, isDraft4 as isDraft, isFulfilled, isImmutableDefault, isPending, isPlain, isPlainObject, isRejected, isRejectedWithValue, miniSerializeError, nanoid, original, unwrapResult };
//# sourceMappingURL=module.js.map