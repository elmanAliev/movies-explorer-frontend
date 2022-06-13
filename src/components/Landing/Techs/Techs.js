import './Techs.css';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Techs = () => {

    return (
        <section id='techs' className='techs'>
            <div className='techs__wrapper'>
                <SectionHeader>Технологии</SectionHeader>
                <div className='techs__block'>
                    <SectionTitle>7 технологий</SectionTitle>
                    <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='techs__list'>
                        <li className='techs__list-item'>HTML</li>
                        <li className='techs__list-item'>CSS</li>
                        <li className='techs__list-item'>JS</li>
                        <li className='techs__list-item'>React</li>
                        <li className='techs__list-item'>Git</li>
                        <li className='techs__list-item'>Express.js</li>
                        <li className='techs__list-item'>mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}