import './Header.css';
import { Logo } from '../../components/Logo/Logo';

export const Header = ({children}) => {

    return (
        <header className='header'>
            <Logo />
            {children}
        </header>
    );
}