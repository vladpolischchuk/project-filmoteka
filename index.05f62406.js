const e={popularMovieList:document.querySelector(".home-film-list"),listOfMovies:document.querySelector(".home-film-list"),bodyModal:document.querySelector(".wrapper-modal"),backDrop:document.querySelector(".backdrop"),closeBtn:document.querySelector(".close-btn")};async function t(){return await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=cf961b1b89f4c4a28558be2b04fdd59a&page=1").then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e.results)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))}async function i(e){return await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=cf961b1b89f4c4a28558be2b04fdd59a`).then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))}(async function(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cf961b1b89f4c4a28558be2b04fdd59a").then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>e.genres)).catch((e=>{console.error("There has been a problem with your fetch operation:",e)}))})().then((i=>{t().then((t=>{let n=function(e,t){if(0!==e.length)return e.map((({id:e,title:i,poster_path:n,release_date:s,genre_ids:l})=>{let o=s.slice(0,4),a=[];for(let e of l){let i=t.find((({id:t})=>t===e));a.push(i.name)}return a.length>=3&&(a=[a[0],a[1],"Other"]),`\n            <li class="film-list__item item" data-id="${e}">\n                <img class="film-link__img" width="500px" src="https://image.tmdb.org/t/p/w500${n}" alt="${i}">\n                <div class="wrapper">\n                    <h3 class="film-link__title">${i}</h3>\n                    <div class="film-link__grup">\n                        <p class="film-genres">${a.join(", ")}</p>\n                        <p class="film-year"><span class="film-line">|</span>${o}</p>\n                    </div>\n                </div>\n            </li>`})).join("")}(t,i);e.popularMovieList.insertAdjacentHTML("beforeend",n)}))}));function n({id:t,genres:i,original_title:n,overview:l,popularity:o,poster_path:a,title:r,vote_average:c,vote_count:p}){let d=`\n    <div class="film-modal__poster">\n        <img class='film-modal__img' width="375" height="478" src="https://image.tmdb.org/t/p/w500${a}"\n            alt="${r}" />\n    </div>\n    \n    <div class="film-modal__details-info details-info">\n        \x3c!-- Title --\x3e\n        <h2 class="details-info__title">${r}</h2>\n    \n        <ul class="details-info__list-static list-static list">\n    \n            <li class="list-static__item">\n                <p class="info-film-txt">Vote / Votes</p>\n                <p class="item-vote-rez">\n                    <span class="tem-vote-rez--accent-mode">${c}</span>\n                    ${p}\n                </p>\n            </li>\n    \n            <li class="list-static__item">\n                <p class="info-film-txt">Popularity</p>\n                <p class='rez'>${o}</p>\n            </li>\n    \n            <li class="list-static__item">\n                <p class="info-film-txt">Original Title</p>\n                <p class="rez">${n}</p>\n            </li>\n    \n            <li class="list-static__item">\n                <p class="info-film-txt">Genre</p>\n                <p class='rez'>${i}</p>\n            </li>\n        </ul>\n    \n        <div class="details-info__group">\n            <p class="rez rez-margin">about</p>\n            <p class="rez rez-desc">${l}</p>\n        </div>\n\n    </div>`;e.bodyModal.insertAdjacentHTML("afterBegin",d),e.backDrop.classList.remove("is-hidden"),e.closeBtn.addEventListener("click",s)}function s(e){const t=e.target.closest("li").dataset.id;document.removeEventListener("click",s),i(t).then(n)}function s(){e.backDrop.classList.add("is-hidden"),e.bodyModal.innerHTML="",document.addEventListener("click",s)}e.listOfMovies.addEventListener("click",s);
//# sourceMappingURL=index.05f62406.js.map
