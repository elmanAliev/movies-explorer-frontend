import { MOVIES_URL, NOT_FOUND_ERR } from './constants';
import { getAllMovies } from './MoviesApi';


// полный список фильмов с сервиса beatfilm-movies
export const readMovies = async () => {
    try {
        const movies = await getAllMovies();

        const moviesList = movies.map(movie => {
            return {
                movieId: movie.id,
                country: movie.country || '-',
                director: movie.director || '-',
                duration: movie.duration || 0,
                year: movie.year || '-',
                description: movie.description || '-',
                image: movie.image ? `${MOVIES_URL}${movie.image.url}` : 'https://fakeimg.pl/300/',
                trailerLink: movie.trailerLink || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                nameRU: movie.nameRU || '',
                nameEN: movie.nameEN || '',
                thumbnail: movie.image ? `${MOVIES_URL}${movie.image.formats.thumbnail.url}` : 'https://fakeimg.pl/300/',
            };
        });

        return moviesList;

    } catch (err) {

        const errMsg = [
            `Во время запроса произошла ошибка.`,
            `Возможно, проблема с соединением или сервер недоступен.`,
            `Подождите немного и попробуйте ещё раз`,
        ];

        const errString = errMsg.map((item, index) => {
            return <p key={index} className="list__no-result">{item}</p>;
        });

        return errString;
    };
};

// Поиск в полученном списке фильмов
const checkField = (field, searchString) => {
    return field ? field.toLowerCase().includes(searchString) : false;
}

export const filterMovies = async (searchString, moviesList) => {

    const string = searchString.toLowerCase();

    const foundMovies = moviesList.filter((movie) => {
        const fieldRU = checkField(movie.nameRU, string);
        const fieldEN = checkField(movie.nameEN, string);
        return (fieldRU || fieldEN)
    });

    if (foundMovies.length > 0) return Promise.resolve(foundMovies);

    return Promise.reject(NOT_FOUND_ERR);
}

export const addSaveMark = (moviesList, savedMovies) => {
    console.log(moviesList)
    console.log(savedMovies)
    return moviesList.map((movie) => {
        
        const saved = savedMovies.some(savedFilm => savedFilm.movieId === movie.movieId);

        if (saved) movie.savedId = 0
        
        return movie
    })
}