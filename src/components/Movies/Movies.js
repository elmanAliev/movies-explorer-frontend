import { ButtonMore } from '../ButtonMore/ButtonMore';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';
import './Movies.css';
import { readMovies, filterMovies } from '../../utils/MoviesSearch'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { getScreenSettings } from '../../utils/ScreenSettings'

export const Movies = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { width } = useWindowDimensions();
    const [screenSettings, setScreenSettings] = useState({ total: 16, add: 4 });
    const [visibleMoviesNumber, setVisibleMoviesNumber] = useState(0);
    const [isMoreVisible, setIsMoreVisible] = useState(false);
    const [showedMovies, setShowedMovies] = useState([]);


    useEffect(() => {
        const switchStorage = JSON.parse(localStorage.getItem('isSwitchOn'));
        const moviesStorage = JSON.parse(localStorage.getItem('filteredMovies'));
        if (switchStorage) setIsSwitchOn(switchStorage);
        if (moviesStorage) setMoviesList(moviesStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('isSwitchOn', JSON.stringify(isSwitchOn));

        if (isSwitchOn) {
            const filterMovies = moviesList.filter((movie) => movie.duration > 90);

            setShowedMovies(filterMovies)
        } else {
            setShowedMovies(moviesList)
        }

    }, [isSwitchOn]);

    useEffect(() => {
        setScreenSettings(getScreenSettings(width));
    }, [width]);

    useEffect(() => {
        if (moviesList.length <= screenSettings.total) {
            setVisibleMoviesNumber(moviesList.length);
            setIsMoreVisible(false);
        } else {
            setVisibleMoviesNumber(screenSettings.total)
            setIsMoreVisible(true);
        }
    }, [moviesList, screenSettings]);

    useEffect(() => {
        setShowedMovies(moviesList.slice(0, visibleMoviesNumber));
    }, [visibleMoviesNumber, moviesList]);


    const searchMain = async (searchString) => {

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

    const handleSearchSubmit = (searchString) => searchMain(searchString);

    const handleSwitchChange = () => setIsSwitchOn((prev) => !prev);

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
            />
            {isMoreVisible &&
                <ButtonMore onClick={handleMoreClick} />
            }
        </section>
    );
}