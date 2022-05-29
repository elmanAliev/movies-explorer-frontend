import './Landing.css';
import { Header } from '../Header/Header';
import { NavTab } from '../Landing/NavTab/NavTab';
import { Promo } from './Promo/Promo';
import { AboutProject } from './AboutProject/AboutProject';
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';

export const Landing = () => {

    return (
        <> 
            <Header>
                <NavTab />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </>
    );
}
