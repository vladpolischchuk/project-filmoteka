const e={popularMovieList:document.querySelector(".home-film-list"),bodyModal:document.querySelector(".wrapper-modal"),backDrop:document.querySelector(".backdrop"),closeBtn:document.querySelector(".close-btn")};async function t(){return await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=cf961b1b89f4c4a28558be2b04fdd59a&page=1").then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e.results)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))}async function n(e){return await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=cf961b1b89f4c4a28558be2b04fdd59a`).then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))}(async function(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cf961b1b89f4c4a28558be2b04fdd59a").then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e.genres)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))})().then((n=>{t().then((t=>{let i=function(e,t){if(0!==e.length)return e.map((({id:e,title:n,poster_path:i,release_date:a,genre_ids:s})=>{let r=a.slice(0,4),l=[];for(let e of s){let n=t.find((({id:t})=>t===e));l.push(n.name)}return l.length>=3&&(l=[l[0],l[1],"Other"]),`\n            <li class="film-list__item item" data-id="${e}">\n                <img class="film-link__img" width="500px" src="https://image.tmdb.org/t/p/w500${i}" alt="${n}" data-id="${e}" data-target="card">\n                <div class="wrapper">\n                    <h3 class="film-link__title" data-target="card">${n}</h3>\n                    <div class="film-link__grup">\n                        <p class="film-genres" data-target="card">${l.join(", ")}</p>\n                        <p class="film-year" data-target="card"><span class="film-line">|</span>${r}</p>\n                    </div>\n                </div>\n            </li>`})).join("")}(t,n);e.popularMovieList.insertAdjacentHTML("beforeend",i)}))}));const i=document.querySelector(".home-film-list"),a=document.querySelector(".wrapper-modal"),s=document.querySelector(".backdrop"),r=document.querySelector(".close-btn");function l({id:e,genres:t,original_title:n,overview:i,popularity:l,poster_path:c,title:d,vote_average:p,vote_count:m}){let f=`\n    <div class="wrapper-modal">\n        <div class="film-modal__poster">\n            <img class='film-modal__img' width="375" height="478" src="https://image.tmdb.org/t/p/w500${c}"\n                alt="${d}" />\n        </div>\n        \n        <div class="film-modal__details-info details-info">\n            \x3c!-- Title --\x3e\n            <h2 class="details-info__title">${d}</h2>\n        \n            <ul class="details-info__list-static list-static list">\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Vote / Votes</p>\n                    <p class="item-vote-rez">\n                        <span class="tem-vote-rez--accent-mode">${p}</span>\n                        ${m}\n                    </p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Popularity</p>\n                    <p class='rez'>${l}</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Original Title</p>\n                    <p class="rez">${n}</p>\n                </li>\n        \n                <li class="list-static__item">\n                    <p class="info-film-txt">Genre</p>\n                    <p class='rez'>${t}</p>\n                </li>\n            </ul>\n        \n            <div class="details-info__group">\n                <p class="rez rez-margin">about</p>\n                <p class="rez rez-desc">${i}</p>\n            </div>\n        </div>\n    </div>`;a.insertAdjacentHTML("afterBegin",f),s.classList.remove("is-hidden"),r.addEventListener("click",o)}function o(e){if("card"===e.target.dataset.target){const t=e.target.closest("li").dataset.id;document.removeEventListener("click",o),n(t).then(l)}}function o(){s.classList.add("is-hidden"),a.innerHTML="",document.addEventListener("click",o)}i.addEventListener("click",o);
//# sourceMappingURL=index.b0261173.js.map
