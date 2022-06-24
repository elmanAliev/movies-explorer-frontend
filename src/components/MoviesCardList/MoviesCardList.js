import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';


export const MoviesCardList = ({ savedFilms, moviesList, errorMessage, onClick }) => {


    const getMovies = (moviesList) => {
        if (moviesList.length > 0) {
            return moviesList.map((movie) => {
                return <MoviesCard
                    movie={movie}
                    key={movie.movieId}
                >
                    {savedFilms
                    ? <ButtonDelete onClick={onClick} movie={movie} />
                    : <ButtonLike movie={movie} movieId={movie.movieId} onClick={onClick}/>
                }
                </MoviesCard>
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