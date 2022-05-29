import './NavTab.css';
import { Link } from 'react-router-dom';

export const NavTab = () => {

    return (
        <nav className="nav-tab">
            <Link
                to="/signup"
                className="nav-tab__button nav-tab__button_regist transition opacity"
            >
                Регистрация
            </Link>

            <Link
                to="/signin"
                className="nav-tab__button nav-tab__button_login transition opacity"
            >
                Войти
            </Link>
        </nav>
    );
}