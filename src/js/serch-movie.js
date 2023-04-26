// import { fetchGenresMovieAPI, fetchMovieSearchAPI } from './API/fetch-film-api';
// import { createMovieListMarkup } from './films-render';
// import { refs } from './refs';

// const searchForm = document.querySelector('.form-search');

// async function onInput(e) {
//     e.preventDefault();
  
//     const value = e.target.elements.searchQuery.value.trim();

//     await fetchGenresMovieAPI().then(genres => {
//         fetchMovieSearchAPI(value).then(data => {
//             let markup = createMovieListMarkup(data, genres);
//             refs.popularMovieList.innerHTML = '';
//             refs.popularMovieList.insertAdjacentHTML('beforeend', markup);
//         });
//     });
//   }

// searchForm.addEventListener('submit', onInput);