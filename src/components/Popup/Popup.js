import './Popup.css';
import { NavLink } from 'react-router-dom';

export const Popup = ({handleClose}) => {

    return (
        <div className='popup'>
            <div onClick={handleClose} className='popup__overlay'></div>
            <nav className='popup__list'>
                <button onClick={handleClose} className='popup__close transition opacity'></button>
                <div className='popup__films'>
                    <NavLink to='/' className='popup__link transition opacity'>Главная</NavLink>
                    <NavLink to='/movies' className='popup__link transition opacity'>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className='popup__link transition opacity'>Сохранённые фильмы</NavLink>
                </div>
                <div className='popup__account'>
                    <NavLink to='/profile' className='popup__link transition opacity'>Аккаунт</NavLink>
                    <NavLink to='/profile' className='popup__list-button transition opacity'></NavLink>
                </div>
            </nav>
        </div>
    );
}