import './MoviesCard.css';


export const MoviesCard = ({ movie, children }) => {

    const handleClick = () => window.open(movie.trailerLink, '_blank');

    const getMovieDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const hoursStr = hours > 0 ? `${hours}ч` : '';
        const minutes = duration - hours * 60;
        const minutesStr = minutes > 0 ? `${minutes}м` : '';
        return hoursStr + minutesStr;
      };

    return (
        <div className='card'>
            <div className='card__img-conteiner'>
                <img className='card__img transition opacity' onClick={handleClick} src={movie.image} alt={movie.nameRU} />
            </div>
            <div className='card__wrapper'>
                <p className='card__name'>{movie.nameRU}</p>
                {children}
            </div>
            <div className='card__duration'>{getMovieDuration(movie.duration)}</div>
        </div>
    );
}