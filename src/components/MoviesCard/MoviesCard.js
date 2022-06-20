import './MoviesCard.css';


export const MoviesCard = ({ movie, children }) => {

    const handleClick = () => window.open(movie.trailerLink, '_blank');

    return (
        <div className='card'>
            <div className='card__img-conteiner'>
                <img className='card__img transition opacity' onClick={handleClick} src={movie.image} alt={movie.nameRU} />
            </div>
            <div className='card__wrapper'>
                <p className='card__name'>{movie.nameRU}</p>
                {children}
            </div>
            <div className='card__duration'>{movie.duration}</div>
        </div>
    );
}