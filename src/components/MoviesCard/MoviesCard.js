import './MoviesCard.css';

export const MoviesCard = ({ name, img, duration, children }) => {

    return (
        <div className='card'>
            <div className='card__img-conteiner'>
                <img className='card__img' src={img} alt={name} />
            </div>
            <div className='card__wrapper'>
                <p className='card__name'>{name}</p>
                {children}
            </div>
            <div className='card__duration'>{duration}</div>
        </div>
    );
}