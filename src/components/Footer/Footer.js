import './Footer.css';

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__beatfilm">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__bottom">
                <div className="footer__copyright">&copy; 2022</div>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a className="footer__link opacity transition" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__list-item">
                        <a className="footer__link opacity transition" href="https://github.com/" target="blank">Github</a>
                    </li>
                    <li className="footer__list-item">
                        <a className="footer__link opacity transition" href="https://facebook.com" target="blank">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
