import './Form.css';

export const Form = ({ name, title, children }) => {

    return (
        <form className="form" name={name}>
            <h2 className="form__title">
                {title}
            </h2>
            {children}
        </form>
    );
}