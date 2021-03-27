/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {

;// CONCATENATED MODULE: ./src/application/actions.ts
var actionSetTheme = function (theme) { return ({ type: "theme", theme: theme }); };

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/config.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/hostReportError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber));
//# sourceMappingURL=rxSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/identity.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

//# sourceMappingURL=SubjectSubscription.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subject.js
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));

var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject));

//# sourceMappingURL=BehaviorSubject.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber));

//# sourceMappingURL=OuterSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber));

//# sourceMappingURL=InnerSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/iterator.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = (/* unused pure expression or super */ null && (iterator_iterator));
//# sourceMappingURL=iterator.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[iterator_iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isPromise.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */



function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            _this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            _this.add(subscribeToResult(_this, observable, undefined, i));
        }
        return _this;
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber));
//# sourceMappingURL=map.js.map

;// CONCATENATED MODULE: ./node_modules/immer/dist/immer.esm.js
function t(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(t){return!!t&&!!t[Q]}function r(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var n=Object.getPrototypeOf(t);return!n||n===Object.prototype}(t)||Array.isArray(t)||!!t[L]||!!t.constructor[L]||s(t)||v(t))}function e(r){return n(r)||t(23,r),r[Q].t}function i(t,n,r){void 0===r&&(r=!1),0===o(t)?(r?Object.keys:Z)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t)})):t.forEach((function(r,e){return n(e,r,t)}))}function o(t){var n=t[Q];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:s(t)?2:v(t)?3:0}function u(t,n){return 2===o(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function a(t,n){return 2===o(t)?t.get(n):t[n]}function f(t,n,r){var e=o(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r}function c(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function s(t){return X&&t instanceof Map}function v(t){return q&&t instanceof Set}function p(t){return t.o||t.t}function l(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=tt(t);delete n[Q];for(var r=Z(n),e=0;e<r.length;e++){var i=r[e],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),n)}function d(t,e){return void 0===e&&(e=!1),y(t)||n(t)||!r(t)?t:(o(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&i(t,(function(t,n){return d(n,!0)}),!0),t)}function h(){t(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b(n){var r=nt[n];return r||t(18,n),r}function m(t,n){nt[t]||(nt[t]=n)}function _(){return true||0,U}function j(t,n){n&&(b("Patches"),t.u=[],t.s=[],t.v=n)}function g(t){w(t),t.p.forEach(S),t.p=null}function w(t){t===U&&(U=t.l)}function O(t){return U={p:[],l:U,h:t,m:!0,_:0}}function S(t){var n=t[Q];0===n.i||1===n.i?n.j():n.g=!0}function P(n,e){e._=e.p.length;var i=e.p[0],o=void 0!==n&&n!==i;return e.h.O||b("ES5").S(e,n,o),o?(i[Q].P&&(g(e),t(4)),r(n)&&(n=M(e,n),e.l||x(e,n)),e.u&&b("Patches").M(i[Q],n,e.u,e.s)):n=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),n!==H?n:void 0}function M(t,n,r){if(y(n))return n;var e=n[Q];if(!e)return i(n,(function(i,o){return A(t,e,n,i,o,r)}),!0),n;if(e.A!==t)return n;if(!e.P)return x(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(n,i){return A(t,e,o,n,i,r)})),x(t,o,!1),r&&t.u&&b("Patches").R(e,r,t.u,t.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,n(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!n(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(t,n,r){void 0===r&&(r=!1),t.h.N&&t.m&&d(n,r)}function z(t,n){var r=t[Q];return(r?p(r):t)[n]}function I(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r)}}function k(t){t.P||(t.P=!0,t.l&&k(t.l))}function E(t){t.o||(t.o=l(t.t))}function R(t,n,r){var e=s(n)?b("MapSet").T(n,r):v(n)?b("MapSet").F(n,r):t.O?function(t,n){var r=Array.isArray(t),e={i:r?1:0,A:n?n.A:_(),P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=e,o=rt;r&&(i=[e],o=et);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(n,r):b("ES5").J(n,r);return(r?r.A:_()).p.push(e),e}function D(e){return n(e)||t(22,e),function t(n){if(!r(n))return n;var e,u=n[Q],c=o(n);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(n,c),u.I=!1}else e=N(n,c);return i(e,(function(n,r){u&&a(u.t,n)===r||f(e,n,t(r))})),3===c?new Set(e):e}(e)}function N(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return l(t)}function T(){function r(t,n){var r=s[t];return r?r.enumerable=n:s[t]=r={configurable:!0,enumerable:n,get:function(){var n=this[Q];return false&&0,rt.get(n,t)},set:function(n){var r=this[Q]; false&&0,rt.set(r,t,n)}},r}function e(t){for(var n=t.length-1;n>=0;n--){var r=t[n][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(t){for(var n=t.t,r=t.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=n[o];if(void 0===a&&!u(n,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!n[Q];return e.length!==Z(n).length+(v?0:1)}function a(t){var n=t.k;if(n.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(n,n.length-1);return!(!r||r.get)}function f(n){n.g&&t(3,JSON.stringify(p(n)))}var s={};m("ES5",{J:function(t,n){var e=Array.isArray(t),i=function(t,n){if(t){for(var e=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tt(n);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,t||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(e,t),o={i:e?5:4,A:n?n.A:_(),P:!1,I:!1,D:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(t,r,o){o?n(r)&&r[Q].A===t&&e(t.p):(t.u&&function t(n){if(n&&"object"==typeof n){var r=n[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(n){n!==Q&&(void 0!==e[n]||u(e,n)?f[n]||t(o[n]):(f[n]=!0,k(r)))})),i(e,(function(t){void 0!==o[t]||u(o,t)||(f[t]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&t(o[l])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?o(t):a(t)}})}function F(){function e(t){if(!r(t))return t;if(Array.isArray(t))return t.map(e);if(s(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],e(t[1])]})));if(v(t))return new Set(Array.from(t).map(e));var n=Object.create(Object.getPrototypeOf(t));for(var i in t)n[i]=e(t[i]);return n}function f(t){return n(t)?e(t):t}var c="add";m("Patches",{$:function(n,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=n,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||t(24),"function"==typeof f&&"prototype"===p&&t(24),"object"!=typeof(f=a(f,p))&&t(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:t(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:t(17,u)}})),n},R:function(t,n,r,e){switch(t.i){case 0:case 4:case 2:return function(t,n,r,e){var o=t.t,s=t.o;i(t.D,(function(t,i){var v=a(o,t),p=a(s,t),l=i?u(o,t)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=n.concat(t);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(t,n,r,e);case 5:case 1:return function(t,n,r,e){var i=t.t,o=t.D,u=t.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=n.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=n.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:n.concat(["length"]),value:i.length})}(t,n,r,e);case 3:return function(t,n,r,e){var i=t.t,o=t.o,u=0;i.forEach((function(t){if(!o.has(t)){var i=n.concat([u]);r.push({op:"remove",path:i,value:t}),e.unshift({op:c,path:i,value:t})}u++})),u=0,o.forEach((function(t){if(!i.has(t)){var o=n.concat([u]);r.push({op:c,path:o,value:t}),e.unshift({op:"remove",path:o,value:t})}u++}))}(t,n,r,e)}},M:function(t,n,r,e){r.push({op:"replace",path:[],value:n}),e.push({op:"replace",path:[],value:t.t})}})}function C(){function n(t,n){function r(){this.constructor=t}a(t,n),t.prototype=(r.prototype=n.prototype,new r)}function e(t){t.o||(t.D=new Map,t.o=new Map(t.t))}function o(t){t.o||(t.o=new Set,t.t.forEach((function(n){if(r(n)){var e=R(t.A.h,n,t);t.p.set(n,e),t.o.add(e)}else t.o.add(n)})))}function u(n){n.g&&t(3,JSON.stringify(p(n)))}var a=function(t,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)},f=function(){function t(t,n){return this[Q]={i:2,l:n,A:n?n.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:t,k:this,C:!1,g:!1},this}n(t,Map);var o=t.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(t){return p(this[Q]).has(t)},o.set=function(t,n){var r=this[Q];return u(r),p(r).has(t)&&p(r).get(t)===n||(e(r),k(r),r.D.set(t,!0),r.o.set(t,n),r.D.set(t,!0)),this},o.delete=function(t){if(!this.has(t))return!1;var n=this[Q];return u(n),e(n),k(n),n.D.set(t,!1),n.o.delete(t),!0},o.clear=function(){var t=this[Q];u(t),p(t).size&&(e(t),k(t),t.D=new Map,i(t.t,(function(n){t.D.set(n,!1)})),t.o.clear())},o.forEach=function(t,n){var r=this;p(this[Q]).forEach((function(e,i){t.call(n,r.get(i),i,r)}))},o.get=function(t){var n=this[Q];u(n);var i=p(n).get(t);if(n.I||!r(i))return i;if(i!==n.t.get(t))return i;var o=R(n.A.h,i,n);return e(n),n.o.set(t,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var t,n=this,r=this.keys();return(t={})[V]=function(){return n.values()},t.next=function(){var t=r.next();return t.done?t:{done:!1,value:n.get(t.value)}},t},o.entries=function(){var t,n=this,r=this.keys();return(t={})[V]=function(){return n.entries()},t.next=function(){var t=r.next();if(t.done)return t;var e=n.get(t.value);return{done:!1,value:[t.value,e]}},t},o[V]=function(){return this.entries()},t}(),c=function(){function t(t,n){return this[Q]={i:3,l:n,A:n?n.A:_(),P:!1,I:!1,o:void 0,t:t,k:this,p:new Map,g:!1,C:!1},this}n(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(t){var n=this[Q];return u(n),n.o?!!n.o.has(t)||!(!n.p.has(t)||!n.o.has(n.p.get(t))):n.t.has(t)},r.add=function(t){var n=this[Q];return u(n),this.has(t)||(o(n),k(n),n.o.add(t)),this},r.delete=function(t){if(!this.has(t))return!1;var n=this[Q];return u(n),o(n),k(n),n.o.delete(t)||!!n.p.has(t)&&n.o.delete(n.p.get(t))},r.clear=function(){var t=this[Q];u(t),p(t).size&&(o(t),k(t),t.o.clear())},r.values=function(){var t=this[Q];return u(t),o(t),t.o.values()},r.entries=function(){var t=this[Q];return u(t),o(t),t.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(t,n){for(var r=this.values(),e=r.next();!e.done;)t.call(n,e.value,e.value,this),e=r.next()},t}();m("MapSet",{T:function(t,n){return new f(t,n)},F:function(t,n){return new c(t,n)}})}function J(){T(),C(),F()}function K(t){return t}function $(t){return t}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(t){var n={};return Z(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r)})),n},nt={},rt={get:function(t,n){if(n===Q)return t;var e=p(t);if(!u(e,n))return function(t,n,r){var e,i=I(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.I||!r(i)?i:i===z(t.t,n)?(E(t),t.o[n]=R(t.A.h,i,t)):i},has:function(t,n){return n in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,n,r){var e=I(p(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=z(p(t),n),o=null==i?void 0:i[Q];if(o&&o.t===r)return t.o[n]=r,t.D[n]=!1,!0;if(c(r,i)&&(void 0!==r||u(t.t,n)))return!0;E(t),k(t)}return t.o[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==z(t.t,n)||n in t.t?(t.D[n]=!1,E(t),k(t)):delete t.D[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=p(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.i||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t(12)}},et={};i(rt,(function(t,n){et[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}})),et.deleteProperty=function(n,r){return false&&0,rt.deleteProperty.call(this,n[0],r)},et.set=function(n,r,e){return false&&0,rt.set.call(this,n[0],r,e,n[0])};var it=function(){function e(t){this.O=B,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var o=e;e=n;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&t(6),void 0!==i&&"function"!=typeof i&&t(7),r(n)){var f=O(this),c=R(this,n,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):w(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j(f,i),P(t,f)}),(function(t){throw g(f),t})):(j(f,i),P(a,f))}if(!n||"object"!=typeof n){if((a=e(n))===H)return;return void 0===a&&(a=n),this.N&&d(a,!0),a}t(21,n)},i.produceWithPatches=function(t,n){var r,e,i=this;return"function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n})),r,e]},i.createDraft=function(e){r(e)||t(8),n(e)&&(e=D(e));var i=O(this),o=R(this,e,void 0);return o[Q].C=!0,w(i),o},i.finishDraft=function(n,r){var e=n&&n[Q]; false&&(0);var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(t){this.N=t},i.setUseProxies=function(n){n&&!B&&t(20),this.O=n},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var o=b("Patches").$;return n(t)?o(t,r):this.produce(t,(function(t){return o(t,r.slice(e+1))}))},e}(),ot=new it,ut=ot.produce,at=ot.produceWithPatches.bind(ot),ft=ot.setAutoFreeze.bind(ot),ct=ot.setUseProxies.bind(ot),st=ot.applyPatches.bind(ot),vt=ot.createDraft.bind(ot),pt=ot.finishDraft.bind(ot);/* harmony default export */ var immer_esm = (ut);
//# sourceMappingURL=immer.esm.js.map

;// CONCATENATED MODULE: ./src/application/data.ts

var data = immer_esm(function (draft, action) {
    switch (action.type) {
        case "theme":
            draft.theme = action.theme;
            break;
    }
});

;// CONCATENATED MODULE: ./src/application/state.ts



var DEFAULT_STATE = {
    theme: "dark",
};
function createState() {
    var actions$ = new Subject();
    var state$ = new BehaviorSubject(DEFAULT_STATE);
    actions$
        .pipe(withLatestFrom(state$), map(function (_a) {
        var a = _a[0], s = _a[1];
        return data(s, a);
    }))
        .subscribe(state$);
    var dispatch = function (action) { return actions$.next(action); };
    return [dispatch, state$];
}

;// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

;// CONCATENATED MODULE: ./src/application/selectors.ts

var createThemeSelector = function (state$) {
    return state$.pipe(map(function (s) { return s.theme; }), distinctUntilChanged());
};

;// CONCATENATED MODULE: ./src/application/view.ts
var setElementTheme = function (elem, theme) {
    elem.className = "theme_" + theme;
};

;// CONCATENATED MODULE: ./src/data/data.json
var data_data_namespaceObject = JSON.parse("[{\"alias\":\"leaders\",\"data\":{\"title\":\"Больше всего коммитов\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👑\",\"users\":[{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"32\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"27\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"22\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"20\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"19\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый большой коммит\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"😮\",\"users\":[{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"4001 строка\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"3845 строк\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"3640 строк\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"3453 строки\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"2852 строки\"}]}},{\"alias\":\"vote\",\"data\":{\"title\":\"Самый 🔎 внимательный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"🔎\",\"selectedUserId\":4,\"users\":[{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"22 голоса\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"19 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"17 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"16 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"10 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"9 голосов\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"8 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"7 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"6 голосов\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"5 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"4 голоса\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый 🔎 внимательный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"🔎\",\"selectedUserId\":11,\"users\":[{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"22 голоса\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"19 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"17 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"16 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"15 голосов\"},{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"14 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"12 голосов\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"9 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"8 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"6 голосов\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"5 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"4 голоса\"}]}},{\"alias\":\"vote\",\"data\":{\"title\":\"Самый 👪 командный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👪\",\"offset\":8,\"users\":[{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"24 голоса\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"21 голос\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"19 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"18 голосов\"},{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"16 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"14 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"13 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"9 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"7 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"6 голосов\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"5 голосов\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый 👪 командный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👪\",\"selectedUserId\":6,\"users\":[{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"24 голоса\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"21 голос\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"19 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"18 голосов\"},{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"16 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"14 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"13 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"9 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"7 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"6 голосов\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"5 голосов\"}]}},{\"alias\":\"chart\",\"data\":{\"title\":\"Коммиты\",\"subtitle\":\"Спринт № 213\",\"values\":[{\"title\":\"203\",\"value\":108},{\"title\":\"204\",\"value\":160},{\"title\":\"205\",\"value\":126},{\"title\":\"206\",\"value\":134},{\"title\":\"207\",\"value\":112},{\"title\":\"208\",\"value\":152},{\"title\":\"209\",\"value\":128},{\"title\":\"210\",\"value\":164},{\"title\":\"211\",\"value\":118},{\"title\":\"212\",\"value\":140},{\"title\":\"213\",\"value\":182,\"active\":true},{\"title\":\"214\",\"value\":0},{\"title\":\"215\",\"value\":0},{\"title\":\"216\",\"value\":0},{\"title\":\"217\",\"value\":0},{\"title\":\"218\",\"value\":0}],\"users\":[{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"32\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"27\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"22\"}]}},{\"alias\":\"chart\",\"data\":{\"title\":\"Строки кода\",\"subtitle\":\"Спринт № 213\",\"values\":[{\"title\":\"203\",\"value\":47798},{\"title\":\"204\",\"value\":68590},{\"title\":\"205\",\"value\":55472},{\"title\":\"206\",\"value\":63073},{\"title\":\"207\",\"value\":51917},{\"title\":\"208\",\"value\":65852},{\"title\":\"209\",\"value\":60693},{\"title\":\"210\",\"value\":70631},{\"title\":\"211\",\"value\":57299},{\"title\":\"212\",\"value\":62839},{\"title\":\"213\",\"value\":74156,\"active\":true},{\"title\":\"214\",\"value\":0},{\"title\":\"215\",\"value\":0},{\"title\":\"216\",\"value\":0},{\"title\":\"217\",\"value\":0},{\"title\":\"218\",\"value\":0}],\"users\":[{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"8739\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"7538\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"6845\"}]}},{\"alias\":\"diagram\",\"data\":{\"title\":\"Размер коммитов\",\"subtitle\":\"Спринт № 213\",\"totalText\":\"182 коммита\",\"differenceText\":\"+42 с прошлого спринта\",\"categories\":[{\"title\":\"> 1001 строки\",\"valueText\":\"30 коммитов\",\"differenceText\":\"+8 коммитов\"},{\"title\":\"501 — 1000 строк\",\"valueText\":\"32 коммита\",\"differenceText\":\"+6 коммитов\"},{\"title\":\"101 — 500 строк\",\"valueText\":\"58 коммитов\",\"differenceText\":\"+16 коммитов\"},{\"title\":\"1 — 100 строк\",\"valueText\":\"62 коммита\",\"differenceText\":\"+12 коммитов\"}]}},{\"alias\":\"activity\",\"data\":{\"title\":\"Коммиты, 1 неделя\",\"subtitle\":\"Спринт № 213\",\"data\":{\"mon\":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],\"tue\":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],\"wed\":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],\"thu\":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],\"fri\":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],\"sat\":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],\"sun\":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{\"alias\":\"activity\",\"data\":{\"title\":\"Коммиты, 2 неделя\",\"subtitle\":\"Спринт № 213\",\"data\":{\"mon\":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],\"tue\":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],\"wed\":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],\"thu\":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],\"fri\":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],\"sat\":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],\"sun\":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]");
;// CONCATENATED MODULE: ./src/index.ts





var _a = createState(), dispatch = _a[0], state$ = _a[1];
var searchParams = new URLSearchParams(window.location.search);
var currentTheme = searchParams.get("theme");
var currentSlide = searchParams.get("slide") || 1;
var _b = data_data_namespaceObject[+currentSlide - 1], alias = _b.alias, src_data = _b.data;
document.body.innerHTML = window.renderTemplate(alias, src_data);
var setTheme = {
    dark: "dark",
    light: "light",
};
if (currentTheme) {
    document.addEventListener("DOMContentLoaded", function () {
        dispatch(actionSetTheme(setTheme["" + currentTheme]));
        createThemeSelector(state$).subscribe(function (theme) {
            setElementTheme(document.body, theme);
        });
    });
}
window.addEventListener("orientationchange", function () {
    if (alias === "activity" || alias === "vote") {
        setTimeout(function () {
            document.body.innerHTML = window.renderTemplate(alias, src_data);
        }, 20);
    }
}, false);

}();
!function() {
// extracted by mini-css-extract-plugin

}();
/******/ })()
;