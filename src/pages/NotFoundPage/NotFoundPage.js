import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='not-found'>
            <div className='not-found__wrapper'>
                <h1 className='not-found__error'>404</h1>
                <p className='not-found__text'>Страница не найдена</p>
            </div>
            <p className='not-found__link transition opacity' onClick={goBack}>Назад</p>
        </div>
    );
}
