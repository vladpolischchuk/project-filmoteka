import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { fetchGenresMovieAPI, fetchMorePopularMovieAPI } from './API/fetch-film-api';
import { createMovieListMarkup } from './films-render';
import { refs } from './refs';

const options = {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
    disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
    moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
};

export const pagination = new Pagination('pagination', options);
export const currentPage = pagination.getCurrentPage();

pagination.on('afterMove', event => {
  const {page} = event;

  fetchGenresMovieAPI().then(genres => {
      fetchMorePopularMovieAPI(page).then(data => {
      let markup = createMovieListMarkup(data, genres);

      refs.popularMovieList.innerHTML = '';
      refs.popularMovieList.insertAdjacentHTML('beforeend', markup);
      });
  });
});