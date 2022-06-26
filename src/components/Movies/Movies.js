import './Movies.css';
import { useState, useEffect } from 'react';
import api from '../../utils/MainApi'
import { ButtonMore } from '../ButtonMore/ButtonMore';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { getScreenSettings } from '../../utils/ScreenSettings'
import { readMovies, filterMovies, addSaveMark } from '../../utils/MoviesSearch'
import Loader from '../Loader/Loader';


export const Movies = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [showedMovies, setShowedMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [markedMovies, setMarkedMovies] = useState([]);

    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { width } = useWindowDimensions();
    const [screenSettings, setScreenSettings] = useState({ total: 16, add: 4 });
    const [visibleMoviesNumber, setVisibleMoviesNumber] = useState(0);
    const [isMoreVisible, setIsMoreVisible] = useState(false);


    // достаем из LocalStorage данные
    useEffect(() => {
        const switchStorage = JSON.parse(localStorage.getItem('isSwitchOn'));
        const moviesStorage = JSON.parse(localStorage.getItem('filteredMovies'));
        if (switchStorage) setIsSwitchOn(switchStorage);
        if (moviesStorage) setMoviesList(moviesStorage);
    }, []);


    // получаем сохраненные фильмы
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.getMovies(token)
                .then((res) => {
                    setSavedMovies(res.data);
                })
                .catch((err) => {
                    console.log(`Не удалось загрузить сохраненные фильмы: ${err}`);
                })
        }
    }, []);


    // поиск всех фильмов
    const handleSearchSubmit = async (searchString) => {

        setMoviesList([]);
        setIsSwitchOn(false);
        if (localStorage.getItem('filteredMovies')) localStorage.removeItem('filteredMovies');
        if (localStorage.getItem('searchString')) localStorage.removeItem('searchString');

        try {
            setIsMoviesLoading(true);

            // получаем фильмы с сервиса beatfilm-movies
            const movies = await readMovies();

            // фильтруем фильмы
            const filteredMovies = await filterMovies(searchString, movies);
            setMoviesList(filteredMovies);

            localStorage.setItem('searchString', JSON.stringify(searchString));
            localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));

        } catch (err) {
            setErrorMessage(err)
        } finally {
            setIsMoviesLoading(false)
        }
    }


    // при изменении массивов всех/сохраненных фильмов добавляем отметку
    useEffect(() => {
        const moviesWithMark = addSaveMark(moviesList, savedMovies)
        setMarkedMovies(moviesWithMark)
    }, [savedMovies, moviesList]);


    // управление лайком фильму
    const handleLikeClick = (movieId) => {

        const token = localStorage.getItem('token');
        let likedMovie = moviesList.find((movie) => movie.movieId === movieId);
        let dislikedMovie = savedMovies.find((movie) => movie.movieId === movieId);

        if (likedMovie.savedId !== 0) {

            api.postNewMovie(likedMovie, token)
                .then((res) => setSavedMovies(prev => [...prev, res.data]))
                .catch((err) => console.log(err))

        } else {

            api.deleteMovie(dislikedMovie._id, token)
                .then((res) => setSavedMovies(prev => prev.filter(c => c.movieId !== movieId)))
                .catch((err) => console.log(err))
        }
    }

    // управление короткометражками
    useEffect(() => {
        localStorage.setItem('isSwitchOn', JSON.stringify(isSwitchOn));
        const fromStorage = localStorage.getItem('filteredMovies');
        if (fromStorage) {
            const found = JSON.parse(fromStorage);

            if (isSwitchOn) {
                const filterMovies = moviesList.filter((movie) => movie.duration < 40);
                setMoviesList([...filterMovies])
            } else {
                setMoviesList([...found])
            }
        }
    }, [isSwitchOn]);

    const handleSwitchChange = () => setIsSwitchOn((prev) => !prev);


    // управление отображением колличества фильмов
    useEffect(() => {
        setScreenSettings(getScreenSettings(width));
    }, [width]);

    useEffect(() => {
        if (markedMovies.length <= screenSettings.total) {
            setVisibleMoviesNumber(markedMovies.length);
            setIsMoreVisible(false);
        } else {
            setVisibleMoviesNumber(screenSettings.total)
            setIsMoreVisible(true);
        }
    }, [markedMovies, screenSettings]);

    useEffect(() => {
        setShowedMovies(markedMovies.slice(0, visibleMoviesNumber));
    }, [visibleMoviesNumber, markedMovies]);

    const handleMoreClick = () => {
        let newValue = visibleMoviesNumber + screenSettings.add;
        let length = moviesList.length;

        if (newValue >= length) {
            newValue = length;
            setIsMoreVisible(false);
        }
        setVisibleMoviesNumber(newValue);
    }


    return (
        <section className="movies">
            <SearchForm
                savedFilms={false}
                onSubmit={handleSearchSubmit}
                isSwitchOn={isSwitchOn}
                onSwitchChange={handleSwitchChange}
            />
            {isMoviesLoading &&
                <div className="movies__loader"><Loader /></div>
            }
            <MoviesCardList
                savedFilms={false}
                moviesList={showedMovies}
                errorMessage={errorMessage}
                onClick={handleLikeClick}
            />
            {isMoreVisible &&
                <ButtonMore onClick={handleMoreClick} />
            }
        </section>
    );
}