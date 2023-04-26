import scrollLock from 'scroll-lock';

import { refs } from './refs';
import { fetchMovieInfoAPI } from './API/fetch-film-api';

const listOfMovies = document.querySelector('.home-film-list');
const bodyPage = document.querySelector('.wrapper-modal');
const backdrop = document.querySelector('.backdrop')
const closeBTN = document.querySelector('.close-btn');

// function for render modal markup 
function createModalMarkup({ id, genres, original_title, overview, popularity, poster_path, title, vote_average, vote_count }) {
    const voteNumeric = String(vote_average).slice(0, 3);
    const popularityNumeric = popularity.toFixed(1);

    const nameGenres = genres.map((item) => {
       return item.name;
    });

    const modalMarkup = `
        <div class="film-modal__poster">
            <img class='film-modal__img' width="375" height="478" src="${refs.BASE_IMG_URL}${poster_path}"
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
        </div>`;

    bodyPage.insertAdjacentHTML('afterBegin', modalMarkup);
    backdrop.classList.remove('is-hidden');
    closeBTN.addEventListener('click', closeMovieModalWindow);
};

// function open/close modal window
export default function openMovieModal(e) {
    if (e.target.dataset.target !== 'card') {
        return;
    } else {
        scrollLock.disablePageScroll();

        const movieId = e.target.closest('li').dataset.id;

        document.removeEventListener('click', openMovieModal);
    
        fetchMovieInfoAPI(movieId)
            .then(createModalMarkup);

        backdrop.addEventListener('click', closeMovieModalWindowBackdrop);
    };
};   


export default function closeMovieModalWindow() {

    bodyPage.innerHTML = '';
    backdrop.classList.add('is-hidden');

    scrollLock.enablePageScroll();

    document.addEventListener('click', openMovieModal);
};

function closeMovieModalWindowBackdrop(e) {
    if (e.target.classList.contains('backdrop')) {
        closeMovieModalWindow();
        backdrop.removeEventListener('click', closeMovieModalWindowBackdrop)
    } 
};

const closeMovieModalWindowEscape = event => {
    if (event.code === 'Escape') {
        closeMovieModalWindow();
        window.removeEventListener('keydown', closeMovieModalWindowEscape);
    }
};

listOfMovies.addEventListener('click', openMovieModal);
window.addEventListener('keydown', closeMovieModalWindowEscape);