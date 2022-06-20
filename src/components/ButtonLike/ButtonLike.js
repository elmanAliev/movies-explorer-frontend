import './ButtonLike.css';

export const ButtonLike = ({ onClick, movieId, isFavorite }) => {

    const buttonClassName = isFavorite ? 'button-like button-like_active transition opacity' :'button-like transition opacity'

    const handleClick = () => {
        onClick(movieId)
    }

    return (
        <button onClick={handleClick} className={buttonClassName} type='button'></button>
    );
}