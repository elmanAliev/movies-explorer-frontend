import './Login.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';


export const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
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
                    type="text"
                    name="email"
                    maxLength="30" minLength="2"
                    placeholder="E-mail" required
                >
                    E-mail
                </Input>
                <Input
                    type="text"
                    name="password"
                    maxLength="30" minLength="6"
                    placeholder="Пароль" required
                >
                    Пароль
                </Input>
            </Form>
            <Submit
                name={'Войти'}
                linkName={'/signin'}
                linkText={'Регистрация'}
                text='Ещё не зарегистрированы?'
                onSubmit={handleSubmit}
            />
        </div>
    );
}