import './ButtonLike.css';
import {LIKE_BUTTON_CLASSNAME, LIKE_BUTTON_CLASSNAME_ACTIVE} from '../../utils/constants'
import { useState, useEffect } from 'react';

export const ButtonLike = ({ onClick, movie, movieId, isFavorite }) => {

    const [buttonClassName, setButtonClassName] = useState('');

    useEffect(() => {
        (movie.savedId === 0) ? setButtonClassName(LIKE_BUTTON_CLASSNAME_ACTIVE) : setButtonClassName(LIKE_BUTTON_CLASSNAME);
    }, [movie.savedId]);

    // const buttonClassName = isFavorite ? 'button-like button-like_active transition opacity' :'button-like transition opacity'
    // const buttonClassName = (movie.savedId === 0) ? LIKE_BUTTON_CLASSNAME_ACTIVE : LIKE_BUTTON_CLASSNAME;

    const handleClick = () => {
        onClick(movieId)
    }

    return (
        <button onClick={handleClick} className={buttonClassName} type='button'></button>
    );
}