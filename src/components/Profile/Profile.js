import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { InputProfile } from '../InputProfile/InputProfile';

export const Profile = () => {

    const currentUser = useContext(CurrentUserContext);

    const [nameN, setNameN] = useState('')

    const name = useInput('', { isEmpty: true });
    const email = useInput('', { isEmail: true });

    useEffect(() => {
        setNameN(currentUser.name)
        name.value = currentUser.name
        console.log(currentUser.name)
    }, [currentUser.name]);

    

    console.log(currentUser)

    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <form className='profile__form'>
                <InputProfile
                    type="text"
                    id="name" name="name"
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                    isDirty={name.isDirty}
                    errorText={name.errorText}
                    isError={name.isError}
                >
                    Имя
                </InputProfile>
                <div className='profile__line'></div>
                <InputProfile
                    type="text"
                    name="email"
                    value={email.value}
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                    isDirty={email.isDirty}
                    errorText={email.errorText}
                    isError={email.isError}
                >
                    E-mail
                </InputProfile>
            </form>
            <div className='profile__buttons'>
                <button className='profile__edit transition opacity' type='button'>Редактировать</button>
                <button className='profile__logout transition opacity' type='button'>Выйти из аккаунта</button>
            </div>
        </section>
    );
}