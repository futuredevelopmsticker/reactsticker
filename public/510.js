(self.webpackChunk=self.webpackChunk||[]).push([[510],{7510:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(r(7294)),c=r(9680),s=l(r(809));t.default=function(){var e=u.useState({link:" ",title:"title"}),t=e[0],r=e[1];return u.default.createElement(s.default,null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-sm-8"},u.default.createElement("form",{onSubmit:function(e){e.preventDefault(),c.Inertia.post("/sticker/preview",t)}},u.default.createElement("div",{className:"form-group"},u.default.createElement("label",{htmlFor:"link"},"Link"),u.default.createElement("input",{type:"text",className:"form-control",name:"link",onChange:function(e){var a;r(n(n({},t),((a={})[e.currentTarget.name]=e.currentTarget.value,a)))},placeholder:"Enter your link here"}))))))}},809:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(7294)),o=n(r(9642));t.default=function(e){var t=e.children;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"mb-3"}," ",a.default.createElement(o.default,null)),a.default.createElement("div",{className:"container"},t))}},9642:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(1636),o=n(r(7294)),i=n(r(9044));t.default=function(){return o.default.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-white shadow-sm"},o.default.createElement("div",{className:"container"},o.default.createElement("a",{className:"navbar-brand",href:"{{ url('/') }}"},"Bookmark"),o.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"{{ __('Toggle navigation') }}"},o.default.createElement("span",{className:"navbar-toggler-icon"})),o.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.default.createElement("ul",{className:"navbar-nav ml-auto"},o.default.createElement("li",{className:"nav-item"},o.default.createElement(a.InertiaLink,{className:"nav-link",href:i.default("sticker.index").url()},"Stickers"))),o.default.createElement("ul",{className:"navbar-nav mr-auto"}),o.default.createElement("ul",{className:"navbar-nav ml-auto"},o.default.createElement("li",{className:"nav-item"},o.default.createElement("a",{className:"nav-link",href:"#"},"Logout"))))))}},9044:function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],l=Object.keys(i),u=0;u<l.length;++u){var c=l[u],s=i[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:i,prop:c}),r.push(s))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?a+=n.charAt(i):l<128?a+=o[l]:l<2048?a+=o[192|l>>6]+o[128|63&l]:l<55296||l>=57344?a+=o[224|l>>12]+o[128|l>>6&63]+o[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),a+=o[240|l>>18]+o[128|l>>12&63]+o[128|l>>6&63]+o[128|63&l])}return a},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var l=t;return a(t)&&!a(r)&&(l=i(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"==typeof i&&r&&"object"==typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),l)}}},function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g,o=r(0),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)},function(e,t,r){"use strict";var n=r(3),a=r(4),o=r(1);e.exports={formats:o,parse:a,stringify:n}},function(e,t,r){"use strict";var n=r(0),a=r(1),o=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,l(t)?t:[t])},s=Date.prototype.toISOString,f=a.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:a.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,a,o,i,u,s,f,d,y,m,h,v){var b,g=t;if("function"==typeof s?g=s(r,g):g instanceof Date?g=y(g):"comma"===a&&l(g)&&(g=n.maybeMap(g,(function(e){return e instanceof Date?y(e):e})).join(",")),null===g){if(o)return u&&!h?u(r,p.encoder,v,"key"):r;g=""}if("string"==typeof(b=g)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||n.isBuffer(g))return u?[m(h?r:u(r,p.encoder,v,"key"))+"="+m(u(g,p.encoder,v,"value"))]:[m(r)+"="+m(String(g))];var O,w=[];if(void 0===g)return w;if(l(s))O=s;else{var j=Object.keys(g);O=f?j.sort(f):j}for(var P=0;P<O.length;++P){var k=O[P],E=g[k];if(!i||null!==E){var x=l(g)?"function"==typeof a?a(r,k):r:r+(d?"."+k:"["+k+"]");c(w,e(E,x,a,o,i,u,s,f,d,y,m,h,v))}}return w};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],i=p.filter;return("function"==typeof e.filter||l(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):l(u.filter)&&(r=u.filter);var s,f=[];if("object"!=typeof n||null===n)return"";s=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=i[s];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var m=0;m<r.length;++m){var h=r[m];u.skipNulls&&null===n[h]||c(f,d(n[h],h,y,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var v=f.join(u.delimiter),b=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),v.length>0?b+v:""}},function(e,t,r){"use strict";var n=r(0),a=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},u=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,l=r.depth>0&&/(\[[^[\]]*])/.exec(o),c=l?o.slice(0,l.index):o,s=[];if(c){if(!r.plainObjects&&a.call(Object.prototype,c)&&!r.allowPrototypes)return;s.push(c)}for(var f=0;r.depth>0&&null!==(l=i.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(l[1])}return l&&s.push("["+o.slice(l.index)+"]"),function(e,t,r,n){for(var a=n?t:u(t,r),o=e.length-1;o>=0;--o){var i,l=e[o];if("[]"===l&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,s=parseInt(c,10);r.parseArrays||""!==c?!isNaN(s)&&l!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(i=[])[s]=a:i[c]=a:i={0:a}}a=i}return a}(s,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){var r,c={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=s.split(t.delimiter,f),d=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?y="utf-8":"utf8=%26%2310003%3B"===p[r]&&(y="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var m,h,v=p[r],b=v.indexOf("]="),g=-1===b?v.indexOf("="):b+1;-1===g?(m=t.decoder(v,i.decoder,y,"key"),h=t.strictNullHandling?null:""):(m=t.decoder(v.slice(0,g),i.decoder,y,"key"),h=n.maybeMap(u(v.slice(g+1),t),(function(e){return t.decoder(e,i.decoder,y,"value")}))),h&&t.interpretNumericEntities&&"iso-8859-1"===y&&(h=l(h)),v.indexOf("[]=")>-1&&(h=o(h)?[h]:h),a.call(c,m)?c[m]=n.combine(c[m],h):c[m]=h}return c}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(s),d=0;d<p.length;++d){var y=p[d],m=c(y,s[y],r,"string"==typeof e);f=n.merge(f,m,r)}return n.compact(f)}},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",(function(){return v}));var a=function(){function e(t,r,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.ziggy=n,this.route=this.ziggy.namedRoutes[this.name],void 0===this.name)throw new Error("Ziggy Error: You must provide a route name");if(void 0===this.route)throw new Error("Ziggy Error: route '".concat(this.name,"' is not found in the route list"));this.absolute=void 0===r||r,this.domain=this.setDomain(),this.path=this.route.uri.replace(/^\//,"")}var t;return(t=[{key:"setDomain",value:function(){if(!this.absolute)return"/";if(!this.route.domain)return this.ziggy.baseUrl.replace(/\/?$/,"/");var e=(this.route.domain||this.ziggy.baseDomain).replace(/\/+$/,"");return this.ziggy.basePort&&e.replace(/\/+$/,"")===this.ziggy.baseDomain.replace(/\/+$/,"")&&(e=this.ziggy.baseDomain+":"+this.ziggy.basePort),this.ziggy.baseProtocol+"://"+e+"/"}},{key:"construct",value:function(){return this.domain+this.path}}])&&n(e.prototype,t),e}(),o=r(2);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,m(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,e)})(e)}function p(e,t,r){return(p=d()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&y(a,r.prototype),a}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(p,e);var t,r,n,f=(t=p,r=d(),function(){var e,n=m(t);if(r){var a=m(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return s(this,e)});function p(e,t,r){var n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return u(this,p),(n=f.call(this)).name=e,n.absolute=r,n.ziggy=o||Ziggy,n.urlBuilder=n.name?new a(e,r,n.ziggy):null,n.template=n.urlBuilder?n.urlBuilder.construct():"",n.urlParams=n.normalizeParams(t),n.queryParams={},n.hydrated="",n}return(n=[{key:"normalizeParams",value:function(e){return void 0===e?{}:((e="object"!==l(e)?[e]:e).hasOwnProperty("id")&&-1==this.template.indexOf("{id}")&&(e=[e.id]),this.numericParamIndices=Array.isArray(e),i({},e))}},{key:"with",value:function(e){return this.urlParams=this.normalizeParams(e),this}},{key:"withQuery",value:function(e){return i(this.queryParams,e),this}},{key:"hydrateUrl",value:function(){var e=this;if(this.hydrated)return this.hydrated;var t=this.template.replace(/{([^}]+)}/gi,(function(t,r){var n,a,o=e.trimParam(t);if(e.ziggy.defaultParameters.hasOwnProperty(o)&&(n=e.ziggy.defaultParameters[o]),n&&!e.urlParams[o])return delete e.urlParams[o],n;if(e.numericParamIndices?(e.urlParams=Object.values(e.urlParams),a=e.urlParams.shift()):(a=e.urlParams[o],delete e.urlParams[o]),null==a){if(-1===t.indexOf("?"))throw new Error("Ziggy Error: '"+o+"' key is required for route '"+e.name+"'");return""}return a.id?encodeURIComponent(a.id):encodeURIComponent(a)}));return null!=this.urlBuilder&&""!==this.urlBuilder.path&&(t=t.replace(/\/+$/,"")),this.hydrated=t,this.hydrated}},{key:"matchUrl",value:function(){var e=window.location.hostname+(window.location.port?":"+window.location.port:"")+window.location.pathname,t=this.template.replace(/(\/\{[^\}]*\?\})/g,"/").replace(/(\{[^\}]*\})/gi,"[^/?]+").replace(/\/?$/,"").split("://")[1],r=this.template.replace(/(\{[^\}]*\})/gi,"[^/?]+").split("://")[1],n=e.replace(/\/?$/,"/"),a=new RegExp("^"+r+"/$").test(n),o=new RegExp("^"+t+"/$").test(n);return a||o}},{key:"constructQuery",value:function(){if(0===Object.keys(this.queryParams).length&&0===Object.keys(this.urlParams).length)return"";var e=i(this.urlParams,this.queryParams);return Object(o.stringify)(e,{encodeValuesOnly:!0,skipNulls:!0,addQueryPrefix:!0,arrayFormat:"indices"})}},{key:"current",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=Object.keys(this.ziggy.namedRoutes).filter((function(t){return-1!==e.ziggy.namedRoutes[t].methods.indexOf("GET")&&new p(t,void 0,void 0,e.ziggy).matchUrl()}))[0];return t?new RegExp("^"+t.replace(".","\\.").replace("*",".*")+"$","i").test(r):r}},{key:"check",value:function(e){return Object.keys(this.ziggy.namedRoutes).includes(e)}},{key:"extractParams",value:function(e,t,r){var n=this,a=e.split(r);return t.split(r).reduce((function(e,t,r){return 0===t.indexOf("{")&&-1!==t.indexOf("}")&&a[r]?i(e,(o={},l=n.trimParam(t),u=a[r],l in o?Object.defineProperty(o,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[l]=u,o)):e;var o,l,u}),{})}},{key:"parse",value:function(){this.return=this.hydrateUrl()+this.constructQuery()}},{key:"url",value:function(){return this.parse(),this.return}},{key:"toString",value:function(){return this.url()}},{key:"trimParam",value:function(e){return e.replace(/{|}|\?/g,"")}},{key:"valueOf",value:function(){return this.url()}},{key:"params",get:function(){var e=this.ziggy.namedRoutes[this.current()];return i(this.extractParams(window.location.hostname,e.domain||"","."),this.extractParams(window.location.pathname.slice(1),e.uri,"/"))}}])&&c(p.prototype,n),p}(f(String));function v(e,t,r,n){return new h(e,t,r,n)}}]).default}}]);