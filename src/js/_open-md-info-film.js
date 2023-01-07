import { refs } from './refs';
import { fetchMovieInfoAPI } from './API/fetch-film-api';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const listOfMovies = document.querySelector('.home-film-list');
const bodyPage = document.querySelector('.wrapper-modal');
const backdrop = document.querySelector('.backdrop')
const closeBTN = document.querySelector('.close-btn');

// function for render modal markup 
function createModalMarkup({ id, genres, original_title, overview, popularity, poster_path, title, vote_average, vote_count }) {
    let markup = `
    <div class="wrapper-modal">
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
                        <span class="tem-vote-rez--accent-mode">${vote_average}</span>
                        ${vote_count}
                    </p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Popularity</p>
                    <p class='rez'>${popularity}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Original Title</p>
                    <p class="rez">${original_title}</p>
                </li>
        
                <li class="list-static__item">
                    <p class="info-film-txt">Genre</p>
                    <p class='rez'>${genres}</p>
                </li>
            </ul>
        
            <div class="details-info__group">
                <p class="rez rez-margin">about</p>
                <p class="rez rez-desc">${overview}</p>
            </div>
        </div>
    </div>`;

    bodyPage.insertAdjacentHTML('afterBegin', markup);
    backdrop.classList.remove('is-hidden');
    closeBTN.addEventListener('click', closeMovieModalWindow);
};

export default function openMovieModal(e) {
    const movieCardEl = e.target.closest('li');
    console.log(movieCardEl.dataset.id)
    const movieId = movieCardEl.dataset.id;

    document.removeEventListener('click', openMovieModal);
     fetchMovieInfoAPI(movieId)
        .then(createModalMarkup);
}

listOfMovies.addEventListener('click', openMovieModal);

export default function closeMovieModalWindow() {
    backdrop.classList.add('is-hidden');
    bodyPage.innerHTML = '';
    document.addEventListener('click', openMovieModal);
}
