import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export const SearchForm = () => {

    return (
        <div className="search">
            <form name='search-form' className='search__form'>
                <div className="search__input-box">
                    <input
                        type="text"
                        name="search-input"
                        className="search__input"
                        placeholder="Фильм"
                    />

                    <button className="search__button" />
                </div>

                <div className="search__checkbox">


                    

                    <p className="search__checkbox-name">
                        Короткометражки
                    </p>
                    <FilterCheckbox />
                </div>

            </form>
            <div className="search__line" />
        </div>
    );
}