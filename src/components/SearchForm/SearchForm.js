import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useInput } from '../../hooks/useInput';
import { useState } from 'react';

export const SearchForm = ({ onSubmit, isSwitchOn, onSwitchChange }) => {

    const [error, setError] = useState(false)
    const search = useInput('', { isEmpty: true });
    const errorClassName = (search.isError && error) ? 'search__error search__error_active' : 'search__error';

    const handleSubmit = (event) => {
        event.preventDefault();
        if(search.value.length < 1) {
            setError(true)
        } else {
            setError(false);
            onSubmit(search.value);
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
                        value={search.value}
                        onChange={e => search.onChange(e)}
                        onBlur={e => search.onBlur(e)}
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