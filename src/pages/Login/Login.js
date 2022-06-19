import './Login.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';
import { useValidation } from '../../hooks/useValidation';


export const Login = ({onSubmit, error}) => {

    const { values, handleChange, errors, isValid } = useValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values.email, values.password);
    };

    return (
        <div className="register">
            <header className="register__header">
                <Logo />
            </header>
            <Form
                name='register'
                title='Рады видеть!'
            >
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
                name={'Войти'}
                linkName={'/signup'}
                linkText={'Регистрация'}
                text='Ещё не зарегистрированы?'
                onSubmit={handleSubmit}
                isDisabled={!isValid}
                error={error}
            />
        </div>
    );
}