import './MoviesSaved.css';
import { useState, useEffect } from 'react';
import api from '../../utils/MainApi'
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';


export const MoviesSaved = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [showedMovies, setShowedMovies] = useState([]);

    // достаем из LocalStorage данные
    useEffect(() => {
        const switchStorage = JSON.parse(localStorage.getItem('isSwitchOn'));
        if (switchStorage) setIsSwitchOn(switchStorage);
    }, []);


    // получаем сохраненные фильмы
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.getMovies(token)
                .then((res) => setMoviesList(res.data))
                .catch((err) =>console.log(`Не удалось загрузить сохраненные фильмы: ${err}`))
        }
    }, []);


    // управление короткометражками
    useEffect(() => {
        localStorage.setItem('isSwitchOn', JSON.stringify(isSwitchOn));

        if (isSwitchOn) {
            const filteredMovies = moviesList.filter((movie) => movie.duration < 40);
            setShowedMovies([...filteredMovies])
        } else {
            setShowedMovies([...moviesList])
        }
    }, [isSwitchOn, moviesList]);

    const handleSwitchChange = () => setIsSwitchOn((prev) => !prev);


    // удаление фильма
    const handleDeleteClick = (movieId) => {

        const token = localStorage.getItem('token');

        api.deleteMovie(movieId, token)
                .then((res) => setShowedMovies(state => state.filter(c => c._id !== movieId)))
                .catch((err) => console.log(err))

    }


    // поиск фильмов
    const handleSearchSubmit = (searchString) => {

        const string = searchString.toLowerCase();

        const foundMovies = moviesList.filter((movie) => {
            const fieldRU = movie.nameRU ? movie.nameRU.toLowerCase().includes(string) : false;
            const fieldEN = movie.nameEN ? movie.nameEN.toLowerCase().includes(string) : false;
            return (fieldRU || fieldEN)
        });

        setShowedMovies([...foundMovies])
    }


    return (
        <section className="movies-saved">
            <SearchForm
                savedFilms={true}
                onSubmit={handleSearchSubmit}
                isSwitchOn={isSwitchOn}
                onSwitchChange={handleSwitchChange}
            />
            <MoviesCardList
                savedFilms={true}
                moviesList={showedMovies}
                onClick={handleDeleteClick}
            />
        </section>
    );
}