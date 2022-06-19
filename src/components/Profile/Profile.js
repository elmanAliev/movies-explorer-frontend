import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';
import { useValidation } from '../../hooks/useValidation';
import { InputProfile } from '../InputProfile/InputProfile';
import api from '../../utils/MainApi';


export const Profile = ({ onLogout }) => {

    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm } = useValidation();
    const [serverError, setServerError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);


    useEffect(() => {
        resetForm({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]);

    useEffect(() => {
        const condition1 =
            (values.name === currentUser.name) &&
            (values.email === currentUser.email);

        const condition2 = (
            (values.name !== currentUser.name) ||
            (values.email !== currentUser.email)
        ) && !isValid;

        setIsSubmitDisabled(condition1 || condition2);
    }, [values, currentUser, isValid]);


    // редактирование профиля
    const handleSubmit = () => {
        const token = localStorage.getItem('token');

        setServerError('Сохранение...')
        api.patchUserInfo(values, token)
            .then(res => {
                setServerError('Данные сохранены')
                currentUser.name = res.data.name;
                currentUser.email = res.data.email;
                resetForm({ name: currentUser.name, email: currentUser.email });
                setTimeout(() => setServerError(''), 3000);
            })
            .catch(err => {
                setServerError('Невозможно сохранить данные')
            })
    }

    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form className='profile__form'>
                <InputProfile
                    type="text"
                    name="name"
                    pattern="^[а-яА-Яa-zA-Z]([а-яА-Яa-zA-Z]| |-){1,28}[а-яА-Яa-zA-Z]$"
                    value={values.name || ''}
                    onChange={handleChange}
                    errorText={errors.name}
                    required
                >
                    Имя
                </InputProfile>
                <div className='profile__line'></div>
                <InputProfile
                    type="email"
                    name="email"
                    pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
                    value={values.email || ''}
                    onChange={handleChange}
                    errorText={errors.email}
                    required
                >
                    E-mail
                </InputProfile>
            </form>
            <div className='profile__buttons'>
                {serverError && <span className='profile__error'>{serverError}</span>}
                <button
                    className='profile__edit transition opacity'
                    disabled={isSubmitDisabled}
                    type='button'
                    onClick={handleSubmit}
                >
                    Редактировать
                </button>
                <button
                    className='profile__logout transition opacity'
                    type='button'
                    onClick={onLogout}
                >
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    );
}