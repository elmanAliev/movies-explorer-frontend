import './MoviesCardList.css';
import { cards } from '../../utils/cardsArray'
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';

export const MoviesCardList = ({ savedFilms }) => {

    const getMovies = (movies) => {
        return movies.map((card, i) => {
            return <MoviesCard
                img={card.img}
                name={card.name}
                duration={card.duration}
                key={i}
            >
                {savedFilms
                    ? <ButtonDelete />
                    : <ButtonLike />
                } 
            </MoviesCard>
        })
    }

    return (
        <section className="movies-card-list">
            {getMovies(cards)}
        </section>
    );
}