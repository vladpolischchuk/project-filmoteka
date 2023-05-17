import { refs } from './refs';
import { fetchMovieInfoAPI } from './API/fetch-movie-info';

let listWatchedMuvie = [];
let listQueueMuvie = [];

const {
    BASE_IMG_URL,
    body,
    listOfMovies,
    bodyPage,
    backdrop,
    closeBTN,
    btn
} = refs;

// function for render modal markup 
function createModalMarkup({ id, genres, original_title, overview, popularity, poster_path, title, vote_average, vote_count }) {
    const voteNumeric = String(vote_average).slice(0, 3);
    const popularityNumeric = popularity.toFixed(1);

    const nameGenres = genres.map((item) => {
        return item.name;
    });
    let modalMarkup = '';

    poster_path !== null ? modalMarkup = `
        <div class="film-modal__poster">
            <img class='film-modal__img' width="375" height="478" src="${BASE_IMG_URL}${poster_path}"
                alt="${title}" />
        </div>
        
        <div class="film-modal__details-info details-info">
            <!-- Title -->
            <h2 class="details-info__title">${title}</h2>
        
            <ul class="details-info__list-static list-static list">
        
                <li class="list-static__item">
                    <p class="info-film-txt">Vote / Votes</p>
                    <p class="item-vote-rez">
                        <span class="tem-vote-rez--accent-mode">${voteNumeric}</span>
                        ${vote_count}
                    </p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Popularity</p>
                    <p class='rez'>${popularityNumeric}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Original Title</p>
                    <p class="rez">${original_title}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Genre</p>
                    <p class='rez'>${nameGenres} </p>
                </li>
            </ul>
        
            <div class="details-info__group">
                <p class="rez rez-title">about</p>
                <p class="rez rez-desc">${overview}</p>
            </div>

             <div class="btn-wrapper">
                <button class="btn btn_modal watched" data-id="${id}">add to Watched</button>
                <button class="btn btn_modal queue" data-id="${id}">add to queue</button>
            </div>

            
        </div>` : modalMarkup = `
        <div class="film-modal__poster">
            <img class='film-modal__img' width="375" height="478" src="https://images.unsplash.com/photo-1512113569142-8a60fccc7caa"
                alt="${title}" />
        </div>
        
        <div class="film-modal__details-info details-info">
            <!-- Title -->
            <h2 class="details-info__title">${title}</h2>
        
            <ul class="details-info__list-static list-static list">
        
                <li class="list-static__item">
                    <p class="info-film-txt">Vote / Votes</p>
                    <p class="item-vote-rez">
                        <span class="tem-vote-rez--accent-mode">${voteNumeric}</span>
                        ${vote_count}
                    </p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Popularity</p>
                    <p class='rez'>${popularityNumeric}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Original Title</p>
                    <p class="rez">${original_title}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Genre</p>
                    <p class='rez'>${nameGenres} </p>
                </li>
            </ul>
        
            <div class="details-info__group">
                <p class="rez rez-title">about</p>
                <p class="rez rez-desc">${overview}</p>
            </div>

            <div class="btn-wrapper">
                <button class="btn btn_modal watched" data-id="${id}">add to Watched</button>
                <button class="btn btn_modal queue" data-id="${id}">add to queue</button>
        </div>
        </div>` ;

    bodyPage.insertAdjacentHTML('afterBegin', modalMarkup);
    backdrop.classList.remove('is-hidden');
    closeBTN.addEventListener('click', closeMovieModalWindow);

    const btnWatched = document.querySelector('.watched');
    const btnQueue = document.querySelector('.queue');

    listWatchedMuvie = localStorage.getItem('watchedMovies')
    console.log(listWatchedMuvie)
    if (listWatchedMuvie.includes(id)) {
        btnWatched.innerText = 'Remove from watched';
    };

    if (listQueueMuvie.includes(id)) {
        btnWatched.innerText = 'Remove from queue';
    }

    btnWatched.addEventListener('click', addToLibrary);
    btnQueue.addEventListener('click', addToLibrary);
};

// function open/close modal window
export default function openMovieModal(e) {
    if (e.target.dataset.target !== 'card') {
        return;
    } else {

        const movieId = e.target.closest('li').dataset.id;
        backdrop.addEventListener('click', closeMovieModalWindowBackdrop);
        body.classList.add('no-scroll');

        fetchMovieInfoAPI(movieId)
            .then(createModalMarkup);
    };
};


function closeMovieModalWindow() {
    bodyPage.innerHTML = "";
    backdrop.classList.add('is-hidden');

    body.classList.remove('no-scroll');
};

function closeMovieModalWindowBackdrop(e) {
    if (e.target.classList.contains('backdrop')) {
        closeMovieModalWindow();
    };

    listOfMovies.addEventListener('click', openMovieModal);
};

const closeMovieModalWindowEscape = event => {
    if (event.code === 'Escape') {
        closeMovieModalWindow();
    };
};

listOfMovies.addEventListener('click', openMovieModal);
window.addEventListener('keydown', closeMovieModalWindowEscape);

function addToLibrary(e) {
    if (e.target.closest('button').classList.contains('watched')) {
        const movieId = e.target.dataset.id;

        if (!listWatchedMuvie.includes(movieId)) {
            listWatchedMuvie.push(movieId);
        };

        localStorage.setItem('watchedMovies', JSON.stringify(listWatchedMuvie));

    } else if (e.target.closest('button').classList.contains('queue')) {
        const movieId = e.target.dataset.id;

        if (!listQueueMuvie.includes(movieId)) {
            listQueueMuvie.push(movieId);
        };
    };
};

