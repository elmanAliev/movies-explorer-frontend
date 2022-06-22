import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useState, useEffect } from 'react';

export const SearchForm = ({ savedFilms, onSubmit, isSwitchOn, onSwitchChange }) => {

    const [error, setError] = useState(false)
    const [searchString, setSearchString] = useState('')
    const errorClassName = error ? 'search__error search__error_active' : 'search__error';

    useEffect(() => {
        if (savedFilms) return
        const stringStorage = JSON.parse(localStorage.getItem('searchString'));
        if (stringStorage) {
            setSearchString(stringStorage);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchString.length < 1) {
            setError(true)
        } else {
            setError(false);
            onSubmit(searchString);
        }
        
    }


    return (
        <div className='search'>
            <form onSubmit={handleSubmit} name='search-form' className='search__form'>
                <div className='search__input-box'>
                    <input
                        type='text'
                        name='search-input'
                        className='search__input'
                        placeholder='Фильм'
                        value={searchString}
                        onChange={e => setSearchString(e.target.value)}
                    />
                    <button
                        className='search__button transition opacity'
                    />
                    <span
                        className={errorClassName}
                    >
                        Нужно ввести ключевое слово
                    </span>
                    
                </div>

                <div className='search__checkbox'>
                    <p className='search__checkbox-name'>
                        Короткометражки
                    </p>
                    <FilterCheckbox
                        isChecked={isSwitchOn || false}
                        onChange={onSwitchChange}
                    />
                </div>

            </form>
            <div className='search__line' />
        </div>
    );
}