!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,i,l){try{var a=t[i](l),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var l=t.apply(e,n);function a(t){r(l,o,i,a,c,"next",t)}function c(t){r(l,o,i,a,c,"throw",t)}a(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),l=new A(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var a=x(l,r);if(a){if(a===g)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,l),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(G([])));S&&S!==r&&n.call(S,i)&&(b=S);var k=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,l,a){var c=s(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,l,a)}),(function(t){r("throw",t,l,a)})):e.resolve(f).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,l=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return l.next=l}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(L.prototype),c(L.prototype,l,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var l=new L(u(e,r,n,o),i);return t.isGeneratorFunction(r)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},_(k),c(k,a,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],a=l.completion;if("root"===l.tryLoc)return o("end");if(l.tryLoc<=this.prev){var c=n.call(l,"catchLoc"),u=n.call(l,"finallyLoc");if(c&&u){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=t,l.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i="https://api.themoviedb.org/3",l="cf961b1b89f4c4a28558be2b04fdd59a";function a(t){return c.apply(this,arguments)}function c(){return(c=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(l,"&page=").concat(r)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.results})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/genre/movie/list?api_key=").concat(l)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.genres})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/movie/").concat(r,"?api_key=").concat(l)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(l,"&language=en-US&query=").concat(r,"&page=",1,"&include_adult=folse")).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.results})).catch((function(t){console.error("error:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var g={BASE_IMG_URL:"https://image.tmdb.org/t/p/w500",popularMovieList:document.querySelector(".home-film-list")};function v(t,e){if(0!==t.length)return t.map((function(t){var r=t.id,n=t.title,o=t.poster_path,i=t.release_date,l=t.genre_ids,a=i.slice(0,4),c=[],u=!0,s=!1,f=void 0;try{for(var d,p=function(t,r){var n=r.value,o=e.find((function(t){return t.id===n}));c.push(o.name)},h=l[Symbol.iterator]();!(u=(d=h.next()).done);u=!0)p(0,d)}catch(t){s=!0,f=t}finally{try{u||null==h.return||h.return()}finally{if(s)throw f}}c.length>=3&&(c=[c[0],c[1],"Other"]);var v=c.join(", ");return null!==o?'\n                <li class="film-list__item item" data-id="'.concat(r,'  data-target="card">\n                    <img class="film-link__img" src="').concat(g.BASE_IMG_URL).concat(o,'" alt="').concat(n,'" data-target="card"">\n                    <div class="wrapper">\n                        <h3 class="film-link__title data-target="card"" >').concat(n,'</h3>\n                        <div class="film-link__grup">\n                            <p class="film-genres" data-target="card">').concat(v,'</p>\n                            <p class="film-year" data-target="card"><span class="film-line">|</span>').concat(a,"</p>\n                        </div>\n                    </div>\n                </li>"):'\n                <li class="film-list__item item" data-id="'.concat(r,'  data-target="card">\n                <img class="film-link__img" src="" alt="').concat(n,'" data-target="card"">\n                    <div class="wrapper">\n                        <h3 class="film-link__title data-target="card"" >').concat(n,'</h3>\n                        <div class="film-link__grup">\n                            <p class="film-genres" data-target="card">').concat(v,'</p>\n                            <p class="film-year" data-target="card"><span class="film-line">|</span>').concat(a,"</p>\n                        </div>\n                    </div>\n                </li>")})).join("")}u().then((function(t){a(1).then((function(e){var r=v(e,t);g.popularMovieList.insertAdjacentHTML("beforeend",r)}))}));var m,y={};m=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(t){return Array.isArray(t)?t:[t]},o=function(t){return t instanceof Node},i=function(t,e){if(t&&e){t=function(t){return t instanceof NodeList}(t)?t:[t];for(var r=0;r<t.length&&!0!==e(t[r],r,t.length);r++);}},l=function(t){return console.error("[scroll-lock] ".concat(t))},a=function(t){if(Array.isArray(t))return t.join(", ")},c=function(t){var e=[];return i(t,(function(t){return e.push(t)})),e},u=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if(r&&-1!==c(n.querySelectorAll(e)).indexOf(t))return t;for(;(t=t.parentElement)&&-1===c(n.querySelectorAll(e)).indexOf(t););return t},s=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n=-1!==c(r.querySelectorAll(e)).indexOf(t);return n},f=function(t){if(t)return"hidden"===getComputedStyle(t).overflow},d=function(t){if(t)return!!f(t)||t.scrollTop<=0},p=function(t){if(t){if(f(t))return!0;var e=t.scrollTop,r=t.scrollHeight;return e+t.offsetHeight>=r}},h=function(t){if(t)return!!f(t)||t.scrollLeft<=0},g=function(t){if(t){if(f(t))return!0;var e=t.scrollLeft,r=t.scrollWidth;return e+t.offsetWidth>=r}},v=function(t){return s(t,'textarea, [contenteditable="true"]')},m=function(t){return s(t,'input[type="range"]')};function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"disablePageScroll",(function(){return S})),r.d(e,"enablePageScroll",(function(){return k})),r.d(e,"getScrollState",(function(){return _})),r.d(e,"clearQueueScrollLocks",(function(){return L})),r.d(e,"getTargetScrollBarWidth",(function(){return x})),r.d(e,"getCurrentTargetScrollBarWidth",(function(){return E})),r.d(e,"getPageScrollBarWidth",(function(){return T})),r.d(e,"getCurrentPageScrollBarWidth",(function(){return A})),r.d(e,"addScrollableTarget",(function(){return G})),r.d(e,"removeScrollableTarget",(function(){return O})),r.d(e,"addScrollableSelector",(function(){return j})),r.d(e,"removeScrollableSelector",(function(){return F})),r.d(e,"addLockableTarget",(function(){return P})),r.d(e,"addLockableSelector",(function(){return W})),r.d(e,"setFillGapMethod",(function(){return M})),r.d(e,"addFillGapTarget",(function(){return Y})),r.d(e,"removeFillGapTarget",(function(){return N})),r.d(e,"addFillGapSelector",(function(){return q})),r.d(e,"removeFillGapSelector",(function(){return R})),r.d(e,"refillGaps",(function(){return B}));var b=["padding","margin","width","max-width","none"],w={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:b[0],startTouchY:0,startTouchX:0},S=function(t){w.queue<=0&&(w.scroll=!1,K(),Q()),G(t),w.queue++},k=function(t){w.queue>0&&w.queue--,w.queue<=0&&(w.scroll=!0,U(),X()),O(t)},_=function(){return w.scroll},L=function(){w.queue=0},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(t)){var r=t.style.overflowY;e?_()||(t.style.overflowY=t.getAttribute("data-scroll-lock-saved-overflow-y-property")):t.style.overflowY="scroll";var n=E(t);return t.style.overflowY=r,n}return 0},E=function(t){if(o(t)){if(t===document.body){var e=document.documentElement.clientWidth;return window.innerWidth-e}var r=t.style.borderLeftWidth,n=t.style.borderRightWidth;t.style.borderLeftWidth="0px",t.style.borderRightWidth="0px";var i=t.offsetWidth-t.clientWidth;return t.style.borderLeftWidth=r,t.style.borderRightWidth=n,i}return 0},T=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return x(document.body,t)},A=function(){return E(document.body)},G=function(t){t&&n(t).map((function(t){i(t,(function(t){o(t)?t.setAttribute("data-scroll-lock-scrollable",""):l('"'.concat(t,'" is not a Element.'))}))}))},O=function(t){t&&n(t).map((function(t){i(t,(function(t){o(t)?t.removeAttribute("data-scroll-lock-scrollable"):l('"'.concat(t,'" is not a Element.'))}))}))},j=function(t){t&&n(t).map((function(t){w.scrollableSelectors.push(t)}))},F=function(t){t&&n(t).map((function(t){w.scrollableSelectors=w.scrollableSelectors.filter((function(e){return e!==t}))}))},P=function(t){t&&(n(t).map((function(t){i(t,(function(t){o(t)?t.setAttribute("data-scroll-lock-lockable",""):l('"'.concat(t,'" is not a Element.'))}))})),_()||K())},W=function(t){t&&(n(t).map((function(t){w.lockableSelectors.push(t)})),_()||K(),q(t))},M=function(t){if(t)if(-1!==b.indexOf(t))w.fillGapMethod=t,B();else{var e=b.join(", ");l('"'.concat(t,'" method is not available!\nAvailable fill gap methods: ').concat(e,"."))}},Y=function(t){t&&n(t).map((function(t){i(t,(function(t){o(t)?(t.setAttribute("data-scroll-lock-fill-gap",""),w.scroll||V(t)):l('"'.concat(t,'" is not a Element.'))}))}))},N=function(t){t&&n(t).map((function(t){i(t,(function(t){o(t)?(t.removeAttribute("data-scroll-lock-fill-gap"),w.scroll||Z(t)):l('"'.concat(t,'" is not a Element.'))}))}))},q=function(t){t&&n(t).map((function(t){-1===w.fillGapSelectors.indexOf(t)&&(w.fillGapSelectors.push(t),w.scroll||D(t))}))},R=function(t){t&&n(t).map((function(t){w.fillGapSelectors=w.fillGapSelectors.filter((function(e){return e!==t})),w.scroll||J(t)}))},B=function(){w.scroll||Q()},K=function(){var t=a(w.lockableSelectors);z(t)},U=function(){var t=a(w.lockableSelectors);C(t)},z=function(t){var e=document.querySelectorAll(t);i(e,(function(t){H(t)}))},C=function(t){var e=document.querySelectorAll(t);i(e,(function(t){I(t)}))},H=function(t){if(o(t)&&"true"!==t.getAttribute("data-scroll-lock-locked")){var e=window.getComputedStyle(t);t.setAttribute("data-scroll-lock-saved-overflow-y-property",e.overflowY),t.setAttribute("data-scroll-lock-saved-inline-overflow-property",t.style.overflow),t.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",t.style.overflowY),t.style.overflow="hidden",t.setAttribute("data-scroll-lock-locked","true")}},I=function(t){o(t)&&"true"===t.getAttribute("data-scroll-lock-locked")&&(t.style.overflow=t.getAttribute("data-scroll-lock-saved-inline-overflow-property"),t.style.overflowY=t.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),t.removeAttribute("data-scroll-lock-saved-overflow-property"),t.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),t.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),t.removeAttribute("data-scroll-lock-locked"))},Q=function(){w.fillGapSelectors.map((function(t){D(t)}))},X=function(){w.fillGapSelectors.map((function(t){J(t)}))},D=function(t){var e=document.querySelectorAll(t),r=-1!==w.lockableSelectors.indexOf(t);i(e,(function(t){V(t,r)}))},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(t)){var r;if(""===t.getAttribute("data-scroll-lock-lockable")||e)r=x(t,!0);else{var n=u(t,a(w.lockableSelectors));r=x(n,!0)}"true"===t.getAttribute("data-scroll-lock-filled-gap")&&Z(t);var i=window.getComputedStyle(t);if(t.setAttribute("data-scroll-lock-filled-gap","true"),t.setAttribute("data-scroll-lock-current-fill-gap-method",w.fillGapMethod),"margin"===w.fillGapMethod){var l=parseFloat(i.marginRight);t.style.marginRight="".concat(l+r,"px")}else if("width"===w.fillGapMethod)t.style.width="calc(100% - ".concat(r,"px)");else if("max-width"===w.fillGapMethod)t.style.maxWidth="calc(100% - ".concat(r,"px)");else if("padding"===w.fillGapMethod){var c=parseFloat(i.paddingRight);t.style.paddingRight="".concat(c+r,"px")}}},J=function(t){var e=document.querySelectorAll(t);i(e,(function(t){Z(t)}))},Z=function(t){if(o(t)&&"true"===t.getAttribute("data-scroll-lock-filled-gap")){var e=t.getAttribute("data-scroll-lock-current-fill-gap-method");t.removeAttribute("data-scroll-lock-filled-gap"),t.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===e?t.style.marginRight="":"width"===e?t.style.width="":"max-width"===e?t.style.maxWidth="":"padding"===e&&(t.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(t){B()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(t){w.scroll||(w.startTouchY=t.touches[0].clientY,w.startTouchX=t.touches[0].clientX)})),document.addEventListener("touchmove",(function(t){if(!w.scroll){var e=w.startTouchY,r=w.startTouchX,n=t.touches[0].clientY,o=t.touches[0].clientX;if(t.touches.length<2){var i=a(w.scrollableSelectors),l={up:e<n,down:e>n,left:r<o,right:r>o},c={up:e+3<n,down:e-3>n,left:r+3<o,right:r-3>o};!function e(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var o=u(r,i,!1);if(m(r))return!1;if(n||v(r)&&u(r,i)||s(r,i)){var a=!1;h(r)&&g(r)?(l.up&&d(r)||l.down&&p(r))&&(a=!0):d(r)&&p(r)?(l.left&&h(r)||l.right&&g(r))&&(a=!0):(c.up&&d(r)||c.down&&p(r)||c.left&&h(r)||c.right&&g(r))&&(a=!0),a&&(o?e(o,!0):t.cancelable&&t.preventDefault())}else e(o)}else t.cancelable&&t.preventDefault()}(t.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(t){w.scroll||(w.startTouchY=0,w.startTouchX=0)})));var $={hide:function(t){l('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),S(t)},show:function(t){l('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),k(t)},toggle:function(t){l('"toggle" is deprecated! Do not use it.'),_()?S():k(t)},getState:function(){return l('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),_()},getWidth:function(){return l('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),T()},getCurrentWidth:function(){return l('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),A()},setScrollableTargets:function(t){l('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),G(t)},setFillGapSelectors:function(t){l('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),q(t)},setFillGapTargets:function(t){l('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),Y(t)},clearQueue:function(){l('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),L()}},tt=function(t){for(var e=arguments,r=function(r){var n=null!=e[r]?e[r]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){y(t,e,n[e])}))},n=1;n<arguments.length;n++)r(n);return t}({disablePageScroll:S,enablePageScroll:k,getScrollState:_,clearQueueScrollLocks:L,getTargetScrollBarWidth:x,getCurrentTargetScrollBarWidth:E,getPageScrollBarWidth:T,getCurrentPageScrollBarWidth:A,addScrollableSelector:j,removeScrollableSelector:F,addScrollableTarget:G,removeScrollableTarget:O,addLockableSelector:W,addLockableTarget:P,addFillGapSelector:q,removeFillGapSelector:R,addFillGapTarget:Y,removeFillGapTarget:N,setFillGapMethod:M,refillGaps:B,_state:w},$);e.default=tt}]).default},y=m();var b=document.querySelector(".home-film-list"),w=document.querySelector(".wrapper-modal"),S=document.querySelector(".backdrop"),k=document.querySelector(".close-btn");function _(t){t.id;var e=t.genres,r=t.original_title,n=t.overview,o=t.popularity,i=t.poster_path,l=t.title,a=t.vote_average,c=t.vote_count,u=String(a).slice(0,3),s=o.toFixed(1),f=e.map((function(t){return t.name})),d='\n        <div class="film-modal__poster">\n            <img class=\'film-modal__img\' width="375" height="478" src="'.concat(g.BASE_IMG_URL).concat(i,'"\n                alt="').concat(l,'" />\n        </div>\n        \n        <div class="film-modal__details-info details-info">\n            \x3c!-- Title --\x3e\n            <h2 class="details-info__title">').concat(l,'</h2>\n        \n            <ul class="details-info__list-static list-static list">\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Vote / Votes</p>\n                    <p class="item-vote-rez">\n                        <span class="tem-vote-rez--accent-mode">').concat(u,"</span>\n                        ").concat(c,'\n                    </p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Popularity</p>\n                    <p class=\'rez\'>').concat(s,'</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Original Title</p>\n                    <p class="rez">').concat(r,'</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Genre</p>\n                    <p class=\'rez\'>').concat(f,' </p>\n                </li>\n            </ul>\n        \n            <div class="details-info__group">\n                <p class="rez rez-title">about</p>\n                <p class="rez rez-desc">').concat(n,"</p>\n            </div>\n        </div>");w.insertAdjacentHTML("afterBegin",d),S.classList.remove("is-hidden"),k.addEventListener("click",L)}function L(t){if("card"===t.target.dataset.target){(0,y.disablePageScroll)();var e=t.target.closest("li").dataset.id;document.removeEventListener("click",L),f(e).then(_),S.addEventListener("click",x)}}function L(){w.innerHTML="",S.classList.add("is-hidden"),(0,y.enablePageScroll)(),document.addEventListener("click",L)}function x(t){t.target.classList.contains("backdrop")&&(L(),S.removeEventListener("click",x))}var E=function(t){"Escape"===t.code&&(L(),window.removeEventListener("keydown",E))};function T(){return(T=t(e)(t(n).mark((function e(r){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),o=r.target.elements.searchQuery.value.trim(),t.next=4,u().then((function(t){p(o).then((function(e){var r=v(e,t);g.popularMovieList.innerHTML="",g.popularMovieList.insertAdjacentHTML("beforeend",r)}))}));case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}b.addEventListener("click",L),window.addEventListener("keydown",E),document.querySelector(".form-search").addEventListener("submit",(function(t){return T.apply(this,arguments)}))}();
//# sourceMappingURL=index.2128c03f.js.map