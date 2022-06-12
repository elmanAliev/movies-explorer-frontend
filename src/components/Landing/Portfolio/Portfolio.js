import './Portfolio.css';

export const Portfolio = () => {

    return (
        <div className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="https://github.com/elmanAliev/how-to-learn" target="blank">
                        <p className='portfolio__link-name transition opacity'>Статичный сайт</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="https://github.com/elmanAliev/russian-travel" target="blank">
                        <p className='portfolio__link-name transition opacity'>Адаптивный сайт</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href="https://github.com/elmanAliev/mesto-react" target="blank">
                        <p className='portfolio__link-name transition opacity'>Одностраничное приложение</p>
                        <div className='portfolio__arrow transition opacity'></div>
                    </a>
                </li>
            </ul>
        </div>
    );
}