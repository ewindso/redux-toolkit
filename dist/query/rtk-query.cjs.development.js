var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __objSpread = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _e = __getOwnPropSymbols(b); _i < _e.length; _i++) {
            var prop = _e[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __markAsModule = function (target) { return __defProp(target, "__esModule", { value: true }); };
var __objRest = function (source, exclude) {
    var target = {};
    for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
        for (var _i = 0, _e = __getOwnPropSymbols(source); _i < _e.length; _i++) {
            var prop = _e[_i];
            if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
                target[prop] = source[prop];
        }
    return target;
};
var __export = function (target, all) {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = function (target, module2, desc) {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        var _loop_1 = function (key) {
            if (!__hasOwnProp.call(target, key) && key !== "default")
                __defProp(target, key, { get: function () { return module2[key]; }, enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        };
        for (var _i = 0, _e = __getOwnPropNames(module2); _i < _e.length; _i++) {
            var key = _e[_i];
            _loop_1(key);
        }
    }
    return target;
};
var __toModule = function (module2) {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: function () { return module2.default; }, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/query/index.ts
__markAsModule(exports);
__export(exports, {
    QueryStatus: function () { return QueryStatus; },
    buildCreateApi: function () { return buildCreateApi; },
    copyWithStructuralSharing: function () { return copyWithStructuralSharing; },
    coreModule: function () { return coreModule; },
    createApi: function () { return createApi; },
    fakeBaseQuery: function () { return fakeBaseQuery; },
    fetchBaseQuery: function () { return fetchBaseQuery; },
    retry: function () { return retry; },
    setupListeners: function () { return setupListeners; },
    skipSelector: function () { return skipSelector; },
    skipToken: function () { return skipToken; }
});
// src/query/core/apiState.ts
var QueryStatus;
(function (QueryStatus2) {
    QueryStatus2["uninitialized"] = "uninitialized";
    QueryStatus2["pending"] = "pending";
    QueryStatus2["fulfilled"] = "fulfilled";
    QueryStatus2["rejected"] = "rejected";
})(QueryStatus || (QueryStatus = {}));
function getRequestStatusFlags(status) {
    return {
        status: status,
        isUninitialized: status === QueryStatus.uninitialized,
        isLoading: status === QueryStatus.pending,
        isSuccess: status === QueryStatus.fulfilled,
        isError: status === QueryStatus.rejected
    };
}
// src/query/utils/isAbsoluteUrl.ts
function isAbsoluteUrl(url) {
    return new RegExp("(^|:)//").test(url);
}
// src/query/utils/joinUrls.ts
var withoutTrailingSlash = function (url) { return url.replace(/\/$/, ""); };
var withoutLeadingSlash = function (url) { return url.replace(/^\//, ""); };
function joinUrls(base, url) {
    if (!base) {
        return url;
    }
    if (!url) {
        return base;
    }
    if (isAbsoluteUrl(url)) {
        return url;
    }
    base = withoutTrailingSlash(base);
    url = withoutLeadingSlash(url);
    return base + "/" + url;
}
// src/query/utils/flatten.ts
var flatten = function (arr) { return [].concat.apply([], arr); };
// src/query/utils/isOnline.ts
function isOnline() {
    return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
// src/query/utils/isDocumentVisible.ts
function isDocumentVisible() {
    if (typeof document === "undefined") {
        return true;
    }
    return document.visibilityState !== "hidden";
}
// src/query/utils/copyWithStructuralSharing.ts
var import_toolkit = __toModule(require("@reduxjs/toolkit"));
var isPlainObject = import_toolkit.isPlainObject;
function copyWithStructuralSharing(oldObj, newObj) {
    if (oldObj === newObj || !(isPlainObject(oldObj) && isPlainObject(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
        return newObj;
    }
    var newKeys = Object.keys(newObj);
    var oldKeys = Object.keys(oldObj);
    var isSameObject = newKeys.length === oldKeys.length;
    var mergeObj = Array.isArray(newObj) ? [] : {};
    for (var _i = 0, newKeys_1 = newKeys; _i < newKeys_1.length; _i++) {
        var key = newKeys_1[_i];
        mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
        if (isSameObject)
            isSameObject = oldObj[key] === mergeObj[key];
    }
    return isSameObject ? oldObj : mergeObj;
}
// src/query/fetchBaseQuery.ts
var import_toolkit2 = __toModule(require("@reduxjs/toolkit"));
var defaultValidateStatus = function (response) { return response.status >= 200 && response.status <= 299; };
var isJsonContentType = function (headers) {
    var _a, _b;
    return (_b = (_a = headers.get("content-type")) == null ? void 0 : _a.trim()) == null ? void 0 : _b.startsWith("application/json");
};
var handleResponse = function (response, responseHandler) { return __async(void 0, null, function () {
    var text;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (typeof responseHandler === "function") {
                    return [2 /*return*/, responseHandler(response)];
                }
                if (responseHandler === "text") {
                    return [2 /*return*/, response.text()];
                }
                if (!(responseHandler === "json")) return [3 /*break*/, 2];
                return [4 /*yield*/, response.text()];
            case 1:
                text = _e.sent();
                return [2 /*return*/, text.length ? JSON.parse(text) : void 0];
            case 2: return [2 /*return*/];
        }
    });
}); };
function stripUndefined(obj) {
    if (!(0, import_toolkit2.isPlainObject)(obj)) {
        return obj;
    }
    var copy = __objSpread({}, obj);
    for (var _i = 0, _e = Object.entries(copy); _i < _e.length; _i++) {
        var _f = _e[_i], k = _f[0], v = _f[1];
        if (typeof v === "undefined")
            delete copy[k];
    }
    return copy;
}
function fetchBaseQuery(_a) {
    var _this = this;
    if (_a === void 0) { _a = {}; }
    var _b = _a, baseUrl = _b.baseUrl, _e = _b.prepareHeaders, prepareHeaders = _e === void 0 ? function (x) { return x; } : _e, _f = _b.fetchFn, fetchFn = _f === void 0 ? fetch : _f, baseFetchOptions = __objRest(_b, [
        "baseUrl",
        "prepareHeaders",
        "fetchFn"
    ]);
    return function (_0, _1) { return __async(_this, [_0, _1], function (arg, _e) {
        var _a2, url, _f, method, _g, headers, _h, body, _j, params, _k, responseHandler, _l, validateStatus, rest, config, _m, isJsonifiable, divider, query, request, requestClone, response, responseClone, meta, resultData;
        var signal = _e.signal, getState = _e.getState;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _a2 = typeof arg == "string" ? { url: arg } : arg, url = _a2.url, _f = _a2.method, method = _f === void 0 ? "GET" : _f, _g = _a2.headers, headers = _g === void 0 ? new Headers({}) : _g, _h = _a2.body, body = _h === void 0 ? void 0 : _h, _j = _a2.params, params = _j === void 0 ? void 0 : _j, _k = _a2.responseHandler, responseHandler = _k === void 0 ? "json" : _k, _l = _a2.validateStatus, validateStatus = _l === void 0 ? defaultValidateStatus : _l, rest = __objRest(_a2, [
                        "url",
                        "method",
                        "headers",
                        "body",
                        "params",
                        "responseHandler",
                        "validateStatus"
                    ]);
                    config = __objSpread(__objSpread(__objSpread({}, baseFetchOptions), {
                        method: method,
                        signal: signal,
                        body: body
                    }), rest);
                    _m = config;
                    return [4 /*yield*/, prepareHeaders(new Headers(stripUndefined(headers)), { getState: getState })];
                case 1:
                    _m.headers = _o.sent();
                    isJsonifiable = function (body2) { return typeof body2 === "object" && ((0, import_toolkit2.isPlainObject)(body2) || Array.isArray(body2) || typeof body2.toJSON === "function"); };
                    if (!config.headers.has("content-type") && isJsonifiable(body)) {
                        config.headers.set("content-type", "application/json");
                    }
                    if (body && isJsonContentType(config.headers)) {
                        config.body = JSON.stringify(body);
                    }
                    if (params) {
                        divider = ~url.indexOf("?") ? "&" : "?";
                        query = new URLSearchParams(stripUndefined(params));
                        url += divider + query;
                    }
                    url = joinUrls(baseUrl, url);
                    request = new Request(url, config);
                    requestClone = request.clone();
                    return [4 /*yield*/, fetchFn(request)];
                case 2:
                    response = _o.sent();
                    responseClone = response.clone();
                    meta = { request: requestClone, response: responseClone };
                    return [4 /*yield*/, handleResponse(response, responseHandler)];
                case 3:
                    resultData = _o.sent();
                    return [2 /*return*/, validateStatus(response, resultData) ? {
                            data: resultData,
                            meta: meta
                        } : {
                            error: {
                                status: response.status,
                                data: resultData
                            },
                            meta: meta
                        }];
            }
        });
    }); };
}
// src/query/HandledError.ts
var HandledError = /** @class */ (function () {
    function HandledError(value, meta) {
        if (meta === void 0) { meta = void 0; }
        this.value = value;
        this.meta = meta;
    }
    return HandledError;
}());
// src/query/retry.ts
function defaultBackoff(attempt, maxRetries) {
    if (attempt === void 0) { attempt = 0; }
    if (maxRetries === void 0) { maxRetries = 5; }
    return __async(this, null, function () {
        var attempts, timeout;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    attempts = Math.min(attempt, maxRetries);
                    timeout = ~~((Math.random() + 0.4) * (300 << attempts));
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function (res) { return resolve(res); }, timeout); })];
                case 1:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fail(e) {
    throw Object.assign(new HandledError({ error: e }), {
        throwImmediately: true
    });
}
var retryWithBackoff = function (baseQuery, defaultOptions) { return function (args, api, extraOptions) { return __async(void 0, null, function () {
    var options, retry2, result, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                options = __objSpread(__objSpread({
                    maxRetries: 5,
                    backoff: defaultBackoff
                }, defaultOptions), extraOptions);
                retry2 = 0;
                _e.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 7];
                _e.label = 2;
            case 2:
                _e.trys.push([2, 4, , 6]);
                return [4 /*yield*/, baseQuery(args, api, extraOptions)];
            case 3:
                result = _e.sent();
                if (result.error) {
                    throw new HandledError(result);
                }
                return [2 /*return*/, result];
            case 4:
                e_1 = _e.sent();
                retry2++;
                if (e_1.throwImmediately || retry2 > options.maxRetries) {
                    if (e_1 instanceof HandledError) {
                        return [2 /*return*/, e_1.value];
                    }
                    throw e_1;
                }
                return [4 /*yield*/, options.backoff(retry2, options.maxRetries)];
            case 5:
                _e.sent();
                return [3 /*break*/, 6];
            case 6: return [3 /*break*/, 1];
            case 7: return [2 /*return*/];
        }
    });
}); }; };
var retry = /* @__PURE__ */ Object.assign(retryWithBackoff, { fail: fail });
// src/query/core/setupListeners.ts
var import_toolkit3 = __toModule(require("@reduxjs/toolkit"));
var onFocus = /* @__PURE__ */ (0, import_toolkit3.createAction)("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ (0, import_toolkit3.createAction)("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ (0, import_toolkit3.createAction)("__rtkq/online");
var onOffline = /* @__PURE__ */ (0, import_toolkit3.createAction)("__rtkq/offline");
var initialized = false;
function setupListeners(dispatch, customHandler) {
    function defaultHandler() {
        var handleFocus = function () { return dispatch(onFocus()); };
        var handleFocusLost = function () { return dispatch(onFocusLost()); };
        var handleOnline = function () { return dispatch(onOnline()); };
        var handleOffline = function () { return dispatch(onOffline()); };
        var handleVisibilityChange = function () {
            if (window.document.visibilityState === "visible") {
                handleFocus();
            }
            else {
                handleFocusLost();
            }
        };
        if (!initialized) {
            if (typeof window !== "undefined" && window.addEventListener) {
                window.addEventListener("visibilitychange", handleVisibilityChange, false);
                window.addEventListener("focus", handleFocus, false);
                window.addEventListener("online", handleOnline, false);
                window.addEventListener("offline", handleOffline, false);
                initialized = true;
            }
        }
        var unsubscribe = function () {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            initialized = false;
        };
        return unsubscribe;
    }
    return customHandler ? customHandler(dispatch, { onFocus: onFocus, onFocusLost: onFocusLost, onOffline: onOffline, onOnline: onOnline }) : defaultHandler();
}
// src/query/core/buildSelectors.ts
var import_toolkit4 = __toModule(require("@reduxjs/toolkit"));
var skipToken = /* @__PURE__ */ Symbol("skip selector");
var skipSelector = skipToken;
var initialSubState = {
    status: QueryStatus.uninitialized
};
var defaultQuerySubState = /* @__PURE__ */ (0, import_toolkit4.createNextState)(initialSubState, function () {
});
var defaultMutationSubState = /* @__PURE__ */ (0, import_toolkit4.createNextState)(initialSubState, function () {
});
function buildSelectors(_e) {
    var serializeQueryArgs = _e.serializeQueryArgs, reducerPath = _e.reducerPath;
    return { buildQuerySelector: buildQuerySelector, buildMutationSelector: buildMutationSelector };
    function withRequestFlags(substate) {
        return __objSpread(__objSpread({}, substate), getRequestStatusFlags(substate.status));
    }
    function selectInternalState(rootState) {
        var state = rootState[reducerPath];
        if (true) {
            if (!state) {
                if (selectInternalState.triggered)
                    return state;
                selectInternalState.triggered = true;
                console.error("Error: No data found at `state." + reducerPath + "`. Did you forget to add the reducer to the store?");
            }
        }
        return state;
    }
    function buildQuerySelector(endpointName, endpointDefinition) {
        return function (queryArgs) {
            var selectQuerySubState = (0, import_toolkit4.createSelector)(selectInternalState, function (internalState) {
                var _a, _b;
                return (_b = queryArgs === skipToken ? void 0 : (_a = internalState == null ? void 0 : internalState.queries) == null ? void 0 : _a[serializeQueryArgs({
                    queryArgs: queryArgs,
                    endpointDefinition: endpointDefinition,
                    endpointName: endpointName
                })]) != null ? _b : defaultQuerySubState;
            });
            return (0, import_toolkit4.createSelector)(selectQuerySubState, withRequestFlags);
        };
    }
    function buildMutationSelector() {
        return function (mutationId) {
            var selectMutationSubstate = (0, import_toolkit4.createSelector)(selectInternalState, function (internalState) {
                var _a, _b;
                return (_b = mutationId === skipToken ? void 0 : (_a = internalState == null ? void 0 : internalState.mutations) == null ? void 0 : _a[mutationId]) != null ? _b : defaultMutationSubState;
            });
            return (0, import_toolkit4.createSelector)(selectMutationSubstate, withRequestFlags);
        };
    }
}
// src/query/defaultSerializeQueryArgs.ts
var import_toolkit5 = __toModule(require("@reduxjs/toolkit"));
var defaultSerializeQueryArgs = function (_e) {
    var endpointName = _e.endpointName, queryArgs = _e.queryArgs;
    return endpointName + "(" + JSON.stringify(queryArgs, function (key, value) { return (0, import_toolkit5.isPlainObject)(value) ? Object.keys(value).sort().reduce(function (acc, key2) {
        acc[key2] = value[key2];
        return acc;
    }, {}) : value; }) + ")";
};
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
function calculateProvidedBy(description, result, error, queryArg, assertTagTypes) {
    if (isFunction(description)) {
        return description(result, error, queryArg).map(expandTagDescription).map(assertTagTypes);
    }
    if (Array.isArray(description)) {
        return description.map(expandTagDescription).map(assertTagTypes);
    }
    return [];
}
function isFunction(t) {
    return typeof t === "function";
}
function expandTagDescription(description) {
    return typeof description === "string" ? { type: description } : description;
}
// src/query/createApi.ts
function buildCreateApi() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
    }
    return function baseCreateApi(options) {
        var optionsWithDefaults = __objSpread(__objSpread({
            reducerPath: "api",
            serializeQueryArgs: defaultSerializeQueryArgs,
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: false,
            refetchOnFocus: false,
            refetchOnReconnect: false
        }, options), {
            tagTypes: __spreadArray([], options.tagTypes || [])
        });
        var context = {
            endpointDefinitions: {},
            batch: function (fn) {
                fn();
            }
        };
        var api = {
            injectEndpoints: injectEndpoints,
            enhanceEndpoints: function (_e) {
                var addTagTypes = _e.addTagTypes, endpoints = _e.endpoints;
                if (addTagTypes) {
                    for (var _i = 0, addTagTypes_1 = addTagTypes; _i < addTagTypes_1.length; _i++) {
                        var eT = addTagTypes_1[_i];
                        if (!optionsWithDefaults.tagTypes.includes(eT)) {
                            optionsWithDefaults.tagTypes.push(eT);
                        }
                    }
                }
                if (endpoints) {
                    for (var _f = 0, _g = Object.entries(endpoints); _f < _g.length; _f++) {
                        var _h = _g[_f], endpointName = _h[0], partialDefinition = _h[1];
                        if (typeof partialDefinition === "function") {
                            partialDefinition(context.endpointDefinitions[endpointName]);
                        }
                        Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
                    }
                }
                return api;
            }
        };
        var initializedModules = modules.map(function (m) { return m.init(api, optionsWithDefaults, context); });
        function injectEndpoints(inject) {
            var evaluatedEndpoints = inject.endpoints({
                query: function (x) { return __objSpread(__objSpread({}, x), { type: DefinitionType.query }); },
                mutation: function (x) { return __objSpread(__objSpread({}, x), { type: DefinitionType.mutation }); }
            });
            for (var _i = 0, _e = Object.entries(evaluatedEndpoints); _i < _e.length; _i++) {
                var _f = _e[_i], endpointName = _f[0], definition = _f[1];
                if (!inject.overrideExisting && endpointName in context.endpointDefinitions) {
                    if (typeof process !== "undefined" && true) {
                        console.error("called `injectEndpoints` to override already-existing endpointName " + endpointName + " without specifying `overrideExisting: true`");
                    }
                    continue;
                }
                context.endpointDefinitions[endpointName] = definition;
                for (var _g = 0, initializedModules_1 = initializedModules; _g < initializedModules_1.length; _g++) {
                    var m = initializedModules_1[_g];
                    m.injectEndpoint(endpointName, definition);
                }
            }
            return api;
        }
        return api.injectEndpoints({ endpoints: options.endpoints });
    };
}
// src/query/fakeBaseQuery.ts
function fakeBaseQuery() {
    return function () {
        throw new Error("When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.");
    };
}
// src/query/core/buildThunks.ts
var import_toolkit6 = __toModule(require("@reduxjs/toolkit"));
var import_immer = __toModule(require("immer"));
var import_toolkit7 = __toModule(require("@reduxjs/toolkit"));
function defaultTransformResponse(baseQueryReturnValue) {
    return baseQueryReturnValue;
}
function buildThunks(_e) {
    var _this = this;
    var reducerPath = _e.reducerPath, baseQuery = _e.baseQuery, endpointDefinitions = _e.context.endpointDefinitions, serializeQueryArgs = _e.serializeQueryArgs, api = _e.api;
    var patchQueryData = function (endpointName, args, patches) { return function (dispatch) {
        var endpointDefinition = endpointDefinitions[endpointName];
        dispatch(api.internalActions.queryResultPatched({
            queryCacheKey: serializeQueryArgs({
                queryArgs: args,
                endpointDefinition: endpointDefinition,
                endpointName: endpointName
            }),
            patches: patches
        }));
    }; };
    var updateQueryData = function (endpointName, args, updateRecipe) { return function (dispatch, getState) {
        var _e, _f;
        var currentState = api.endpoints[endpointName].select(args)(getState());
        var ret = {
            patches: [],
            inversePatches: [],
            undo: function () { return dispatch(api.util.patchQueryData(endpointName, args, ret.inversePatches)); }
        };
        if (currentState.status === QueryStatus.uninitialized) {
            return ret;
        }
        if ("data" in currentState) {
            if ((0, import_immer.isDraftable)(currentState.data)) {
                var _g = (0, import_immer.produceWithPatches)(currentState.data, updateRecipe), patches = _g[1], inversePatches = _g[2];
                (_e = ret.patches).push.apply(_e, patches);
                (_f = ret.inversePatches).push.apply(_f, inversePatches);
            }
            else {
                var value = updateRecipe(currentState.data);
                ret.patches.push({ op: "replace", path: [], value: value });
                ret.inversePatches.push({
                    op: "replace",
                    path: [],
                    value: currentState.data
                });
            }
        }
        dispatch(api.util.patchQueryData(endpointName, args, ret.patches));
        return ret;
    }; };
    var executeEndpoint = function (_0, _1) { return __async(_this, [_0, _1], function (arg, _e) {
        var endpointDefinition, transformResponse, result, baseQueryApi_1, _f, error_1;
        var signal = _e.signal, rejectWithValue = _e.rejectWithValue, fulfillWithValue = _e.fulfillWithValue, dispatch = _e.dispatch, getState = _e.getState;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    endpointDefinition = endpointDefinitions[arg.endpointName];
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 7, , 8]);
                    transformResponse = defaultTransformResponse;
                    result = void 0;
                    baseQueryApi_1 = {
                        signal: signal,
                        dispatch: dispatch,
                        getState: getState
                    };
                    if (!endpointDefinition.query) return [3 /*break*/, 3];
                    return [4 /*yield*/, baseQuery(endpointDefinition.query(arg.originalArgs), baseQueryApi_1, endpointDefinition.extraOptions)];
                case 2:
                    result = _g.sent();
                    if (endpointDefinition.transformResponse) {
                        transformResponse = endpointDefinition.transformResponse;
                    }
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, endpointDefinition.queryFn(arg.originalArgs, baseQueryApi_1, endpointDefinition.extraOptions, function (arg2) { return baseQuery(arg2, baseQueryApi_1, endpointDefinition.extraOptions); })];
                case 4:
                    result = _g.sent();
                    _g.label = 5;
                case 5:
                    if (result.error)
                        throw new HandledError(result.error, result.meta);
                    _f = fulfillWithValue;
                    return [4 /*yield*/, transformResponse(result.data, result.meta)];
                case 6: return [2 /*return*/, _f.apply(void 0, [_g.sent(), {
                            fulfilledTimeStamp: Date.now(),
                            baseQueryMeta: result.meta
                        }])];
                case 7:
                    error_1 = _g.sent();
                    if (error_1 instanceof HandledError) {
                        return [2 /*return*/, rejectWithValue(error_1.value, { baseQueryMeta: error_1.meta })];
                    }
                    throw error_1;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var queryThunk = (0, import_toolkit7.createAsyncThunk)(reducerPath + "/executeQuery", executeEndpoint, {
        getPendingMeta: function () {
            return { startedTimeStamp: Date.now() };
        },
        condition: function (arg, _e) {
            var getState = _e.getState;
            var _a, _b;
            var state = getState()[reducerPath];
            var requestState = (_a = state == null ? void 0 : state.queries) == null ? void 0 : _a[arg.queryCacheKey];
            var baseFetchOnMountOrArgChange = state.config.refetchOnMountOrArgChange;
            var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
            var refetchVal = (_b = arg.forceRefetch) != null ? _b : arg.subscribe && baseFetchOnMountOrArgChange;
            if ((requestState == null ? void 0 : requestState.status) === "pending")
                return false;
            if (fulfilledVal) {
                if (refetchVal) {
                    return refetchVal === true || (Number(new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
                }
                return false;
            }
            return true;
        },
        dispatchConditionRejection: true
    });
    var mutationThunk = (0, import_toolkit7.createAsyncThunk)(reducerPath + "/executeMutation", executeEndpoint, {
        getPendingMeta: function () {
            return { startedTimeStamp: Date.now() };
        }
    });
    var hasTheForce = function (options) { return "force" in options; };
    var hasMaxAge = function (options) { return "ifOlderThan" in options; };
    var prefetch = function (endpointName, arg, options) { return function (dispatch, getState) {
        var force = hasTheForce(options) && options.force;
        var maxAge = hasMaxAge(options) && options.ifOlderThan;
        var queryAction = function (force2) {
            if (force2 === void 0) { force2 = true; }
            return api.endpoints[endpointName].initiate(arg, { forceRefetch: force2 });
        };
        var latestStateValue = api.endpoints[endpointName].select(arg)(getState());
        if (force) {
            dispatch(queryAction());
        }
        else if (maxAge) {
            var lastFulfilledTs = latestStateValue == null ? void 0 : latestStateValue.fulfilledTimeStamp;
            if (!lastFulfilledTs) {
                dispatch(queryAction());
                return;
            }
            var shouldRetrigger = (Number(new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
            if (shouldRetrigger) {
                dispatch(queryAction());
            }
        }
        else {
            dispatch(queryAction(false));
        }
    }; };
    function matchesEndpoint(endpointName) {
        return function (action) {
            var _a, _b;
            return ((_b = (_a = action == null ? void 0 : action.meta) == null ? void 0 : _a.arg) == null ? void 0 : _b.endpointName) === endpointName;
        };
    }
    function buildMatchThunkActions(thunk, endpointName) {
        return {
            matchPending: (0, import_toolkit6.isAllOf)((0, import_toolkit6.isPending)(thunk), matchesEndpoint(endpointName)),
            matchFulfilled: (0, import_toolkit6.isAllOf)((0, import_toolkit6.isFulfilled)(thunk), matchesEndpoint(endpointName)),
            matchRejected: (0, import_toolkit6.isAllOf)((0, import_toolkit6.isRejected)(thunk), matchesEndpoint(endpointName))
        };
    }
    return {
        queryThunk: queryThunk,
        mutationThunk: mutationThunk,
        prefetch: prefetch,
        updateQueryData: updateQueryData,
        patchQueryData: patchQueryData,
        buildMatchThunkActions: buildMatchThunkActions
    };
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
    return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], (0, import_toolkit6.isFulfilled)(action) ? action.payload : void 0, (0, import_toolkit6.isRejectedWithValue)(action) ? action.payload : void 0, action.meta.arg.originalArgs, assertTagType);
}
// src/query/core/buildSlice.ts
var import_toolkit8 = __toModule(require("@reduxjs/toolkit"));
var import_immer2 = __toModule(require("immer"));
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
    var substate = state[queryCacheKey];
    if (substate) {
        update(substate);
    }
}
function updateMutationSubstateIfExists(state, _e, update) {
    var requestId = _e.requestId;
    var substate = state[requestId];
    if (substate) {
        update(substate);
    }
}
var initialState = {};
function buildSlice(_e) {
    var reducerPath = _e.reducerPath, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk, definitions = _e.context.endpointDefinitions, assertTagType = _e.assertTagType, config = _e.config;
    var resetApiState = (0, import_toolkit8.createAction)(reducerPath + "/resetApiState");
    var querySlice = (0, import_toolkit8.createSlice)({
        name: reducerPath + "/queries",
        initialState: initialState,
        reducers: {
            removeQueryResult: function (draft, _e) {
                var queryCacheKey = _e.payload.queryCacheKey;
                delete draft[queryCacheKey];
            },
            queryResultPatched: function (draft, _e) {
                var _f = _e.payload, queryCacheKey = _f.queryCacheKey, patches = _f.patches;
                updateQuerySubstateIfExists(draft, queryCacheKey, function (substate) {
                    substate.data = (0, import_immer2.applyPatches)(substate.data, patches.concat());
                });
            }
        },
        extraReducers: function (builder) {
            builder.addCase(queryThunk.pending, function (draft, _e) {
                var meta = _e.meta, arg = _e.meta.arg;
                var _a, _b;
                if (arg.subscribe) {
                    (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {
                        status: QueryStatus.uninitialized,
                        endpointName: arg.endpointName
                    };
                }
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, function (substate) {
                    substate.status = QueryStatus.pending;
                    substate.requestId = meta.requestId;
                    substate.originalArgs = arg.originalArgs;
                    substate.startedTimeStamp = meta.startedTimeStamp;
                });
            }).addCase(queryThunk.fulfilled, function (draft, _e) {
                var meta = _e.meta, payload = _e.payload;
                updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, function (substate) {
                    if (substate.requestId !== meta.requestId)
                        return;
                    substate.status = QueryStatus.fulfilled;
                    substate.data = copyWithStructuralSharing(substate.data, payload);
                    delete substate.error;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(queryThunk.rejected, function (draft, _e) {
                var _f = _e.meta, condition = _f.condition, arg = _f.arg, requestId = _f.requestId, error = _e.error, payload = _e.payload;
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, function (substate) {
                    if (condition) {
                    }
                    else {
                        if (substate.requestId !== requestId)
                            return;
                        substate.status = QueryStatus.rejected;
                        substate.error = payload != null ? payload : error;
                    }
                });
            });
        }
    });
    var mutationSlice = (0, import_toolkit8.createSlice)({
        name: reducerPath + "/mutations",
        initialState: initialState,
        reducers: {
            unsubscribeMutationResult: function (draft, action) {
                if (action.payload.requestId in draft) {
                    delete draft[action.payload.requestId];
                }
            }
        },
        extraReducers: function (builder) {
            builder.addCase(mutationThunk.pending, function (draft, _e) {
                var _f = _e.meta, arg = _f.arg, requestId = _f.requestId, startedTimeStamp = _f.startedTimeStamp;
                if (!arg.track)
                    return;
                draft[requestId] = {
                    status: QueryStatus.pending,
                    originalArgs: arg.originalArgs,
                    endpointName: arg.endpointName,
                    startedTimeStamp: startedTimeStamp
                };
            }).addCase(mutationThunk.fulfilled, function (draft, _e) {
                var payload = _e.payload, meta = _e.meta, requestId = _e.meta.requestId;
                if (!meta.arg.track)
                    return;
                updateMutationSubstateIfExists(draft, { requestId: requestId }, function (substate) {
                    substate.status = QueryStatus.fulfilled;
                    substate.data = payload;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(mutationThunk.rejected, function (draft, _e) {
                var payload = _e.payload, error = _e.error, _f = _e.meta, requestId = _f.requestId, arg = _f.arg;
                if (!arg.track)
                    return;
                updateMutationSubstateIfExists(draft, { requestId: requestId }, function (substate) {
                    substate.status = QueryStatus.rejected;
                    substate.error = payload != null ? payload : error;
                });
            });
        }
    });
    var invalidationSlice = (0, import_toolkit8.createSlice)({
        name: reducerPath + "/invalidation",
        initialState: initialState,
        reducers: {},
        extraReducers: function (builder) {
            builder.addCase(querySlice.actions.removeQueryResult, function (draft, _e) {
                var queryCacheKey = _e.payload.queryCacheKey;
                for (var _i = 0, _f = Object.values(draft); _i < _f.length; _i++) {
                    var tagTypeSubscriptions = _f[_i];
                    for (var _g = 0, _h = Object.values(tagTypeSubscriptions); _g < _h.length; _g++) {
                        var idSubscriptions = _h[_g];
                        var foundAt = idSubscriptions.indexOf(queryCacheKey);
                        if (foundAt !== -1) {
                            idSubscriptions.splice(foundAt, 1);
                        }
                    }
                }
            }).addMatcher((0, import_toolkit8.isAnyOf)((0, import_toolkit8.isFulfilled)(queryThunk), (0, import_toolkit8.isRejectedWithValue)(queryThunk)), function (draft, action) {
                var _a, _b, _c, _d;
                var providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
                var queryCacheKey = action.meta.arg.queryCacheKey;
                for (var _i = 0, providedTags_1 = providedTags; _i < providedTags_1.length; _i++) {
                    var _e = providedTags_1[_i], type = _e.type, id = _e.id;
                    var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id || "__internal_without_id"]) != null ? _d : _b[_c] = [];
                    var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                    if (!alreadySubscribed) {
                        subscribedQueries.push(queryCacheKey);
                    }
                }
            });
        }
    });
    var subscriptionSlice = (0, import_toolkit8.createSlice)({
        name: reducerPath + "/subscriptions",
        initialState: initialState,
        reducers: {
            updateSubscriptionOptions: function (draft, _e) {
                var _f = _e.payload, queryCacheKey = _f.queryCacheKey, requestId = _f.requestId, options = _f.options;
                var _a;
                if ((_a = draft == null ? void 0 : draft[queryCacheKey]) == null ? void 0 : _a[requestId]) {
                    draft[queryCacheKey][requestId] = options;
                }
            },
            unsubscribeQueryResult: function (draft, _e) {
                var _f = _e.payload, queryCacheKey = _f.queryCacheKey, requestId = _f.requestId;
                if (draft[queryCacheKey]) {
                    delete draft[queryCacheKey][requestId];
                }
            }
        },
        extraReducers: function (builder) {
            builder.addCase(querySlice.actions.removeQueryResult, function (draft, _e) {
                var queryCacheKey = _e.payload.queryCacheKey;
                delete draft[queryCacheKey];
            }).addCase(queryThunk.pending, function (draft, _e) {
                var _f = _e.meta, arg = _f.arg, requestId = _f.requestId;
                var _a, _b, _c, _d;
                if (arg.subscribe) {
                    var substate = (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {};
                    substate[requestId] = (_d = (_c = arg.subscriptionOptions) != null ? _c : substate[requestId]) != null ? _d : {};
                }
            }).addCase(queryThunk.rejected, function (draft, _e) {
                var _f = _e.meta, condition = _f.condition, arg = _f.arg, requestId = _f.requestId, error = _e.error, payload = _e.payload;
                var _a, _b;
                var substate = draft[arg.queryCacheKey];
                if (condition && arg.subscribe && substate) {
                    substate[requestId] = (_b = (_a = arg.subscriptionOptions) != null ? _a : substate[requestId]) != null ? _b : {};
                }
            });
        }
    });
    var configSlice = (0, import_toolkit8.createSlice)({
        name: reducerPath + "/config",
        initialState: __objSpread({
            online: isOnline(),
            focused: isDocumentVisible(),
            middlewareRegistered: false
        }, config),
        reducers: {
            middlewareRegistered: function (state) {
                state.middlewareRegistered = true;
            }
        },
        extraReducers: function (builder) {
            builder.addCase(onOnline, function (state) {
                state.online = true;
            }).addCase(onOffline, function (state) {
                state.online = false;
            }).addCase(onFocus, function (state) {
                state.focused = true;
            }).addCase(onFocusLost, function (state) {
                state.focused = false;
            });
        }
    });
    var combinedReducer = (0, import_toolkit8.combineReducers)({
        queries: querySlice.reducer,
        mutations: mutationSlice.reducer,
        provided: invalidationSlice.reducer,
        subscriptions: subscriptionSlice.reducer,
        config: configSlice.reducer
    });
    var reducer = function (state, action) { return combinedReducer(resetApiState.match(action) ? void 0 : state, action); };
    var actions = __objSpread(__objSpread(__objSpread(__objSpread(__objSpread({}, configSlice.actions), querySlice.actions), subscriptionSlice.actions), mutationSlice.actions), {
        resetApiState: resetApiState
    });
    return { reducer: reducer, actions: actions };
}
// src/query/core/buildMiddleware/index.ts
var import_redux = __toModule(require("redux"));
var import_toolkit12 = __toModule(require("@reduxjs/toolkit"));
// src/query/core/buildMiddleware/cacheCollection.ts
var build = function (_e) {
    var reducerPath = _e.reducerPath, api = _e.api, context = _e.context;
    var _f = api.internalActions, removeQueryResult = _f.removeQueryResult, unsubscribeQueryResult = _f.unsubscribeQueryResult;
    return function (mwApi) {
        var currentRemovalTimeouts = {};
        return function (next) { return function (action) {
            var _a, _b;
            var result = next(action);
            if (unsubscribeQueryResult.match(action)) {
                var state = mwApi.getState()[reducerPath];
                var queryCacheKey = action.payload.queryCacheKey;
                var endpointDefinition = context.endpointDefinitions[(_a = state.queries[queryCacheKey]) == null ? void 0 : _a.endpointName];
                handleUnsubscribe(queryCacheKey, mwApi, (_b = endpointDefinition == null ? void 0 : endpointDefinition.keepUnusedDataFor) != null ? _b : state.config.keepUnusedDataFor);
            }
            if (api.util.resetApiState.match(action)) {
                for (var _i = 0, _e = Object.entries(currentRemovalTimeouts); _i < _e.length; _i++) {
                    var _f = _e[_i], key = _f[0], timeout = _f[1];
                    if (timeout)
                        clearTimeout(timeout);
                    delete currentRemovalTimeouts[key];
                }
            }
            return result;
        }; };
        function handleUnsubscribe(queryCacheKey, api2, keepUnusedDataFor) {
            var currentTimeout = currentRemovalTimeouts[queryCacheKey];
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
            currentRemovalTimeouts[queryCacheKey] = setTimeout(function () {
                var subscriptions = api2.getState()[reducerPath].subscriptions[queryCacheKey];
                if (!subscriptions || Object.keys(subscriptions).length === 0) {
                    api2.dispatch(removeQueryResult({ queryCacheKey: queryCacheKey }));
                }
                delete currentRemovalTimeouts[queryCacheKey];
            }, keepUnusedDataFor * 1e3);
        }
    };
};
// src/query/core/buildMiddleware/invalidationByTags.ts
var import_toolkit9 = __toModule(require("@reduxjs/toolkit"));
var build2 = function (_e) {
    var reducerPath = _e.reducerPath, context = _e.context, endpointDefinitions = _e.context.endpointDefinitions, mutationThunk = _e.mutationThunk, api = _e.api, assertTagType = _e.assertTagType, refetchQuery = _e.refetchQuery;
    var removeQueryResult = api.internalActions.removeQueryResult;
    return function (mwApi) { return function (next) { return function (action) {
        var result = next(action);
        if ((0, import_toolkit9.isAnyOf)((0, import_toolkit9.isFulfilled)(mutationThunk), (0, import_toolkit9.isRejectedWithValue)(mutationThunk))(action)) {
            invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
        }
        if (api.util.invalidateTags.match(action)) {
            invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, assertTagType), mwApi);
        }
        return result;
    }; }; };
    function invalidateTags(tags, api2) {
        var _a;
        var state = api2.getState()[reducerPath];
        var toInvalidate = new Set();
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var tag = tags_1[_i];
            var provided = state.provided[tag.type];
            if (!provided) {
                continue;
            }
            var invalidateSubscriptions = (_a = tag.id !== void 0 ? provided[tag.id] : flatten(Object.values(provided))) != null ? _a : [];
            for (var _e = 0, invalidateSubscriptions_1 = invalidateSubscriptions; _e < invalidateSubscriptions_1.length; _e++) {
                var invalidate = invalidateSubscriptions_1[_e];
                toInvalidate.add(invalidate);
            }
        }
        context.batch(function () {
            var valuesArray = Array.from(toInvalidate.values());
            for (var _i = 0, valuesArray_1 = valuesArray; _i < valuesArray_1.length; _i++) {
                var queryCacheKey = valuesArray_1[_i];
                var querySubState = state.queries[queryCacheKey];
                var subscriptionSubState = state.subscriptions[queryCacheKey];
                if (querySubState && subscriptionSubState) {
                    if (Object.keys(subscriptionSubState).length === 0) {
                        api2.dispatch(removeQueryResult({ queryCacheKey: queryCacheKey }));
                    }
                    else if (querySubState.status !== QueryStatus.uninitialized) {
                        api2.dispatch(refetchQuery(querySubState, queryCacheKey));
                    }
                    else {
                    }
                }
            }
        });
    }
};
// src/query/core/buildMiddleware/polling.ts
var build3 = function (_e) {
    var reducerPath = _e.reducerPath, queryThunk = _e.queryThunk, api = _e.api, refetchQuery = _e.refetchQuery;
    return function (mwApi) {
        var currentPolls = {};
        return function (next) { return function (action) {
            var result = next(action);
            if (api.internalActions.updateSubscriptionOptions.match(action)) {
                updatePollingInterval(action.payload, mwApi);
            }
            if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
                updatePollingInterval(action.meta.arg, mwApi);
            }
            if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
                startNextPoll(action.meta.arg, mwApi);
            }
            if (api.util.resetApiState.match(action)) {
                clearPolls();
            }
            return result;
        }; };
        function startNextPoll(_e, api2) {
            var queryCacheKey = _e.queryCacheKey;
            var state = api2.getState()[reducerPath];
            var querySubState = state.queries[queryCacheKey];
            var subscriptions = state.subscriptions[queryCacheKey];
            if (!querySubState || querySubState.status === QueryStatus.uninitialized)
                return;
            var lowestPollingInterval = findLowestPollingInterval(subscriptions);
            if (!Number.isFinite(lowestPollingInterval))
                return;
            var currentPoll = currentPolls[queryCacheKey];
            if (currentPoll == null ? void 0 : currentPoll.timeout) {
                clearTimeout(currentPoll.timeout);
                currentPoll.timeout = void 0;
            }
            var nextPollTimestamp = Date.now() + lowestPollingInterval;
            var currentInterval = currentPolls[queryCacheKey] = {
                nextPollTimestamp: nextPollTimestamp,
                pollingInterval: lowestPollingInterval,
                timeout: setTimeout(function () {
                    currentInterval.timeout = void 0;
                    api2.dispatch(refetchQuery(querySubState, queryCacheKey));
                }, lowestPollingInterval)
            };
        }
        function updatePollingInterval(_e, api2) {
            var queryCacheKey = _e.queryCacheKey;
            var state = api2.getState()[reducerPath];
            var querySubState = state.queries[queryCacheKey];
            var subscriptions = state.subscriptions[queryCacheKey];
            if (!querySubState || querySubState.status === QueryStatus.uninitialized) {
                return;
            }
            var lowestPollingInterval = findLowestPollingInterval(subscriptions);
            var currentPoll = currentPolls[queryCacheKey];
            if (!Number.isFinite(lowestPollingInterval)) {
                if (currentPoll == null ? void 0 : currentPoll.timeout) {
                    clearTimeout(currentPoll.timeout);
                }
                delete currentPolls[queryCacheKey];
                return;
            }
            var nextPollTimestamp = Date.now() + lowestPollingInterval;
            if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
                startNextPoll({ queryCacheKey: queryCacheKey }, api2);
            }
        }
        function clearPolls() {
            for (var _i = 0, _e = Object.entries(currentPolls); _i < _e.length; _i++) {
                var _f = _e[_i], key = _f[0], poll = _f[1];
                if (poll == null ? void 0 : poll.timeout)
                    clearTimeout(poll.timeout);
                delete currentPolls[key];
            }
        }
    };
    function findLowestPollingInterval(subscribers) {
        if (subscribers === void 0) { subscribers = {}; }
        var lowestPollingInterval = Number.POSITIVE_INFINITY;
        for (var _i = 0, _e = Object.values(subscribers); _i < _e.length; _i++) {
            var subscription = _e[_i];
            if (!!subscription.pollingInterval)
                lowestPollingInterval = Math.min(subscription.pollingInterval, lowestPollingInterval);
        }
        return lowestPollingInterval;
    }
};
// src/query/core/buildMiddleware/windowEventHandling.ts
var build4 = function (_e) {
    var reducerPath = _e.reducerPath, context = _e.context, refetchQuery = _e.refetchQuery;
    return function (mwApi) { return function (next) { return function (action) {
        var result = next(action);
        if (onFocus.match(action)) {
            refetchValidQueries(mwApi, "refetchOnFocus");
        }
        if (onOnline.match(action)) {
            refetchValidQueries(mwApi, "refetchOnReconnect");
        }
        return result;
    }; }; };
    function refetchValidQueries(api, type) {
        var state = api.getState()[reducerPath];
        var queries = state.queries;
        var subscriptions = state.subscriptions;
        context.batch(function () {
            for (var _i = 0, _e = Object.keys(subscriptions); _i < _e.length; _i++) {
                var queryCacheKey = _e[_i];
                var querySubState = queries[queryCacheKey];
                var subscriptionSubState = subscriptions[queryCacheKey];
                if (!subscriptionSubState || !querySubState || querySubState.status === QueryStatus.uninitialized)
                    return;
                var shouldRefetch = Object.values(subscriptionSubState).some(function (sub) { return sub[type] === true; }) || Object.values(subscriptionSubState).every(function (sub) { return sub[type] === void 0; }) && state.config[type];
                if (shouldRefetch) {
                    api.dispatch(refetchQuery(querySubState, queryCacheKey));
                }
            }
        });
    }
};
// src/query/core/buildMiddleware/cacheLifecycle.ts
var import_toolkit10 = __toModule(require("@reduxjs/toolkit"));
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var build5 = function (_e) {
    var api = _e.api, reducerPath = _e.reducerPath, context = _e.context, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk;
    var isQueryThunk = (0, import_toolkit10.isAsyncThunkAction)(queryThunk);
    var isMutationThunk = (0, import_toolkit10.isAsyncThunkAction)(mutationThunk);
    var isFullfilledThunk = (0, import_toolkit10.isFulfilled)(queryThunk, mutationThunk);
    return function (mwApi) {
        var lifecycleMap = {};
        return function (next) { return function (action) {
            var stateBefore = mwApi.getState();
            var result = next(action);
            var cacheKey = getCacheKey(action);
            if (queryThunk.pending.match(action)) {
                var oldState = stateBefore[reducerPath].queries[cacheKey];
                var state = mwApi.getState()[reducerPath].queries[cacheKey];
                if (!oldState && state) {
                    handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
                }
            }
            else if (mutationThunk.pending.match(action)) {
                var state = mwApi.getState()[reducerPath].mutations[cacheKey];
                if (state) {
                    handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
                }
            }
            else if (isFullfilledThunk(action)) {
                var lifecycle = lifecycleMap[cacheKey];
                if (lifecycle == null ? void 0 : lifecycle.valueResolved) {
                    lifecycle.valueResolved({
                        data: action.payload,
                        meta: action.meta.baseQueryMeta
                    });
                    delete lifecycle.valueResolved;
                }
            }
            else if (api.internalActions.removeQueryResult.match(action) || api.internalActions.unsubscribeMutationResult.match(action)) {
                var lifecycle = lifecycleMap[cacheKey];
                if (lifecycle) {
                    delete lifecycleMap[cacheKey];
                    lifecycle.cacheEntryRemoved();
                }
            }
            else if (api.util.resetApiState.match(action)) {
                for (var _i = 0, _e = Object.entries(lifecycleMap); _i < _e.length; _i++) {
                    var _f = _e[_i], cacheKey2 = _f[0], lifecycle = _f[1];
                    delete lifecycleMap[cacheKey2];
                    lifecycle.cacheEntryRemoved();
                }
            }
            return result;
        }; };
        function getCacheKey(action) {
            if (isQueryThunk(action))
                return action.meta.arg.queryCacheKey;
            if (isMutationThunk(action))
                return action.meta.requestId;
            if (api.internalActions.removeQueryResult.match(action))
                return action.payload.queryCacheKey;
            if (api.internalActions.unsubscribeMutationResult.match(action))
                return action.payload.requestId;
            return "";
        }
        function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi2, requestId) {
            var endpointDefinition = context.endpointDefinitions[endpointName];
            var onCacheEntryAdded = endpointDefinition == null ? void 0 : endpointDefinition.onCacheEntryAdded;
            if (!onCacheEntryAdded)
                return;
            var lifecycle = {};
            var cacheEntryRemoved = new Promise(function (resolve) {
                lifecycle.cacheEntryRemoved = resolve;
            });
            var cacheDataLoaded = Promise.race([
                new Promise(function (resolve) {
                    lifecycle.valueResolved = resolve;
                }),
                cacheEntryRemoved.then(function () {
                    throw neverResolvedError;
                })
            ]);
            cacheDataLoaded.catch(function () {
            });
            lifecycleMap[queryCacheKey] = lifecycle;
            var selector = api.endpoints[endpointName].select(endpointDefinition.type === DefinitionType.query ? originalArgs : queryCacheKey);
            var extra = mwApi2.dispatch(function (_, __, extra2) { return extra2; });
            var lifecycleApi = __objSpread(__objSpread({}, mwApi2), {
                getCacheEntry: function () { return selector(mwApi2.getState()); },
                requestId: requestId,
                extra: extra,
                updateCachedData: endpointDefinition.type === DefinitionType.query ? function (updateRecipe) { return mwApi2.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)); } : void 0,
                cacheDataLoaded: cacheDataLoaded,
                cacheEntryRemoved: cacheEntryRemoved
            });
            var runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
            Promise.resolve(runningHandler).catch(function (e) {
                if (e === neverResolvedError)
                    return;
                throw e;
            });
        }
    };
};
// src/query/core/buildMiddleware/queryLifecycle.ts
var import_toolkit11 = __toModule(require("@reduxjs/toolkit"));
var build6 = function (_e) {
    var api = _e.api, context = _e.context, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk;
    var isPendingThunk = (0, import_toolkit11.isPending)(queryThunk, mutationThunk);
    var isRejectedThunk = (0, import_toolkit11.isRejected)(queryThunk, mutationThunk);
    var isFullfilledThunk = (0, import_toolkit11.isFulfilled)(queryThunk, mutationThunk);
    return function (mwApi) {
        var lifecycleMap = {};
        return function (next) { return function (action) {
            var _a, _b, _c;
            var result = next(action);
            if (isPendingThunk(action)) {
                var _e = action.meta, requestId = _e.requestId, _f = _e.arg, endpointName_1 = _f.endpointName, originalArgs_1 = _f.originalArgs;
                var endpointDefinition = context.endpointDefinitions[endpointName_1];
                var onQueryStarted = endpointDefinition == null ? void 0 : endpointDefinition.onQueryStarted;
                if (onQueryStarted) {
                    var lifecycle_1 = {};
                    var queryFulfilled = new Promise(function (resolve, reject) {
                        lifecycle_1.resolve = resolve;
                        lifecycle_1.reject = reject;
                    });
                    queryFulfilled.catch(function () {
                    });
                    lifecycleMap[requestId] = lifecycle_1;
                    var selector_1 = api.endpoints[endpointName_1].select(endpointDefinition.type === DefinitionType.query ? originalArgs_1 : requestId);
                    var extra = mwApi.dispatch(function (_, __, extra2) { return extra2; });
                    var lifecycleApi = __objSpread(__objSpread({}, mwApi), {
                        getCacheEntry: function () { return selector_1(mwApi.getState()); },
                        requestId: requestId,
                        extra: extra,
                        updateCachedData: endpointDefinition.type === DefinitionType.query ? function (updateRecipe) { return mwApi.dispatch(api.util.updateQueryData(endpointName_1, originalArgs_1, updateRecipe)); } : void 0,
                        queryFulfilled: queryFulfilled
                    });
                    onQueryStarted(originalArgs_1, lifecycleApi);
                }
            }
            else if (isFullfilledThunk(action)) {
                var _g = action.meta, requestId = _g.requestId, baseQueryMeta = _g.baseQueryMeta;
                (_a = lifecycleMap[requestId]) == null ? void 0 : _a.resolve({
                    data: action.payload,
                    meta: baseQueryMeta
                });
                delete lifecycleMap[requestId];
            }
            else if (isRejectedThunk(action)) {
                var _h = action.meta, requestId = _h.requestId, rejectedWithValue = _h.rejectedWithValue, baseQueryMeta = _h.baseQueryMeta;
                (_c = lifecycleMap[requestId]) == null ? void 0 : _c.reject({
                    error: (_b = action.payload) != null ? _b : action.error,
                    isUnhandledError: !rejectedWithValue,
                    meta: baseQueryMeta
                });
                delete lifecycleMap[requestId];
            }
            return result;
        }; };
    };
};
// src/query/core/buildMiddleware/devMiddleware.ts
var build7 = function (_e) {
    var api = _e.api;
    return function (mwApi) {
        var initialized2 = false;
        return function (next) { return function (action) {
            if (!initialized2) {
                initialized2 = true;
                mwApi.dispatch(api.internalActions.middlewareRegistered());
            }
            var result = next(action);
            if (api.util.resetApiState.match(action)) {
                mwApi.dispatch(api.internalActions.middlewareRegistered());
            }
            return result;
        }; };
    };
};
// src/query/core/buildMiddleware/index.ts
function buildMiddleware(input) {
    var reducerPath = input.reducerPath, queryThunk = input.queryThunk;
    var actions = {
        invalidateTags: (0, import_toolkit12.createAction)(reducerPath + "/invalidateTags")
    };
    var middlewares = [
        build7,
        build,
        build2,
        build3,
        build4,
        build5,
        build6
    ].map(function (build8) { return build8(__objSpread(__objSpread({}, input), {
        refetchQuery: refetchQuery
    })); });
    var middleware = function (mwApi) { return function (next) {
        var applied = (0, import_redux.compose).apply(void 0, middlewares.map(function (middleware2) { return middleware2(mwApi); }))(next);
        return function (action) {
            if (mwApi.getState()[reducerPath]) {
                return applied(action);
            }
            return next(action);
        };
    }; };
    return { middleware: middleware, actions: actions };
    function refetchQuery(querySubState, queryCacheKey, override) {
        if (override === void 0) { override = {}; }
        return queryThunk(__objSpread({
            endpointName: querySubState.endpointName,
            originalArgs: querySubState.originalArgs,
            subscribe: false,
            forceRefetch: true,
            queryCacheKey: queryCacheKey
        }, override));
    }
}
// src/query/core/buildInitiate.ts
function buildInitiate(_e) {
    var serializeQueryArgs = _e.serializeQueryArgs, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk, api = _e.api;
    var _f = api.internalActions, unsubscribeQueryResult = _f.unsubscribeQueryResult, unsubscribeMutationResult = _f.unsubscribeMutationResult, updateSubscriptionOptions = _f.updateSubscriptionOptions;
    return { buildInitiateQuery: buildInitiateQuery, buildInitiateMutation: buildInitiateMutation };
    function middlewareWarning(getState) {
        var _a, _b;
        if (true) {
            if (middlewareWarning.triggered)
                return;
            var registered = (_b = (_a = getState()[api.reducerPath]) == null ? void 0 : _a.config) == null ? void 0 : _b.middlewareRegistered;
            if (registered !== void 0) {
                ;
                middlewareWarning.triggered = true;
            }
            if (registered === false) {
                console.warn("Warning: Middleware for RTK-Query API at reducerPath \"" + api.reducerPath + "\" has not been added to the store.\nFeatures like automatic cache collection, automatic refetching etc. will not be available.");
            }
        }
    }
    function buildInitiateQuery(endpointName, endpointDefinition) {
        var queryAction = function (arg, _e) {
            var _f = _e === void 0 ? {} : _e, _g = _f.subscribe, subscribe = _g === void 0 ? true : _g, forceRefetch = _f.forceRefetch, subscriptionOptions = _f.subscriptionOptions;
            return function (dispatch, getState) {
                var queryCacheKey = serializeQueryArgs({
                    queryArgs: arg,
                    endpointDefinition: endpointDefinition,
                    endpointName: endpointName
                });
                var thunk = queryThunk({
                    subscribe: subscribe,
                    forceRefetch: forceRefetch,
                    subscriptionOptions: subscriptionOptions,
                    endpointName: endpointName,
                    originalArgs: arg,
                    queryCacheKey: queryCacheKey
                });
                var thunkResult = dispatch(thunk);
                middlewareWarning(getState);
                var requestId = thunkResult.requestId, abort = thunkResult.abort;
                var statePromise = Object.assign(thunkResult.then(function () { return api.endpoints[endpointName].select(arg)(getState()); }), {
                    arg: arg,
                    requestId: requestId,
                    subscriptionOptions: subscriptionOptions,
                    abort: abort,
                    refetch: function () {
                        dispatch(queryAction(arg, { subscribe: false, forceRefetch: true }));
                    },
                    unsubscribe: function () {
                        if (subscribe)
                            dispatch(unsubscribeQueryResult({
                                queryCacheKey: queryCacheKey,
                                requestId: requestId
                            }));
                    },
                    updateSubscriptionOptions: function (options) {
                        statePromise.subscriptionOptions = options;
                        dispatch(updateSubscriptionOptions({
                            endpointName: endpointName,
                            requestId: requestId,
                            queryCacheKey: queryCacheKey,
                            options: options
                        }));
                    }
                });
                return statePromise;
            };
        };
        return queryAction;
    }
    function buildInitiateMutation(endpointName, definition) {
        return function (arg, _e) {
            var _f = _e === void 0 ? {} : _e, _g = _f.track, track = _g === void 0 ? true : _g;
            return function (dispatch, getState) {
                var thunk = mutationThunk({
                    endpointName: endpointName,
                    originalArgs: arg,
                    track: track
                });
                var thunkResult = dispatch(thunk);
                middlewareWarning(getState);
                var requestId = thunkResult.requestId, abort = thunkResult.abort;
                var returnValuePromise = thunkResult.unwrap().then(function (data) { return ({ data: data }); }).catch(function (error) { return ({ error: error }); });
                return Object.assign(returnValuePromise, {
                    arg: thunkResult.arg,
                    requestId: requestId,
                    abort: abort,
                    unwrap: thunkResult.unwrap,
                    unsubscribe: function () {
                        if (track)
                            dispatch(unsubscribeMutationResult({ requestId: requestId }));
                    }
                });
            };
        };
    }
}
// src/query/tsHelpers.ts
function assertCast(v) {
}
function safeAssign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    Object.assign.apply(Object, __spreadArray([target], args));
}
// src/query/core/module.ts
var import_immer3 = __toModule(require("immer"));
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = function () { return ({
    name: coreModuleName,
    init: function (api, _e, context) {
        var baseQuery = _e.baseQuery, tagTypes = _e.tagTypes, reducerPath = _e.reducerPath, serializeQueryArgs = _e.serializeQueryArgs, keepUnusedDataFor = _e.keepUnusedDataFor, refetchOnMountOrArgChange = _e.refetchOnMountOrArgChange, refetchOnFocus = _e.refetchOnFocus, refetchOnReconnect = _e.refetchOnReconnect;
        (0, import_immer3.enablePatches)();
        assertCast(serializeQueryArgs);
        var assertTagType = function (tag) {
            if (typeof process !== "undefined" && true) {
                if (!tagTypes.includes(tag.type)) {
                    console.error("Tag type '" + tag.type + "' was used, but not specified in `tagTypes`!");
                }
            }
            return tag;
        };
        Object.assign(api, {
            reducerPath: reducerPath,
            endpoints: {},
            internalActions: {
                onOnline: onOnline,
                onOffline: onOffline,
                onFocus: onFocus,
                onFocusLost: onFocusLost
            },
            util: {}
        });
        var _f = buildThunks({
            baseQuery: baseQuery,
            reducerPath: reducerPath,
            context: context,
            api: api,
            serializeQueryArgs: serializeQueryArgs
        }), queryThunk = _f.queryThunk, mutationThunk = _f.mutationThunk, patchQueryData = _f.patchQueryData, updateQueryData = _f.updateQueryData, prefetch = _f.prefetch, buildMatchThunkActions = _f.buildMatchThunkActions;
        var _g = buildSlice({
            context: context,
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            reducerPath: reducerPath,
            assertTagType: assertTagType,
            config: {
                refetchOnFocus: refetchOnFocus,
                refetchOnReconnect: refetchOnReconnect,
                refetchOnMountOrArgChange: refetchOnMountOrArgChange,
                keepUnusedDataFor: keepUnusedDataFor,
                reducerPath: reducerPath
            }
        }), reducer = _g.reducer, sliceActions = _g.actions;
        safeAssign(api.util, {
            patchQueryData: patchQueryData,
            updateQueryData: updateQueryData,
            prefetch: prefetch,
            resetApiState: sliceActions.resetApiState
        });
        safeAssign(api.internalActions, sliceActions);
        Object.defineProperty(api.util, "updateQueryResult", {
            get: function () {
                if (typeof process !== "undefined" && true) {
                    console.warn("`api.util.updateQueryResult` has been renamed to `api.util.updateQueryData`, please change your code accordingly");
                }
                return api.util.updateQueryData;
            }
        });
        Object.defineProperty(api.util, "patchQueryResult", {
            get: function () {
                if (typeof process !== "undefined" && true) {
                    console.warn("`api.util.patchQueryResult` has been renamed to `api.util.patchQueryData`, please change your code accordingly");
                }
                return api.util.patchQueryData;
            }
        });
        var _h = buildMiddleware({
            reducerPath: reducerPath,
            context: context,
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            api: api,
            assertTagType: assertTagType
        }), middleware = _h.middleware, middlewareActions = _h.actions;
        safeAssign(api.util, middlewareActions);
        safeAssign(api, { reducer: reducer, middleware: middleware });
        var _j = buildSelectors({
            serializeQueryArgs: serializeQueryArgs,
            reducerPath: reducerPath
        }), buildQuerySelector = _j.buildQuerySelector, buildMutationSelector = _j.buildMutationSelector;
        var _k = buildInitiate({
            queryThunk: queryThunk,
            mutationThunk: mutationThunk,
            api: api,
            serializeQueryArgs: serializeQueryArgs
        }), buildInitiateQuery = _k.buildInitiateQuery, buildInitiateMutation = _k.buildInitiateMutation;
        return {
            name: coreModuleName,
            injectEndpoint: function (endpointName, definition) {
                var _a, _b;
                var anyApi = api;
                (_b = (_a = anyApi.endpoints)[endpointName]) != null ? _b : _a[endpointName] = {};
                if (isQueryDefinition(definition)) {
                    safeAssign(anyApi.endpoints[endpointName], {
                        select: buildQuerySelector(endpointName, definition),
                        initiate: buildInitiateQuery(endpointName, definition)
                    }, buildMatchThunkActions(queryThunk, endpointName));
                }
                else if (isMutationDefinition(definition)) {
                    safeAssign(anyApi.endpoints[endpointName], {
                        select: buildMutationSelector(),
                        initiate: buildInitiateMutation(endpointName, definition)
                    }, buildMatchThunkActions(mutationThunk, endpointName));
                }
            }
        };
    }
}); };
// src/query/core/index.ts
var createApi = /* @__PURE__ */ buildCreateApi(coreModule());
//# sourceMappingURL=module.js.map