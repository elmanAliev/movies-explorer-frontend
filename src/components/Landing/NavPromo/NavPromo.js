import './NavPromo.css';


export const NavPromo = () => {

    return (
        <nav className="nav-promo">
            <a href='#about-project' className="nav-promo__button transition opacity">О проекте</a>
            <a href='#techs' className="nav-promo__button transition opacity">Технологии</a>
            <a href='#about-me' className="nav-promo__button transition opacity">Студент</a>
        </nav>
    );
}