import './NavPromo.css';


export const NavPromo = () => {

    return (
        <nav className="nav-promo">
            <button className="nav-promo__button transition opacity">О проекте</button>
            <button className="nav-promo__button transition opacity">Технологии</button>
            <button className="nav-promo__button transition opacity">Студент</button>
        </nav>
    );
}