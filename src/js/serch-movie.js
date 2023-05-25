import { fetchGenresMovieAPI } from './API/fetch-genres-movie';
import { fetchMovieSearchAPI, fetchMoreMovieSearchAPI, pagination } from './API/fetch-search-movie';
import { createMovieListMarkup } from './films-render';
import { refs } from './refs';

let value = '';
const currentPage = pagination.getCurrentPage();
const {
    searchForm,
    listOfMovies,
    searchQuery,
} = refs;

async function onInput(e) {
    e.preventDefault();
    value = e.target.elements.searchQuery.value.trim();

    await fetchGenresMovieAPI().then(genres => {
        fetchMovieSearchAPI(value, currentPage).then(data => {
            let markup = createMovieListMarkup(data, genres);
            listOfMovies.innerHTML = '';
            listOfMovies.insertAdjacentHTML('beforeend', markup);
        });
    })

    searchQuery.value = '';
};

pagination.on('afterMove', event => {
    const page = event.page;

    fetchGenresMovieAPI().then(genres => {
        fetchMoreMovieSearchAPI(value, page).then(data => {
            let markup = createMovieListMarkup(data, genres);

            listOfMovies.innerHTML = '';
            listOfMovies.insertAdjacentHTML('beforeend', markup);
        });
    });
});

searchForm.addEventListener('submit', onInput);