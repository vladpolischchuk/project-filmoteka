export const refs = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'cf961b1b89f4c4a28558be2b04fdd59a',
  BASE_IMG_URL: 'https://image.tmdb.org/t/p/w500',

  body: document.querySelector('.body'),
  searchQuery: document.querySelector('.form-search__input'),

  libraryMovieList: document.querySelector('.library-film-list'),

  paginationLink: document.querySelector('.tui-pagination'),

  listOfMovies: document.querySelector('.home-film-list'),

  bodyPage: document.querySelector('.wrapper-modal'),
  backdrop: document.querySelector('.backdrop'),
  closeBTN: document.querySelector('.close-btn'),

  searchForm: document.querySelector('.form-search'),

  btnWrapper: document.querySelector('.wrapper-btn'),
  btnWatched: document.querySelector('.btn_watched'),
  btnQueue: document.querySelector('.btn_queue'),
};