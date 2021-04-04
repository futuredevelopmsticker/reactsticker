(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Sticker_View_index_tsx"],{

/***/ "./resources/js/Pages/Sticker/View/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Sticker/View/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/general/layout */ "./resources/js/components/general/layout/index.tsx"));

var StickerViewPage = function StickerViewPage(_a) {
  var sticker = _a.sticker;

  var handleSave = function handleSave(event) {
    event.preventDefault();
    inertia_1.Inertia.post('/sticker/make-active', {
      id: sticker.id
    });
  };

  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-6"
  }, sticker.title && react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, sticker.title), react_1["default"].createElement("p", null, "Url: ", sticker.url), react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("p", null, sticker.description), react_1["default"].createElement("img", {
    src: sticker.img_url,
    alt: sticker.title,
    width: "100%"
  }), react_1["default"].createElement("button", {
    className: "btn btn-primary",
    onClick: handleSave
  }, "Save"))))));
};

exports.default = StickerViewPage;

/***/ }),

/***/ "./resources/js/components/general/layout/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/general/layout/index.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var nav_1 = __importDefault(__webpack_require__(/*! ../nav */ "./resources/js/components/general/nav/index.tsx"));

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "mb-3"
  }, " ", react_1["default"].createElement(nav_1["default"], null)), react_1["default"].createElement("div", {
    className: "container"
  }, children));
};

exports.default = Layout;

/***/ }),

/***/ "./resources/js/components/general/nav/index.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/general/nav/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/js/route.min.js"));

var Menu = function Menu() {
  return react_1["default"].createElement("nav", {
    className: "navbar navbar-expand-md navbar-light bg-white shadow-sm"
  }, react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("a", {
    className: "navbar-brand",
    href: "{{ url('/') }}"
  }, "Bookmark"), react_1["default"].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "{{ __('Toggle navigation') }}"
  }, react_1["default"].createElement("span", {
    className: "navbar-toggler-icon"
  })), react_1["default"].createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, react_1["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    className: "nav-link",
    href: ziggy_js_1["default"]("sticker.index").url()
  }, "Stickers")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    className: "nav-link",
    href: ziggy_js_1["default"]("sticker.add").url()
  }, "Sticker add"))), react_1["default"].createElement("ul", {
    className: "navbar-nav mr-auto"
  }), react_1["default"].createElement("ul", {
    className: "navbar-nav ml-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    method: "post",
    href: ziggy_js_1["default"]("logout").url(),
    className: "dropdown-item"
  }, "Logout"))))));
};

exports.default = Menu;

/***/ }),

/***/ "./node_modules/ziggy-js/dist/js/route.min.js":
/*!****************************************************!*\
  !*** ./node_modules/ziggy-js/dist/js/route.min.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],u=Object.keys(a),c=0;c<u.length;++c){var l=u[c],s=a[l];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:a,prop:l}),r.push(s))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var u=n.charCodeAt(a);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122?o+=n.charAt(a):u<128?o+=i[u]:u<2048?o+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?o+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(a+=1,u=65536+((1023&u)<<10|1023&n.charCodeAt(a)),o+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var u=t;return o(t)&&!o(r)&&(u=a(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),u)}}},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r(0),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},function(e,t,r){"use strict";var n=r(3),o=r(4),i=r(1);e.exports={formats:i,parse:o,stringify:n}},function(e,t,r){"use strict";var n=r(0),o=r(1),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},u=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,u(t)?t:[t])},s=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(t,r,o,i,a,c,s,f,y,d,h,m,b){var g,v=t;if("function"==typeof s?v=s(r,v):v instanceof Date?v=d(v):"comma"===o&&u(v)&&(v=n.maybeMap(v,(function(e){return e instanceof Date?d(e):e})).join(",")),null===v){if(i)return c&&!m?c(r,p.encoder,b,"key"):r;v=""}if("string"==typeof(g=v)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(v))return c?[h(m?r:c(r,p.encoder,b,"key"))+"="+h(c(v,p.encoder,b,"value"))]:[h(r)+"="+h(String(v))];var O,w=[];if(void 0===v)return w;if(u(s))O=s;else{var j=Object.keys(v);O=f?j.sort(f):j}for(var P=0;P<O.length;++P){var x=O[P],k=v[x];if(!a||null!==k){var S=u(v)?"function"==typeof o?o(r,x):r:r+(y?"."+x:"["+x+"]");l(w,e(k,S,o,i,a,c,s,f,y,d,h,m,b))}}return w};e.exports=function(e,t){var r,n=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=p.filter;return("function"==typeof e.filter||u(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?n=(0,c.filter)("",n):u(c.filter)&&(r=c.filter);var s,f=[];if("object"!=typeof n||null===n)return"";s=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var d=a[s];r||(r=Object.keys(n)),c.sort&&r.sort(c.sort);for(var h=0;h<r.length;++h){var m=r[h];c.skipNulls&&null===n[m]||l(f,y(n[m],m,d,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var b=f.join(c.delimiter),g=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),b.length>0?g+b:""}},function(e,t,r){"use strict";var n=r(0),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},u=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(i),l=u?i.slice(0,u.index):i,s=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;s.push(l)}for(var f=0;r.depth>0&&null!==(u=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(u[1])}return u&&s.push("["+i.slice(u.index)+"]"),function(e,t,r,n){for(var o=n?t:c(t,r),i=e.length-1;i>=0;--i){var a,u=e[i];if("[]"===u&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,s=parseInt(l,10);r.parseArrays||""!==l?!isNaN(s)&&u!==l&&String(s)===l&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(a=[])[s]=o:a[l]=o:a={0:o}}o=a}return o}(s,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){var r,l={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=s.split(t.delimiter,f),y=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?d="utf-8":"utf8=%26%2310003%3B"===p[r]&&(d="iso-8859-1"),y=r,r=p.length);for(r=0;r<p.length;++r)if(r!==y){var h,m,b=p[r],g=b.indexOf("]="),v=-1===g?b.indexOf("="):g+1;-1===v?(h=t.decoder(b,a.decoder,d,"key"),m=t.strictNullHandling?null:""):(h=t.decoder(b.slice(0,v),a.decoder,d,"key"),m=n.maybeMap(c(b.slice(v+1),t),(function(e){return t.decoder(e,a.decoder,d,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===d&&(m=u(m)),b.indexOf("[]=")>-1&&(m=i(m)?[m]:m),o.call(l,h)?l[h]=n.combine(l[h],m):l[h]=m}return l}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(s),y=0;y<p.length;++y){var d=p[y],h=l(d,s[d],r,"string"==typeof e);f=n.merge(f,h,r)}return n.compact(f)}},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",(function(){return b}));var o=function(){function e(t,r,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.ziggy=n,this.route=this.ziggy.namedRoutes[this.name],void 0===this.name)throw new Error("Ziggy Error: You must provide a route name");if(void 0===this.route)throw new Error("Ziggy Error: route '".concat(this.name,"' is not found in the route list"));this.absolute=void 0===r||r,this.domain=this.setDomain(),this.path=this.route.uri.replace(/^\//,"")}var t,r;return t=e,(r=[{key:"setDomain",value:function(){if(!this.absolute)return"/";if(!this.route.domain)return this.ziggy.baseUrl.replace(/\/?$/,"/");var e=(this.route.domain||this.ziggy.baseDomain).replace(/\/+$/,"");return this.ziggy.basePort&&e.replace(/\/+$/,"")===this.ziggy.baseDomain.replace(/\/+$/,"")&&(e=this.ziggy.baseDomain+":"+this.ziggy.basePort),this.ziggy.baseProtocol+"://"+e+"/"}},{key:"construct",value:function(){return this.domain+this.path}}])&&n(t.prototype,r),e}(),i=r(2);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)})(e)}function p(e,t,r){return(p=y()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(m,e);var t,r,n,f,p=(t=m,r=y(),function(){var e,n=h(t);if(r){var o=h(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return s(this,e)});function m(e,t,r){var n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c(this,m),(n=p.call(this)).name=e,n.absolute=r,n.ziggy=i||Ziggy,n.urlBuilder=n.name?new o(e,r,n.ziggy):null,n.template=n.urlBuilder?n.urlBuilder.construct():"",n.urlParams=n.normalizeParams(t),n.queryParams={},n.hydrated="",n}return n=m,(f=[{key:"normalizeParams",value:function(e){return void 0===e?{}:((e="object"!==u(e)?[e]:e).hasOwnProperty("id")&&-1==this.template.indexOf("{id}")&&(e=[e.id]),this.numericParamIndices=Array.isArray(e),a({},e))}},{key:"with",value:function(e){return this.urlParams=this.normalizeParams(e),this}},{key:"withQuery",value:function(e){return a(this.queryParams,e),this}},{key:"hydrateUrl",value:function(){var e=this;if(this.hydrated)return this.hydrated;var t=this.template.replace(/{([^}]+)}/gi,(function(t,r){var n,o,i=e.trimParam(t);if(e.ziggy.defaultParameters.hasOwnProperty(i)&&(n=e.ziggy.defaultParameters[i]),n&&!e.urlParams[i])return delete e.urlParams[i],n;if(e.numericParamIndices?(e.urlParams=Object.values(e.urlParams),o=e.urlParams.shift()):(o=e.urlParams[i],delete e.urlParams[i]),null==o){if(-1===t.indexOf("?"))throw new Error("Ziggy Error: '"+i+"' key is required for route '"+e.name+"'");return""}return o.id?encodeURIComponent(o.id):encodeURIComponent(o)}));return null!=this.urlBuilder&&""!==this.urlBuilder.path&&(t=t.replace(/\/+$/,"")),this.hydrated=t,this.hydrated}},{key:"matchUrl",value:function(){var e=window.location.hostname+(window.location.port?":"+window.location.port:"")+window.location.pathname,t=this.template.replace(/(\/\{[^\}]*\?\})/g,"/").replace(/(\{[^\}]*\})/gi,"[^/?]+").replace(/\/?$/,"").split("://")[1],r=this.template.replace(/(\{[^\}]*\})/gi,"[^/?]+").split("://")[1],n=e.replace(/\/?$/,"/"),o=new RegExp("^"+r+"/$").test(n),i=new RegExp("^"+t+"/$").test(n);return o||i}},{key:"constructQuery",value:function(){if(0===Object.keys(this.queryParams).length&&0===Object.keys(this.urlParams).length)return"";var e=a(this.urlParams,this.queryParams);return Object(i.stringify)(e,{encodeValuesOnly:!0,skipNulls:!0,addQueryPrefix:!0,arrayFormat:"indices"})}},{key:"current",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=Object.keys(this.ziggy.namedRoutes),n=r.filter((function(t){return-1!==e.ziggy.namedRoutes[t].methods.indexOf("GET")&&new m(t,void 0,void 0,e.ziggy).matchUrl()}))[0];if(t){var o=new RegExp("^"+t.replace(".","\\.").replace("*",".*")+"$","i");return o.test(n)}return n}},{key:"check",value:function(e){return Object.keys(this.ziggy.namedRoutes).includes(e)}},{key:"extractParams",value:function(e,t,r){var n=this,o=e.split(r);return t.split(r).reduce((function(e,t,r){return 0===t.indexOf("{")&&-1!==t.indexOf("}")&&o[r]?a(e,(i={},u=n.trimParam(t),c=o[r],u in i?Object.defineProperty(i,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[u]=c,i)):e;var i,u,c}),{})}},{key:"parse",value:function(){this.return=this.hydrateUrl()+this.constructQuery()}},{key:"url",value:function(){return this.parse(),this.return}},{key:"toString",value:function(){return this.url()}},{key:"trimParam",value:function(e){return e.replace(/{|}|\?/g,"")}},{key:"valueOf",value:function(){return this.url()}},{key:"params",get:function(){var e=this.ziggy.namedRoutes[this.current()];return a(this.extractParams(window.location.hostname,e.domain||"","."),this.extractParams(window.location.pathname.slice(1),e.uri,"/"))}}])&&l(n.prototype,f),m}(f(String));function b(e,t,r,n){return new m(e,t,r,n)}}]).default}));

/***/ })

}]);