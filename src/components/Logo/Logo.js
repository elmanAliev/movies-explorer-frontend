import './Logo.css';
import { Link } from 'react-router-dom';


export const Logo = () => {

    return (
        <Link to="/" className='logo transition opacity' />
    );
}