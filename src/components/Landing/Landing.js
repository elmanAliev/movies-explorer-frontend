import './Landing.css';
import { Header } from '../Header/Header';
import { NavTab } from '../Landing/NavTab/NavTab';
import { Navigation } from '../Navigation/Navigation';
import { Promo } from './Promo/Promo';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from 'react';

export const Landing = () => {

    const currentUser = useContext(CurrentUserContext);

    return (
        <> 
            <Header>
            {currentUser?.isLoggedIn ? <Navigation /> : <NavTab /> }
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </>
    );
}
