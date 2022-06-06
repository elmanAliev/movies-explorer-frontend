import './Profile.css';

export const Profile = () => {

    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <form className='profile__form'>
                <div className='profile__fieldset'>
                    <label className='profile__label'>
                        Имя
                    </label>
                    <input
                        type="text"
                        name="name"
                        className='profile__input'
                        value='Виталий'
                    />
                </div>
                <div className='profile__line'></div>
                <div className='profile__fieldset'>
                    <label className='profile__label'>
                        E-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        className='profile__input'
                        value='pochta@yandex.ru'
                    />
                </div>
            </form>
            <div className='profile__buttons'>
                <button className='profile__edit transition opacity' type='button'>Редактировать</button>
                <button className='profile__logout transition opacity' type='button'>Выйти из аккаунта</button>
            </div>
        </section>
    );
}