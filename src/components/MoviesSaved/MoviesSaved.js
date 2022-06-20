import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { SearchForm } from '../SearchForm/SearchForm';
import './MoviesSaved.css';

export const MoviesSaved = () => {

    return (
        <section className="movies-saved">
            <SearchForm />
            {/* <MoviesCardList
                savedFilms={true}
            /> */}
        </section>
    );
}