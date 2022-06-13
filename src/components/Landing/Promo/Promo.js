import './Promo.css';
import { NavPromo } from '../NavPromo/NavPromo';

export const Promo = () => {

    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <NavPromo />
            </div>
        </section>
    );
}