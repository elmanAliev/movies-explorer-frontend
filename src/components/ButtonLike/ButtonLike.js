import './ButtonLike.css';

export const ButtonLike = ({ handleClick, isFavorite }) => {

    const buttonClassName = isFavorite ? 'button-like button-like_active transition opacity' :'button-like transition opacity'

    return (
        <button onClick={handleClick} className={buttonClassName} type='button'></button>
    );
}