import { fetchGenresFilmsAPI, fetchMovieSearchAPI } from './API/fetch-film-api';
import { createFilmListFMarkup } from './films-render';
import { refs } from './refs';

const searchForm = document.querySelector('.form-search');

async function onInput(e) {
    e.preventDefault();
  
    value = e.target.elements.searchQuery.value.trim();

    await fetchGenresFilmsAPI().then(genres => {
        fetchMovieSearchAPI(value).then(data => {
            let markup = createFilmListFMarkup(data, genres);
            refs.popularMovieList.innerHTML = '';
            refs.popularMovieList.insertAdjacentHTML('beforeend', markup);
        });
    });
  }

searchForm.addEventListener('submit', onInput);