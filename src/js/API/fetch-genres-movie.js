import { refs } from "../refs";

export {
    fetchGenresMovieAPI,
};

const {
    BASE_URL,
    API_KEY
} = refs;

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