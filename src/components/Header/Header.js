import './Header.css';
import { Logo } from '../../components/Logo/Logo';
import { NavTab } from '../Landing/NavTab/NavTab';

export const Header = () => {

    return (
        <header className='header'>
            <Logo />
            <NavTab />
        </header>
    );
}