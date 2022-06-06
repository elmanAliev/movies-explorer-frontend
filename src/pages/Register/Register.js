import './Register.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';


export const Register = () => {

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
                title='Добро пожаловать!'
            >
                <Input
                    type="text"
                    id="name" name="name"
                    maxLength="30" minLength="2"
                    placeholder="Имя" required
                >
                    Имя
                </Input>
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
                name={'Зарегистрироваться'}
                linkName={'/signin'}
                linkText={'Войти'}
                text='Уже зарегистрированы?'
                onSubmit={handleSubmit}
            />
        </div>
    );
}
