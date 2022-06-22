import './MoviesSaved.css';
import { useState, useEffect } from 'react';
import api from '../../utils/MainApi'
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';


export const MoviesSaved = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    // // достаем из LocalStorage данные
    // useEffect(() => {
    //     const switchStorage = JSON.parse(localStorage.getItem('isSwitchOn'));
    //     console.log(switchStorage)
    //     if (switchStorage) setIsSwitchOn(switchStorage);
    // }, []);


    // получаем сохраненные фильмы
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.getMovies(token)
                .then((res) => {
                    setMoviesList(res.data);
                })
                .catch((err) => {
                    console.log(`Не удалось загрузить сохраненные фильмы: ${err}`);
                })
        }
    }, []);

    // управление короткометражками
    useEffect(() => {
        localStorage.setItem('isSwitchOn', JSON.stringify(isSwitchOn));

        if (isSwitchOn) {
            const filteredMovies = moviesList.filter((movie) => movie.duration < 90);
            setMoviesList(filteredMovies)
        } else {
            console.log(moviesList)
            setMoviesList(moviesList)
        }
    }, [isSwitchOn]);

    const handleSwitchChange = () => setIsSwitchOn((prev) => !prev);


    return (
        <section className="movies-saved">
            <SearchForm
                savedFilms={true}
                // onSubmit={handleSearchSubmit}
                isSwitchOn={isSwitchOn}
                onSwitchChange={handleSwitchChange}
            />
            <MoviesCardList
                savedFilms={true}
                moviesList={moviesList}
            />
        </section>
    );
}