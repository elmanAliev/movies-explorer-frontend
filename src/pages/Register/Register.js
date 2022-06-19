import './Register.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';
import { useValidation } from '../../hooks/useValidation';


export const Register = ({ onSubmit, error }) => {

    const { values, handleChange, errors, isValid } = useValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values.name, values.email, values.password)
    };

    return (
        <div className="register">
            <header className="register__header">
                <Logo />
            </header>
            <Form
                name='register'
                title='Добро пожаловать!'
            >
                <Input
                    type="text"
                    name="name"
                    pattern="^[а-яА-Яa-zA-Z]([а-яА-Яa-zA-Z]| |-){1,28}[а-яА-Яa-zA-Z]$"
                    value={values.name || ''}
                    onChange={handleChange}
                    errorText={errors.name}
                    required
                >
                    Имя
                </Input>
                <Input
                    type="email"
                    name="email"
                    pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
                    value={values.email || ''}
                    onChange={handleChange}
                    errorText={errors.email}
                    required
                >
                    E-mail
                </Input>
                <Input
                    type="password"
                    name="password"
                    pattern="^[а-яА-Яa-zA-Z]([а-яА-Яa-zA-Z]| |-){1,28}[а-яА-Яa-zA-Z]$"
                    value={values.password || ''}
                    onChange={handleChange}
                    errorText={errors.password}
                    required
                >
                    Пароль
                </Input>
            </Form>
            <Submit
                name={'Зарегистрироваться'}
                linkName={'/signin'}
                linkText={'Войти'}
                text='Уже зарегистрированы?'
                onSubmit={handleSubmit}
                isDisabled={!isValid}
                error={error}
            />
        </div>
    );
}
