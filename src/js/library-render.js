import { refs } from './refs';
import { fetchMovieInfoAPI } from './API/fetch-movie-info';

const {
    BASE_IMG_URL,
    libraryMovieList
} = refs;

let listWatchedMuvie =  JSON.parse(localStorage.getItem('watchedMovies')) || [];
let listQueueMuvie = JSON.parse(localStorage.getItem('queueMovies')) || [];

function createMovieListMarkup ({ 
    id, 
    title, 
    poster_path, 
    release_date, 
    genres }) {

        let release = release_date.slice(0, 4);
        const nameGenres = genres.map((item) => {
            return item.name;
        });
        if (nameGenres.length >= 3) {
            nameGenres = [nameGenres[0], nameGenres[1], 'Other'];
        };
        let genres_str = nameGenres.join(', ');
        if (poster_path !== null) {
            return `
            <li class="film-list__item item" data-id="${id}  data-target="card">
                <img class="film-link__img" src="${BASE_IMG_URL}${poster_path}" alt="${title}" data-target="card"">
                <div class="wrapper">
                    <h3 class="film-link__title data-target="card"" >${title}</h3>
                    <div class="film-link__grup">
                        <p class="film-genres" data-target="card">${genres_str}</p>
                        <p class="film-year" data-target="card"><span class="film-line">|</span>${release}</p>
                    </div>
                </div>
            </li>`;
        }
        return `
            <li class="film-list__item item" data-id="${id}  data-target="card">
            <img class="film-link__img" src="https://images.unsplash.com/photo-1512113569142-8a60fccc7caa" alt="${title}" data-target="card"">
                <div class="wrapper">
                    <h3 class="film-link__title data-target="card"" >${title}</h3>
                    <div class="film-link__grup">
                        <p class="film-genres" data-target="card">${genres_str}</p>
                        <p class="film-year" data-target="card"><span class="film-line">|</span>${release}</p>
                    </div>
                </div>
            </li>`;
};

const libraryList = (list) => {
   for(let i = 0; i < list.length; i++) {
   
        fetchMovieInfoAPI(list[i])
        .then(date => {
            let markup = createMovieListMarkup(date);
            libraryMovieList.insertAdjacentHTML('beforeend', markup);
        });

};
};

if(listQueueMuvie.length > 0 ) {
    libraryList(listQueueMuvie);
} else if(listWatchedMuvie.length > 0) {
    libraryList(listWatchedMuvie);
} else if((listWatchedMuvie == null || listWatchedMuvie.length === 0) && (listQueueMuvie == null || listQueueMuvie.length === 0 )) {
    message.innerHTML = `<h2 class="message-text">Ooops! You library is empty yet :(</h2>`;
    libraryMovieList.innerHTML = '';
};



