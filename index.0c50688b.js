!function(){function t(t){return t&&t.__esModule?t.default:t}var e={BASE_IMG_URL:"https://image.tmdb.org/t/p/w500",popularMovieList:document.querySelector(".home-film-list"),bodyModal:document.querySelector(".wrapper-modal"),backDrop:document.querySelector(".backdrop"),closeBtn:document.querySelector(".close-btn")},r={};function n(t,e,r,n,o,l,i){try{var a=t[l](i),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,l){var i=t.apply(e,r);function a(t){n(i,o,l,a,c,"next",t)}function c(t){n(i,o,l,a,c,"throw",t)}a(void 0)}))}};var o={},l=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,l=Object.create(o.prototype),i=new A(n||[]);return l._invoke=function(t,e,r){var n=f;return function(o,l){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw l;return O()}for(r.method=o,r.arg=l;;){var i=r.delegate;if(i){var a=x(i,r);if(a){if(a===g)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,i),l}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,l,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(G([])));S&&S!==r&&n.call(S,l)&&(b=S);var k=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,l,i,a){var c=s(t[o],t,l);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function l(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(l,l):l()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var l=o.arg;return l?l.done?(r[t.resultName]=l.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,l){void 0===l&&(l=Promise);var i=new L(u(e,r,n,o),l);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(k),c(k,a,"Generator"),c(k,l,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var l=this.tryEntries.length-1;l>=0;--l){var i=this.tryEntries[l],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var l=o;break}}l&&("break"===t||"continue"===t)&&l.tryLoc<=e&&e<=l.finallyLoc&&(l=null);var i=l?l.completion:{};return i.type=t,i.arg=e,l?(this.method="next",this.next=l.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(o);try{regeneratorRuntime=l}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}var i="https://api.themoviedb.org/3",a="cf961b1b89f4c4a28558be2b04fdd59a";function c(){return u.apply(this,arguments)}function u(){return(u=t(r)(t(o).mark((function e(){return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/trending/movie/day?api_key=").concat(a,"&page=").concat(1)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.results})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=t(r)(t(o).mark((function e(){return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/genre/movie/list?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.genres})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=t(r)(t(o).mark((function e(r){return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/movie/").concat(r,"?api_key=").concat(a)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}(function(){return s.apply(this,arguments)})().then((function(t){c().then((function(r){var n=function(t,r){if(0!==t.length)return t.map((function(t){var n=t.id,o=t.title,l=t.poster_path,i=t.release_date,a=t.genre_ids,c=i.slice(0,4),u=[],s=!0,f=!1,d=void 0;try{for(var p,h=function(t,e){var n=e.value,o=r.find((function(t){return t.id===n}));u.push(o.name)},g=a[Symbol.iterator]();!(s=(p=g.next()).done);s=!0)h(0,p)}catch(t){f=!0,d=t}finally{try{s||null==g.return||g.return()}finally{if(f)throw d}}u.length>=3&&(u=[u[0],u[1],"Other"]);var v=u.join(", ");return null!==l?'\n                <li class="film-list__item item" data-id="'.concat(n,'  data-target="card">\n                    <img class="film-link__img" src="').concat(e.BASE_IMG_URL).concat(l,'" alt="').concat(o,'" data-target="card"">\n                    <div class="wrapper">\n                        <h3 class="film-link__title data-target="card"" >').concat(o,'</h3>\n                        <div class="film-link__grup">\n                            <p class="film-genres" data-target="card">').concat(v,'</p>\n                            <p class="film-year" data-target="card"><span class="film-line">|</span>').concat(c,"</p>\n                        </div>\n                    </div>\n                </li>"):'\n                <li class="film-list__item item" data-id="'.concat(n,'  data-target="card">\n                    <img class="film-link__img" src="./images/plug/plugImg.png" alt="').concat(o,'" data-target="card"">\n                    <div class="wrapper">\n                        <h3 class="film-link__title data-target="card"" >').concat(o,'</h3>\n                        <div class="film-link__grup">\n                            <p class="film-genres" data-target="card">').concat(v,'</p>\n                            <p class="film-year" data-target="card"><span class="film-line">|</span>').concat(c,"</p>\n                        </div>\n                    </div>\n                </li>")})).join("")}(r,t);e.popularMovieList.insertAdjacentHTML("beforeend",n)}))}));var p,h={};p=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(t){return Array.isArray(t)?t:[t]},o=function(t){return t instanceof Node},l=function(t,e){if(t&&e){t=function(t){return t instanceof NodeList}(t)?t:[t];for(var r=0;r<t.length&&!0!==e(t[r],r,t.length);r++);}},i=function(t){return console.error("[scroll-lock] ".concat(t))},a=function(t){if(Array.isArray(t))return t.join(", ")},c=function(t){var e=[];return l(t,(function(t){return e.push(t)})),e},u=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if(r&&-1!==c(n.querySelectorAll(e)).indexOf(t))return t;for(;(t=t.parentElement)&&-1===c(n.querySelectorAll(e)).indexOf(t););return t},s=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n=-1!==c(r.querySelectorAll(e)).indexOf(t);return n},f=function(t){if(t)return"hidden"===getComputedStyle(t).overflow},d=function(t){if(t)return!!f(t)||t.scrollTop<=0},p=function(t){if(t){if(f(t))return!0;var e=t.scrollTop,r=t.scrollHeight;return e+t.offsetHeight>=r}},h=function(t){if(t)return!!f(t)||t.scrollLeft<=0},g=function(t){if(t){if(f(t))return!0;var e=t.scrollLeft,r=t.scrollWidth;return e+t.offsetWidth>=r}},v=function(t){return s(t,'textarea, [contenteditable="true"]')},m=function(t){return s(t,'input[type="range"]')};function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"disablePageScroll",(function(){return S})),r.d(e,"enablePageScroll",(function(){return k})),r.d(e,"getScrollState",(function(){return _})),r.d(e,"clearQueueScrollLocks",(function(){return L})),r.d(e,"getTargetScrollBarWidth",(function(){return x})),r.d(e,"getCurrentTargetScrollBarWidth",(function(){return E})),r.d(e,"getPageScrollBarWidth",(function(){return T})),r.d(e,"getCurrentPageScrollBarWidth",(function(){return A})),r.d(e,"addScrollableTarget",(function(){return G})),r.d(e,"removeScrollableTarget",(function(){return O})),r.d(e,"addScrollableSelector",(function(){return j})),r.d(e,"removeScrollableSelector",(function(){return F})),r.d(e,"addLockableTarget",(function(){return P})),r.d(e,"addLockableSelector",(function(){return W})),r.d(e,"setFillGapMethod",(function(){return M})),r.d(e,"addFillGapTarget",(function(){return Y})),r.d(e,"removeFillGapTarget",(function(){return q})),r.d(e,"addFillGapSelector",(function(){return N})),r.d(e,"removeFillGapSelector",(function(){return B})),r.d(e,"refillGaps",(function(){return R}));var b=["padding","margin","width","max-width","none"],w={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:b[0],startTouchY:0,startTouchX:0},S=function(t){w.queue<=0&&(w.scroll=!1,K(),D()),G(t),w.queue++},k=function(t){w.queue>0&&w.queue--,w.queue<=0&&(w.scroll=!0,U(),H()),O(t)},_=function(){return w.scroll},L=function(){w.queue=0},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(t)){var r=t.style.overflowY;e?_()||(t.style.overflowY=t.getAttribute("data-scroll-lock-saved-overflow-y-property")):t.style.overflowY="scroll";var n=E(t);return t.style.overflowY=r,n}return 0},E=function(t){if(o(t)){if(t===document.body){var e=document.documentElement.clientWidth;return window.innerWidth-e}var r=t.style.borderLeftWidth,n=t.style.borderRightWidth;t.style.borderLeftWidth="0px",t.style.borderRightWidth="0px";var l=t.offsetWidth-t.clientWidth;return t.style.borderLeftWidth=r,t.style.borderRightWidth=n,l}return 0},T=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return x(document.body,t)},A=function(){return E(document.body)},G=function(t){t&&n(t).map((function(t){l(t,(function(t){o(t)?t.setAttribute("data-scroll-lock-scrollable",""):i('"'.concat(t,'" is not a Element.'))}))}))},O=function(t){t&&n(t).map((function(t){l(t,(function(t){o(t)?t.removeAttribute("data-scroll-lock-scrollable"):i('"'.concat(t,'" is not a Element.'))}))}))},j=function(t){t&&n(t).map((function(t){w.scrollableSelectors.push(t)}))},F=function(t){t&&n(t).map((function(t){w.scrollableSelectors=w.scrollableSelectors.filter((function(e){return e!==t}))}))},P=function(t){t&&(n(t).map((function(t){l(t,(function(t){o(t)?t.setAttribute("data-scroll-lock-lockable",""):i('"'.concat(t,'" is not a Element.'))}))})),_()||K())},W=function(t){t&&(n(t).map((function(t){w.lockableSelectors.push(t)})),_()||K(),N(t))},M=function(t){if(t)if(-1!==b.indexOf(t))w.fillGapMethod=t,R();else{var e=b.join(", ");i('"'.concat(t,'" method is not available!\nAvailable fill gap methods: ').concat(e,"."))}},Y=function(t){t&&n(t).map((function(t){l(t,(function(t){o(t)?(t.setAttribute("data-scroll-lock-fill-gap",""),w.scroll||V(t)):i('"'.concat(t,'" is not a Element.'))}))}))},q=function(t){t&&n(t).map((function(t){l(t,(function(t){o(t)?(t.removeAttribute("data-scroll-lock-fill-gap"),w.scroll||Z(t)):i('"'.concat(t,'" is not a Element.'))}))}))},N=function(t){t&&n(t).map((function(t){-1===w.fillGapSelectors.indexOf(t)&&(w.fillGapSelectors.push(t),w.scroll||Q(t))}))},B=function(t){t&&n(t).map((function(t){w.fillGapSelectors=w.fillGapSelectors.filter((function(e){return e!==t})),w.scroll||J(t)}))},R=function(){w.scroll||D()},K=function(){var t=a(w.lockableSelectors);z(t)},U=function(){var t=a(w.lockableSelectors);C(t)},z=function(t){var e=document.querySelectorAll(t);l(e,(function(t){I(t)}))},C=function(t){var e=document.querySelectorAll(t);l(e,(function(t){X(t)}))},I=function(t){if(o(t)&&"true"!==t.getAttribute("data-scroll-lock-locked")){var e=window.getComputedStyle(t);t.setAttribute("data-scroll-lock-saved-overflow-y-property",e.overflowY),t.setAttribute("data-scroll-lock-saved-inline-overflow-property",t.style.overflow),t.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",t.style.overflowY),t.style.overflow="hidden",t.setAttribute("data-scroll-lock-locked","true")}},X=function(t){o(t)&&"true"===t.getAttribute("data-scroll-lock-locked")&&(t.style.overflow=t.getAttribute("data-scroll-lock-saved-inline-overflow-property"),t.style.overflowY=t.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),t.removeAttribute("data-scroll-lock-saved-overflow-property"),t.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),t.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),t.removeAttribute("data-scroll-lock-locked"))},D=function(){w.fillGapSelectors.map((function(t){Q(t)}))},H=function(){w.fillGapSelectors.map((function(t){J(t)}))},Q=function(t){var e=document.querySelectorAll(t),r=-1!==w.lockableSelectors.indexOf(t);l(e,(function(t){V(t,r)}))},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(t)){var r;if(""===t.getAttribute("data-scroll-lock-lockable")||e)r=x(t,!0);else{var n=u(t,a(w.lockableSelectors));r=x(n,!0)}"true"===t.getAttribute("data-scroll-lock-filled-gap")&&Z(t);var l=window.getComputedStyle(t);if(t.setAttribute("data-scroll-lock-filled-gap","true"),t.setAttribute("data-scroll-lock-current-fill-gap-method",w.fillGapMethod),"margin"===w.fillGapMethod){var i=parseFloat(l.marginRight);t.style.marginRight="".concat(i+r,"px")}else if("width"===w.fillGapMethod)t.style.width="calc(100% - ".concat(r,"px)");else if("max-width"===w.fillGapMethod)t.style.maxWidth="calc(100% - ".concat(r,"px)");else if("padding"===w.fillGapMethod){var c=parseFloat(l.paddingRight);t.style.paddingRight="".concat(c+r,"px")}}},J=function(t){var e=document.querySelectorAll(t);l(e,(function(t){Z(t)}))},Z=function(t){if(o(t)&&"true"===t.getAttribute("data-scroll-lock-filled-gap")){var e=t.getAttribute("data-scroll-lock-current-fill-gap-method");t.removeAttribute("data-scroll-lock-filled-gap"),t.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===e?t.style.marginRight="":"width"===e?t.style.width="":"max-width"===e?t.style.maxWidth="":"padding"===e&&(t.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(t){R()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(t){w.scroll||(w.startTouchY=t.touches[0].clientY,w.startTouchX=t.touches[0].clientX)})),document.addEventListener("touchmove",(function(t){if(!w.scroll){var e=w.startTouchY,r=w.startTouchX,n=t.touches[0].clientY,o=t.touches[0].clientX;if(t.touches.length<2){var l=a(w.scrollableSelectors),i={up:e<n,down:e>n,left:r<o,right:r>o},c={up:e+3<n,down:e-3>n,left:r+3<o,right:r-3>o};!function e(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var o=u(r,l,!1);if(m(r))return!1;if(n||v(r)&&u(r,l)||s(r,l)){var a=!1;h(r)&&g(r)?(i.up&&d(r)||i.down&&p(r))&&(a=!0):d(r)&&p(r)?(i.left&&h(r)||i.right&&g(r))&&(a=!0):(c.up&&d(r)||c.down&&p(r)||c.left&&h(r)||c.right&&g(r))&&(a=!0),a&&(o?e(o,!0):t.cancelable&&t.preventDefault())}else e(o)}else t.cancelable&&t.preventDefault()}(t.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(t){w.scroll||(w.startTouchY=0,w.startTouchX=0)})));var $={hide:function(t){i('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),S(t)},show:function(t){i('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),k(t)},toggle:function(t){i('"toggle" is deprecated! Do not use it.'),_()?S():k(t)},getState:function(){return i('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),_()},getWidth:function(){return i('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),T()},getCurrentWidth:function(){return i('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),A()},setScrollableTargets:function(t){i('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),G(t)},setFillGapSelectors:function(t){i('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),N(t)},setFillGapTargets:function(t){i('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),Y(t)},clearQueue:function(){i('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),L()}},tt=function(t){for(var e=arguments,r=function(r){var n=null!=e[r]?e[r]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){y(t,e,n[e])}))},n=1;n<arguments.length;n++)r(n);return t}({disablePageScroll:S,enablePageScroll:k,getScrollState:_,clearQueueScrollLocks:L,getTargetScrollBarWidth:x,getCurrentTargetScrollBarWidth:E,getPageScrollBarWidth:T,getCurrentPageScrollBarWidth:A,addScrollableSelector:j,removeScrollableSelector:F,addScrollableTarget:G,removeScrollableTarget:O,addLockableSelector:W,addLockableTarget:P,addFillGapSelector:N,removeFillGapSelector:B,addFillGapTarget:Y,removeFillGapTarget:q,setFillGapMethod:M,refillGaps:R,_state:w},$);e.default=tt}]).default},h=p();var g=document.querySelector(".home-film-list"),v=document.querySelector(".wrapper-modal"),m=document.querySelector(".backdrop"),y=document.querySelector(".close-btn");function b(t){t.id;var r=t.genres,n=t.original_title,o=t.overview,l=t.popularity,i=t.poster_path,a=t.title,c=t.vote_average,u=t.vote_count,s=String(c).slice(0,3),f=l.toFixed(1),d='\n        <div class="film-modal__poster">\n            <img class=\'film-modal__img\' width="375" height="478" src="'.concat(e.BASE_IMG_URL).concat(i,'"\n                alt="').concat(a,'" />\n        </div>\n        \n        <div class="film-modal__details-info details-info">\n            \x3c!-- Title --\x3e\n            <h2 class="details-info__title">').concat(a,'</h2>\n        \n            <ul class="details-info__list-static list-static list">\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Vote / Votes</p>\n                    <p class="item-vote-rez">\n                        <span class="tem-vote-rez--accent-mode">').concat(s,"</span>\n                        ").concat(u,'\n                    </p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Popularity</p>\n                    <p class=\'rez\'>').concat(f,'</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Original Title</p>\n                    <p class="rez">').concat(n,'</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Genre</p>\n                    <p class=\'rez\'>').concat(r,'</p>\n                </li>\n            </ul>\n        \n            <div class="details-info__group">\n                <p class="rez rez-title">about</p>\n                <p class="rez rez-desc">').concat(o,"</p>\n            </div>\n        </div>");v.insertAdjacentHTML("afterBegin",d),m.classList.remove("is-hidden"),y.addEventListener("click",w)}function w(e){if("card"===e.target.dataset.target){t(h).disablePageScroll();var r=e.target.closest("li").dataset.id;document.removeEventListener("click",w),f(r).then(b)}}function w(){t(h).enablePageScroll(),v.innerHTML="",m.classList.add("is-hidden"),document.addEventListener("click",w)}g.addEventListener("click",w)}();
//# sourceMappingURL=index.0c50688b.js.map
