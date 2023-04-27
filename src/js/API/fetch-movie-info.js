import { refs } from "../refs";

export {
      fetchMovieInfoAPI,
};

const {
      BASE_URL,
      API_KEY
} = refs;

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
