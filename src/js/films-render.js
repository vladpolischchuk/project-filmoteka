import { fetchPopularFilmsAPI, fetchGenresFilmsAPI } from './API/fetch-film-api';
import { refs } from './refs';

// function for render film list markup 
function createFilmListFMarkup(data, genres_names) {
    if (data.length === 0) {
        return;
    }
    return data
        .map(({ id, title, poster_path, release_date, genre_ids }) => {
            let release = release_date.slice(0, 4);
            let genres = [];
            for (let genre_id of genre_ids) {
                let genre = genres_names.find(({ id }) => id === genre_id);
                genres.push(genre.name);
            };
            if (genres.length >= 3) {
                genres = [genres[0], genres[1], 'Other'];
            };
            let genres_str = genres.join(', ');
            return `
            <li class="film-list__item item" data-id="${id}">
                <img class="film-link__img" width="500px" src="${refs.BASE_IMG_URL}${poster_path}" alt="${title}" data-id="${id}" data-target="card">
                <div class="wrapper">
                    <h3 class="film-link__title" data-target="card">${title}</h3>
                    <div class="film-link__grup">
                        <p class="film-genres" data-target="card">${genres_str}</p>
                        <p class="film-year" data-target="card"><span class="film-line">|</span>${release}</p>
                    </div>
                </div>
            </li>`;}).join('');
};

fetchGenresFilmsAPI().then(genres => {
    fetchPopularFilmsAPI().then(data => {
        let markup = createFilmListFMarkup(data, genres);
        refs.popularMovieList.insertAdjacentHTML('beforeend', markup);
    });
});