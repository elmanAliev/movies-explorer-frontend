import './Portfolio.css';

export const Portfolio = () => {

    return (
        <div className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="http://v.ru">
                        <p className='portfolio__link-name transition opacity'>Статичный сайт</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="http://v.ru">
                        <p className='portfolio__link-name transition opacity'>Адаптивный сайт</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="http://v.ru">
                        <p className='portfolio__link-name transition opacity'>Одностраничное приложение</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
            </ul>
        </div>
    );
}