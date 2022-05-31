import './AboutMe.css';
import photo from '../../../images/photo.jpg';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Portfolio } from '../Portfolio/Portfolio';

export const AboutMe = () => {

    return (
        <section className='about-me'>
            <SectionHeader>Студент</SectionHeader>
            <div className='about-me__block'>
                <div className='about-me__info'>
                    <h3 className='about-me__title'>Эльман</h3>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 31 год</p>
                    <p className='about-me__description'>Я родился в Дербенте. Закончил приборостроительный факультет ЮУрГУ в Челябинске. Я люблю играть в футбол, а ещё увлекаюсь шахматами. Недавно начал кодить.</p>
                    <ul className='about-me__list'>
                        <li><a href="Facebook.com" className='about-me__list-item transition opacity'>Facebook</a></li>
                        <li><a href="Github.com" className='about-me__list-item transition opacity'>Github</a></li>
                    </ul>
                </div>
                <img className='about-me__photo' src={photo} alt="Фото студента" />
            </div>
            <Portfolio />
        </section>
    );
}