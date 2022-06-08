import './AboutProject.css';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export const AboutProject = () => {

    return (
        <section id="about-project" className='about-project'>
            <SectionHeader>O проекте</SectionHeader>
            <div className='about-project__wrapper'>
                <div className='about-project__block'>
                    <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
                    <p className='about-project__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__block'>
                    <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__chart'>
                <div className='about-project__chart-item about-project__graph about-project__graph_back'>1 неделя</div>
                <div className='about-project__chart-item about-project__graph about-project__graph_front'>4 недели</div>
                <div className='about-project__chart-item about-project__description'>Back-end</div>
                <div className='about-project__chart-item about-project__description'>Front-end</div>
            </div>
        </section>
    );
}