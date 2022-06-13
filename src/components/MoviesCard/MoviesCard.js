import './MoviesCard.css';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { useState } from 'react';

export const MoviesCard = ({ name, img, duration, savedFilms }) => {

    const [favoriteCard, setFavoriteCard] = useState(false);

    const addToFavorite = () => setFavoriteCard(!favoriteCard);

    return (
        <div className='card'>
            <div className='card__img-conteiner'>
                <img className='card__img' src={img} alt={name} />
            </div>
            <div className='card__wrapper'>
                <p className='card__name'>{name}</p>
                {savedFilms
                    ? <ButtonDelete />
                    : <ButtonLike handleClick={addToFavorite} isFavorite={favoriteCard}/>
                }
            </div>
            <div className='card__duration'>{duration}</div>
        </div>
    );
}