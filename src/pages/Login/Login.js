import './Login.css';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Submit } from '../../components/Submit/Submit';
import { useInput } from '../../hooks/useInput';


export const Login = ({onSubmit, error}) => {

    const email = useInput('', {isEmail: true})
    const password = useInput('', {isEmpty: true});

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(email.value, password.value);
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
                name={'Войти'}
                linkName={'/signup'}
                linkText={'Регистрация'}
                text='Ещё не зарегистрированы?'
                onSubmit={handleSubmit}
                isDisabled={!email.inputValid || !password.inputValid}
                error={error}
            />
        </div>
    );
}