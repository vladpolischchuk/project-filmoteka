!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("4Nugj",(function(e,n){t(e.exports,"refs",(function(){return r}));var r={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"cf961b1b89f4c4a28558be2b04fdd59a",BASE_IMG_URL:"https://image.tmdb.org/t/p/w500",body:document.querySelector(".body"),searchQuery:document.querySelector(".form-search__input"),libraryMovieList:document.querySelector(".library-film-list"),paginationLink:document.querySelector(".tui-pagination"),listOfMovies:document.querySelector(".home-film-list"),bodyPage:document.querySelector(".wrapper-modal"),backdrop:document.querySelector(".backdrop"),closeBTN:document.querySelector(".close-btn"),searchForm:document.querySelector(".form-search"),btnWrapper:document.querySelector(".wrapper-btn"),btnWatched:document.querySelector(".btn_watched"),btnQueue:document.querySelector(".btn_queue")}})),i.register("3DIF4",(function(n,r){t(n.exports,"fetchMovieInfoAPI",(function(){return u}));var o=i("bpxeT"),a=i("2TvXO"),c=i("4Nugj"),s=c.refs.BASE_URL,l=c.refs.API_KEY;function u(t){return f.apply(this,arguments)}function f(){return(f=e(o)(e(a).mark((function t(n){return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(n,"?api_key=").concat(l)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}})),i.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function y(){}function g(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(T([])));_&&_!==n&&r.call(_,i)&&(b=_);var x=g.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=g,s(x,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("jUuu7",(function(e,n){t(e.exports,"default",(function(){return v}));var r=i("4Nugj"),o=i("3DIF4"),a=[],c=[],s=r.refs.BASE_IMG_URL,l=r.refs.body,u=r.refs.listOfMovies,f=r.refs.bodyPage,d=r.refs.backdrop,p=r.refs.closeBTN;function h(t){var e=t.id,n=t.genres,r=t.original_title,o=t.overview,i=t.popularity,l=t.poster_path,u=t.title,h=t.vote_average,v=t.vote_count,y=String(h).slice(0,3),g=i.toFixed(1),b=n.map((function(t){return t.name})),w="";w=null!==l?'\n        <div class="film-modal__poster">\n            <img class=\'film-modal__img\' width="375" height="478" src="'.concat(s).concat(l,'"\n                alt="').concat(u,'" />\n        </div>\n\n        <div class="film-modal__details-info details-info">\n            \x3c!-- Title --\x3e\n            <h2 class="details-info__title">').concat(u,'</h2>\n\n            <ul class="details-info__list-static list-static list">\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Vote / Votes</p>\n                    <p class="item-vote-rez">\n                        <span class="tem-vote-rez--accent-mode">').concat(y,"</span>\n                        ").concat(v,'\n                    </p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Popularity</p>\n                    <p class=\'rez\'>').concat(g,'</p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Original Title</p>\n                    <p class="rez">').concat(r,'</p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Genre</p>\n                    <p class=\'rez\'>').concat(b,' </p>\n                </li>\n            </ul>\n\n            <div class="details-info__group">\n                <p class="rez rez-title">about</p>\n                <p class="rez rez-desc">').concat(o,'</p>\n            </div>\n\n             <div class="btn-wrapper">\n                <button class="btn btn_modal watched" data-id="').concat(e,'">add to Watched</button>\n                <button class="btn btn_modal queue" data-id="').concat(e,'">add to queue</button>\n            </div>\n\n\n        </div>'):'\n        <div class="film-modal__poster">\n            <img class=\'film-modal__img\' width="375" height="478" src="https://images.unsplash.com/photo-1512113569142-8a60fccc7caa"\n                alt="'.concat(u,'" />\n        </div>\n\n        <div class="film-modal__details-info details-info">\n            \x3c!-- Title --\x3e\n            <h2 class="details-info__title">').concat(u,'</h2>\n\n            <ul class="details-info__list-static list-static list">\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Vote / Votes</p>\n                    <p class="item-vote-rez">\n                        <span class="tem-vote-rez--accent-mode">').concat(y,"</span>\n                        ").concat(v,'\n                    </p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Popularity</p>\n                    <p class=\'rez\'>').concat(g,'</p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Original Title</p>\n                    <p class="rez">').concat(r,'</p>\n                </li>\n\n                <li class="list-static__item">\n                    <p class="info-film-txt">Genre</p>\n                    <p class=\'rez\'>').concat(b,' </p>\n                </li>\n            </ul>\n\n            <div class="details-info__group">\n                <p class="rez rez-title">about</p>\n                <p class="rez rez-desc">').concat(o,'</p>\n            </div>\n\n            <div class="btn-wrapper">\n                <button class="btn btn_modal watched" data-id="').concat(e,'">add to Watched</button>\n                <button class="btn btn_modal queue" data-id="').concat(e,'">add to queue</button>\n        </div>\n        </div>'),f.insertAdjacentHTML("afterBegin",w),d.classList.remove("is-hidden"),p.addEventListener("click",m);var _=document.querySelector(".watched"),x=document.querySelector(".queue");a=JSON.parse(localStorage.getItem("watchedMovies"))||[],c=JSON.parse(localStorage.getItem("queueMovies"))||[],a.includes(String(e))?_.textContent="Remove from watched":_.textContent="Add to watched",c.includes(String(e))?x.textContent="Remove from queue":x.textContent="Add to queue",_.addEventListener("click",(function(t){if(t.target.closest("button").classList.contains("watched")){var e=t.target.dataset.id;if(a.includes(e)){var n=a.indexOf(e);a.splice(n,1),localStorage.setItem("watchedMovies",JSON.stringify(a)),_.textContent="Add to watched"}else a.push(e),localStorage.setItem("watchedMovies",JSON.stringify(a)),_.textContent="Remove from watched"}})),x.addEventListener("click",(function(t){if(t.target.closest("button").classList.contains("queue")){var e=t.target.dataset.id;if(c.includes(e)){var n=c.indexOf(e);c.splice(n,1),localStorage.setItem("queueMovies",JSON.stringify(c)),x.textContent="Add to queue"}else c.push(e),localStorage.setItem("queueMovies",JSON.stringify(c)),x.textContent="Remove from queue"}}))}function v(t){if("card"===t.target.dataset.target){var e=t.target.closest("li").dataset.id;d.addEventListener("click",y),l.classList.add("no-scroll"),(0,o.fetchMovieInfoAPI)(e).then(h)}}function m(){f.innerHTML="",d.classList.add("is-hidden"),l.classList.remove("no-scroll")}function y(t){t.target.classList.contains("backdrop")&&m(),u.addEventListener("click",v)}window.addEventListener("keydown",(function(t){"Escape"===t.code&&m()}))}))}();
//# sourceMappingURL=library.34699f1b.js.map