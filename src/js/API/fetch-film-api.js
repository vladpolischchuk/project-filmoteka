import { pagination } from "../pagination";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cf961b1b89f4c4a28558be2b04fdd59a';

export {
  fetchPopularMovieAPI,
  fetchMorePopularMovieAPI,
  fetchGenresMovieAPI,
  fetchMovieInfoAPI,
  fetchMovieSearchAPI,
};

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

// fetch id and names ganre for movies
async function fetchGenresMovieAPI() {
  return await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      return data.genres;
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};

// fetch for all information for movie
async function fetchMovieInfoAPI(movie_id) {
  return await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};

// fetch search movie
async function fetchMovieSearchAPI(searchQuery) {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${1}&include_adult=folse`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      return data.results;
    })
    .catch(error => {
      console.error('error:', error);
    });
};