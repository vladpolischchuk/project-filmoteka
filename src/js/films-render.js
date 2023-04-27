import { fetchGenresMovieAPI } from './API/fetch-genres-movie';
import { fetchPopularMovieAPI, fetchMorePopularMovieAPI, pagination } from './API/fetch-popular-movie';
import { refs } from './refs';

const {
    BASE_IMG_URL,
    popularMovieList
} = refs;

// function for render film list markup 
export function createMovieListMarkup(data, genres_names) {
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
            if (poster_path !== null) {
                return `
                <li class="film-list__item item" data-id="${id}  data-target="card">
                    <img class="film-link__img" src="${BASE_IMG_URL}${poster_path}" alt="${title}" data-target="card"">
                    <div class="wrapper">
                        <h3 class="film-link__title data-target="card"" >${title}</h3>
                        <div class="film-link__grup">
                            <p class="film-genres" data-target="card">${genres_str}</p>
                            <p class="film-year" data-target="card"><span class="film-line">|</span>${release}</p>
                        </div>
                    </div>
                </li>`;
            }
            return `
                <li class="film-list__item item" data-id="${id}  data-target="card">
                <img class="film-link__img" src="https://images.unsplash.com/photo-1512113569142-8a60fccc7caa" alt="${title}" data-target="card"">
                    <div class="wrapper">
                        <h3 class="film-link__title data-target="card"" >${title}</h3>
                        <div class="film-link__grup">
                            <p class="film-genres" data-target="card">${genres_str}</p>
                            <p class="film-year" data-target="card"><span class="film-line">|</span>${release}</p>
                        </div>
                    </div>
                </li>`;
        }).join('');
};

const currentPage = pagination.getCurrentPage();

fetchGenresMovieAPI().then(genres => {
    fetchPopularMovieAPI(currentPage).then(data => {
        let markup = createMovieListMarkup(data, genres);
        popularMovieList.insertAdjacentHTML('beforeend', markup);
    });
});

pagination.on('afterMove', event => {
    const page = event.page;

    fetchGenresMovieAPI().then(genres => {
        fetchMorePopularMovieAPI(page).then(data => {
            let markup = createMovieListMarkup(data, genres);

            popularMovieList.innerHTML = '';
            popularMovieList.insertAdjacentHTML('beforeend', markup);
        });
    });
});