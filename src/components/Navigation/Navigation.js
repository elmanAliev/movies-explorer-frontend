import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Popup } from '../../components/Popup/Popup';

export const Navigation = () => {

    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const handleOpen = () => setPopupIsOpen(true);
    
    const handleClose = () => setPopupIsOpen(false);

    return (
        <div className='navigation'>
            <nav className='navigation__list'>
                <div className='navigation__films'>
                    <NavLink to='/movies' className='navigation__list-item transition opacity'>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className='navigation__list-item transition opacity'>Сохранённые фильмы</NavLink>
                </div>
                <div className='navigation__account'>
                    <NavLink to='/profile' className='navigation__list-item transition opacity'>Аккаунт</NavLink>
                    <NavLink to='/profile' className='navigation__list-button transition opacity'></NavLink>
                </div>
            </nav>
            <button onClick={handleOpen} className='navigation__menu transition opacity'></button>
            {popupIsOpen && <Popup handleClose={handleClose} />}
        </div>
    );
}
