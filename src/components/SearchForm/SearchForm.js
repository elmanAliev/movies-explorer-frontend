import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useInput } from '../../hooks/useInput';

export const SearchForm = () => {

    const search = useInput('', { isEmpty: true });
    if (search.isDirty && search.isError) {search.value = 'Нужно ввести ключевое слово'}

    return (
        <div className="search">
            <form name='search-form' className='search__form'>
                <div className="search__input-box">
                    <input
                        type="text"
                        name="search-input"
                        className="search__input"
                        placeholder="Фильм"
                        value={search.value}
                        onChange={e => search.onChange(e)}
                        onBlur={e => search.onBlur(e)}
                    />

                    <button className="search__button" />
                    {/* {(search.isDirty && search.isError) && <span>{search.errorText}</span>} */}
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