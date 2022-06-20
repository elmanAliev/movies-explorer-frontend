import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { useState } from 'react';


export const MoviesCardList = ({ savedFilms, moviesList, errorMessage, onClick, isFavorite }) => {


    const getMovies = (moviesList) => {
        if (moviesList.length > 0) {
            return moviesList.map((movie) => {
                return <MoviesCard
                    movie={movie}
                    key={movie.movieId}
                >
                    {savedFilms
                    ? <ButtonDelete />
                    : <ButtonLike isFavorite={isFavorite} movieId={movie.movieId} onClick={onClick}/>
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