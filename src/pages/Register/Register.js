import './Register.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';
import { useInput } from '../../hooks/useInput';


export const Register = () => {

    const name = useInput('', {isEmpty: true});
    const email = useInput('', {isEmail: true})
    const password = useInput('', {isEmpty: true});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name: name.value, email: email.value, password: password.value})
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
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                    isDirty={name.isDirty}
                    errorText={name.errorText}
                    isError={name.isError}
                >
                    Имя
                </Input>
                <Input
                    type="text"
                    name="email"
                    maxLength="30" minLength="2"
                    placeholder="E-mail" required
                    value={email.value}
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                    isDirty={email.isDirty}
                    errorText={email.errorText}
                    isError={email.isError}
                >
                    E-mail
                </Input>
                <Input
                    type="text"
                    name="password"
                    maxLength="30" minLength="6"
                    placeholder="Пароль" required
                    value={password.value}
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    isDirty={password.isDirty}
                    errorText={password.errorText}
                    isError={password.isError}
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
                isDisabled={!name.inputValid || !email.inputValid || !password.inputValid}
            />
        </div>
    );
}
