(()=>{"use strict";(()=>{var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};function e(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function r(t){return"function"==typeof t}var n=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,n=t},get useDeprecatedSynchronousErrorHandling(){return n}};function o(t){setTimeout((function(){throw t}),0)}var a={closed:!0,next:function(t){},error:function(t){if(i.useDeprecatedSynchronousErrorHandling)throw t;o(t)},complete:function(){}},u=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function s(t){return null!==t&&"object"==typeof t}var c=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),l=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this,i=n._parentOrParents,o=n._ctorUnsubscribe,a=n._unsubscribe,l=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,i instanceof t)i.remove(this);else if(null!==i)for(var p=0;p<i.length;++p)i[p].remove(this);if(r(a)){o&&(this._unsubscribe=void 0);try{a.call(this)}catch(t){e=t instanceof c?f(t.errors):[t]}}if(u(l)){p=-1;for(var h=l.length;++p<h;){var v=l[p];if(s(v))try{v.unsubscribe()}catch(t){e=e||[],t instanceof c?e=e.concat(f(t.errors)):e.push(t)}}}if(e)throw new c(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof t){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function f(t){return t.reduce((function(t,e){return t.concat(e instanceof c?e.errors:e)}),[])}var p=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),h=function(t){function r(e,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=a;break;case 1:if(!e){o.destination=a;break}if("object"==typeof e){e instanceof r?(o.syncErrorThrowable=e.syncErrorThrowable,o.destination=e,e.add(o)):(o.syncErrorThrowable=!0,o.destination=new v(o,e));break}default:o.syncErrorThrowable=!0,o.destination=new v(o,e,n,i)}return o}return e(r,t),r.prototype[p]=function(){return this},r.create=function(t,e,n){var i=new r(t,e,n);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(l),v=function(t){function n(e,n,i,o){var u,s=t.call(this)||this;s._parentSubscriber=e;var c=s;return r(n)?u=n:n&&(u=n.next,i=n.error,o=n.complete,n!==a&&(r((c=Object.create(n)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=u,s._error=i,s._complete=o,s}return e(n,t),n.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},n.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=i.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):o(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;o(t)}}},n.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},n.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw t;o(t)}},n.prototype.__tryOrSetError=function(t,e,r){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return i.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(o(e),!0)}return!1},n.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},n}(h),d=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function b(t){return t}function y(t){return 0===t.length?b:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var m=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,o=function(t,e,r){if(t){if(t instanceof h)return t;if(t[p])return t[p]()}return t||e||r?new h(t,e,r):new h(a)}(t,e,r);if(n?o.add(n.call(o,this.source)):o.add(this.source||i.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),i.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){i.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof h?n:null}return!0}(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=g(e))((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[d]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:y(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=g(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function g(t){if(t||(t=i.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var x=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),w=function(t){function r(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return e(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},r}(l),_=function(t){function r(e){var r=t.call(this,e)||this;return r.destination=e,r}return e(r,t),r}(h),j=function(t){function r(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(r,t),r.prototype[p]=function(){return new _(this)},r.prototype.lift=function(t){var e=new T(this,this);return e.operator=t,e},r.prototype.next=function(t){if(this.closed)throw new x;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].next(t)},r.prototype.error=function(t){if(this.closed)throw new x;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new x;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(e){if(this.closed)throw new x;return t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(t){if(this.closed)throw new x;return this.hasError?(t.error(this.thrownError),l.EMPTY):this.isStopped?(t.complete(),l.EMPTY):(this.observers.push(t),new w(this,t))},r.prototype.asObservable=function(){var t=new m;return t.source=this,t},r.create=function(t,e){return new T(t,e)},r}(m),T=function(t){function r(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return e(r,t),r.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},r.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):l.EMPTY},r}(j),S=function(t){function r(e){var r=t.call(this)||this;return r._value=e,r}return e(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),r.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},r.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new x;return this._value},r.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},r}(j),E=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},r.prototype.notifyError=function(t,e){this.destination.error(t)},r.prototype.notifyComplete=function(t){this.destination.complete()},r}(h),P=function(t){function r(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return e(r,t),r.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},r.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},r.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},r}(h);function O(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var A=O();function D(t,e,r,n,i){if(void 0===i&&(i=new P(t,r,n)),!i.closed)return e instanceof m?e.subscribe(i):function(t){if(t&&"function"==typeof t[d])return i=t,function(t){var e=i[d]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}(t))return n=t,function(t){for(var e=0,r=n.length;e<r&&!t.closed;e++)t.next(n[e]);t.complete()};if(function(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}(t))return r=t,function(t){return r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,o),t};if(t&&"function"==typeof t[A])return e=t,function(t){for(var r=e[A]();;){var n=void 0;try{n=r.next()}catch(e){return t.error(e),t}if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof r.return&&t.add((function(){r.return&&r.return()})),t};var e,r,n,i,a=s(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+a+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}(e)(i)}var k=function(){function t(t,e){this.observables=t,this.project=e}return t.prototype.call=function(t,e){return e.subscribe(new M(t,this.observables,this.project))},t}(),M=function(t){function r(e,r,n){var i=t.call(this,e)||this;i.observables=r,i.project=n,i.toRespond=[];var o=r.length;i.values=new Array(o);for(var a=0;a<o;a++)i.toRespond.push(a);for(a=0;a<o;a++){var u=r[a];i.add(D(i,u,void 0,a))}return i}return e(r,t),r.prototype.notifyNext=function(t,e,r){this.values[r]=e;var n=this.toRespond;if(n.length>0){var i=n.indexOf(r);-1!==i&&n.splice(i,1)}},r.prototype.notifyComplete=function(){},r.prototype._next=function(t){if(0===this.toRespond.length){var e=[t].concat(this.values);this.project?this._tryProject(e):this.destination.next(e)}},r.prototype._tryProject=function(t){var e;try{e=this.project.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},r}(E);function U(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new H(t,e))}}var H=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new I(t,this.project,this.thisArg))},t}(),I=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return e(r,t),r.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},r}(h);function R(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function N(t){return!!t&&!!t[_t]}function K(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[wt]||!!t.constructor[wt]||Y(t)||C(t))}function V(t,e,r){void 0===r&&(r=!1),0===z(t)?(r?Object.keys:jt)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function z(t){var e=t[_t];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Y(t)?2:C(t)?3:0}function F(t,e){return 2===z(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function L(t,e,r){var n=z(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function Y(t){return yt&&t instanceof Map}function C(t){return mt&&t instanceof Set}function W(t){return t.o||t.t}function $(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Tt(t);delete e[_t];for(var r=jt(e),n=0;n<r.length;n++){var i=r[n],o=e[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function q(t,e){return void 0===e&&(e=!1),X(t)||N(t)||!K(t)||(z(t)>1&&(t.set=t.add=t.clear=t.delete=J),Object.freeze(t),e&&V(t,(function(t,e){return q(e,!0)}),!0)),t}function J(){R(2)}function X(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function B(t){var e=St[t];return e||R(18,t),e}function G(){return dt}function Q(t,e){e&&(B("Patches"),t.u=[],t.s=[],t.v=e)}function Z(t){tt(t),t.p.forEach(rt),t.p=null}function tt(t){t===dt&&(dt=t.l)}function et(t){return dt={p:[],l:dt,h:t,m:!0,_:0}}function rt(t){var e=t[_t];0===e.i||1===e.i?e.j():e.g=!0}function nt(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.O||B("ES5").S(e,t,n),n?(r[_t].P&&(Z(e),R(4)),K(t)&&(t=it(e,t),e.l||at(e,t)),e.u&&B("Patches").M(r[_t],t,e.u,e.s)):t=it(e,r,[]),Z(e),e.u&&e.v(e.u,e.s),t!==xt?t:void 0}function it(t,e,r){if(X(e))return e;var n=e[_t];if(!n)return V(e,(function(i,o){return ot(t,n,e,i,o,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return at(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=$(n.k):n.o;V(3===n.i?new Set(i):i,(function(e,o){return ot(t,n,i,e,o,r)})),at(t,i,!1),r&&t.u&&B("Patches").R(n,r,t.u,t.s)}return n.o}function ot(t,e,r,n,i,o){if(N(i)){var a=it(t,i,o&&e&&3!==e.i&&!F(e.D,n)?o.concat(n):void 0);if(L(r,n,a),!N(a))return;t.m=!1}if(K(i)&&!X(i)){if(!t.h.N&&t._<1)return;it(t,i),e&&e.A.l||at(t,i)}}function at(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&q(e,r)}function ut(t,e){var r=t[_t];return(r?W(r):t)[e]}function st(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function ct(t){t.P||(t.P=!0,t.l&&ct(t.l))}function lt(t){t.o||(t.o=$(t.t))}function ft(t,e,r){var n=Y(e)?B("MapSet").T(e,r):C(e)?B("MapSet").F(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:G(),P:!1,I:!1,D:{},l:e,t,k:null,o:null,j:null,C:!1},i=n,o=Et;r&&(i=[n],o=Pt);var a=Proxy.revocable(i,o),u=a.revoke,s=a.proxy;return n.k=s,n.j=u,s}(e,r):B("ES5").J(e,r);return(r?r.A:G()).p.push(n),n}function pt(t){return N(t)||R(22,t),function t(e){if(!K(e))return e;var r,n=e[_t],i=z(e);if(n){if(!n.P&&(n.i<4||!B("ES5").K(n)))return n.t;n.I=!0,r=ht(e,i),n.I=!1}else r=ht(e,i);return V(r,(function(e,i){n&&function(t,e){return 2===z(t)?t.get(e):t[e]}(n.t,e)===i||L(r,e,t(i))})),3===i?new Set(r):r}(t)}function ht(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return $(t)}var vt,dt,bt="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),yt="undefined"!=typeof Map,mt="undefined"!=typeof Set,gt="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,xt=bt?Symbol.for("immer-nothing"):((vt={})["immer-nothing"]=!0,vt),wt=bt?Symbol.for("immer-draftable"):"__$immer_draftable",_t=bt?Symbol.for("immer-state"):"__$immer_state",jt=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),Tt=Object.getOwnPropertyDescriptors||function(t){var e={};return jt(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},St={},Et={get:function(t,e){if(e===_t)return t;var r=W(t);if(!F(r,e))return function(t,e,r){var n,i=st(e,r);return i?"value"in i?i.value:null===(n=i.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!K(n)?n:n===ut(t.t,e)?(lt(t),t.o[e]=ft(t.A.h,n,t)):n},has:function(t,e){return e in W(t)},ownKeys:function(t){return Reflect.ownKeys(W(t))},set:function(t,e,r){var n=st(W(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=ut(W(t),e),o=null==i?void 0:i[_t];if(o&&o.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(r,i)&&(void 0!==r||F(t.t,e)))return!0;lt(t),ct(t)}return t.o[e]=r,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==ut(t.t,e)||e in t.t?(t.D[e]=!1,lt(t),ct(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=W(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){R(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){R(12)}},Pt={};V(Et,(function(t,e){Pt[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Pt.deleteProperty=function(t,e){return Et.deleteProperty.call(this,t[0],e)},Pt.set=function(t,e,r){return Et.set.call(this,t[0],e,r,t[0])};var Ot=new(function(){function t(t){this.O=gt,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var n=e;e=t;var i=this;return function(t){var r=this;void 0===t&&(t=n);for(var o=arguments.length,a=Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return i.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(a))}))}}var o;if("function"!=typeof e&&R(6),void 0!==r&&"function"!=typeof r&&R(7),K(t)){var a=et(this),u=ft(this,t,void 0),s=!0;try{o=e(u),s=!1}finally{s?Z(a):tt(a)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(t){return Q(a,r),nt(t,a)}),(function(t){throw Z(a),t})):(Q(a,r),nt(o,a))}if(!t||"object"!=typeof t){if((o=e(t))===xt)return;return void 0===o&&(o=t),this.N&&q(o,!0),o}R(21,t)},e.produceWithPatches=function(t,e){var r,n,i=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return i.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){K(t)||R(8),N(t)&&(t=pt(t));var e=et(this),r=ft(this,t,void 0);return r[_t].C=!0,tt(e),r},e.finishDraft=function(t,e){var r=(t&&t[_t]).A;return Q(r,e),nt(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!gt&&R(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=B("Patches").$;return N(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),At=Ot.produce;Ot.produceWithPatches.bind(Ot),Ot.setAutoFreeze.bind(Ot),Ot.setUseProxies.bind(Ot),Ot.applyPatches.bind(Ot),Ot.createDraft.bind(Ot),Ot.finishDraft.bind(Ot);var Dt=At((function(t,e){switch(e.type){case"theme":t.theme=e.theme}})),kt={theme:"dark"},Mt=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new Ut(t,this.compare,this.keySelector))},t}(),Ut=function(t){function r(e,r,n){var i=t.call(this,e)||this;return i.keySelector=n,i.hasKey=!1,"function"==typeof r&&(i.compare=r),i}return e(r,t),r.prototype.compare=function(t,e){return t===e},r.prototype._next=function(t){var e;try{var r=this.keySelector;e=r?r(t):t}catch(t){return this.destination.error(t)}var n=!1;if(this.hasKey)try{n=(0,this.compare)(this.key,e)}catch(t){return this.destination.error(t)}else this.hasKey=!0;n||(this.key=e,this.destination.next(t))},r}(h),Ht=function(t){"dark"===t?document.querySelector(".slide__arrow_prev").classList.add("slide__arrow_active"):document.querySelector(".slide__arrow_next").classList.add("slide__arrow_active")};const It=JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]');var Rt=function(){var t=new j,e=new S(kt);return t.pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){var r;"function"==typeof t[t.length-1]&&(r=t.pop());var n=t;return e.lift(new k(n,r))}}(e),U((function(t){var e=t[0],r=t[1];return Dt(r,e)}))).subscribe(e),[function(e){return t.next(e)},e]}(),Nt=Rt[0],Kt=Rt[1],Vt=new URLSearchParams(window.location.search),zt=Vt.get("theme"),Ft=It[+(Vt.get("slide")||1)-1],Lt=Ft.alias,Yt=Ft.data;document.body.innerHTML=window.renderTemplate(Lt,Yt);var Ct={dark:"dark",light:"light"};zt&&document.addEventListener("DOMContentLoaded",(function(){Nt({type:"theme",theme:Ct[""+zt]}),function(t){return t.pipe(U((function(t){return t.theme})),(function(t){return t.lift(new Mt(void 0,void 0))}))}(Kt).subscribe((function(t){!function(t,e){t.className="theme_"+e}(document.body,t),"vote"===Lt&&Ht(t)}))})),"activity"!==Lt&&"vote"!==Lt||window.addEventListener("orientationchange",(function(){setTimeout((function(){document.body.innerHTML=window.renderTemplate(Lt,Yt),"vote"===Lt&&Ht(Ct[""+zt])}),20)}),!1)})()})();