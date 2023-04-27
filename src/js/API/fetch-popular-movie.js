import { refs } from "../refs";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export {
  fetchPopularMovieAPI,
  fetchMorePopularMovieAPI
};

const {
  BASE_URL,
  API_KEY,
  paginationLink
} = refs;

const options = {
  totalItems: 0,
  itemsPerPage: 40,
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

export const pagination = new Pagination(paginationLink, options);

// fetch popular movies
async function fetchPopularMovieAPI(page) {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      paginationLink.classList.remove('pagination-is-hidden');
      pagination.reset(data.total_results);
      return data.results;
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};

// fetch more popular movie
async function fetchMorePopularMovieAPI(page) {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return data.results;
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};
