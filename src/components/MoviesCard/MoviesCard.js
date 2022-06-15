import './MoviesCard.css';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { useState } from 'react';

export const MoviesCard = ({ movie, savedFilms }) => {

    const [favoriteCard, setFavoriteCard] = useState(false);

    const addToFavorite = () => setFavoriteCard(!favoriteCard);

    const handleClick = () => window.open(movie.trailerLink, '_blank');

    return (
        <div className='card'>
            <div className='card__img-conteiner'>
                <img className='card__img transition opacity' onClick={handleClick} src={movie.image} alt={movie.nameRU} />
            </div>
            <div className='card__wrapper'>
                <p className='card__name'>{movie.nameRU}</p>
                {savedFilms
                    ? <ButtonDelete />
                    : <ButtonLike handleClick={addToFavorite} isFavorite={favoriteCard} />
                }
            </div>
            <div className='card__duration'>{movie.duration}</div>
        </div>
    );
}