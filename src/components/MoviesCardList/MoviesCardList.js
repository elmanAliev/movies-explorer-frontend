import './MoviesCardList.css';
import { cards } from '../../utils/cardsArray'
import { MoviesCard } from '../MoviesCard/MoviesCard';


export const MoviesCardList = ({ savedFilms }) => {

    const getMovies = (movies) => {
        return movies.map((card, i) => {
            return <MoviesCard
                img={card.img}
                name={card.name}
                duration={card.duration}
                key={i}
                savedFilms={savedFilms}
            />
        })
    }

    return (
        <section className="movies-card-list">
            {getMovies(cards)}
        </section>
    );
}