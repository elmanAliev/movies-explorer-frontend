import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';


export const MoviesCardList = ({ savedFilms, moviesList, errorMessage }) => {

    const getMovies = (moviesList) => {
        if (moviesList.length > 0) {
            console.log(moviesList)
            return moviesList.map((movie) => {
                return <MoviesCard
                    movie={movie}
                    key={movie.movieId}
                    savedFilms={savedFilms}
                />
            })
        }

        return (
            <p className="movies-card-list__err">{errorMessage}</p>
        )
    }

    return (
        <section className="movies-card-list">
            {getMovies(moviesList)}
        </section>
    );
}