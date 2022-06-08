import { Link } from 'react-router-dom';
import './Submit.css';

export const Submit = ({ name, linkName, linkText, text, onSubmit, isDisabled }) => {

    return (
        <div className='submit'>
            <button className='submit__button transition opacity' disabled={isDisabled} onClick={onSubmit}>{name}</button>
            <div className='submit__wrapper'>
                <span className='submit__text'>{text}</span>
                <Link className='submit__link transition opacity' to={linkName}>{linkText}</Link>
            </div>
        </div>
    );
}