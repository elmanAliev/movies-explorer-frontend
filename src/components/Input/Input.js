import './Input.css';

export const Input = ({ errorText, children, ...rest }) => {

    return (
        <div className='input'>
            <label className='input__label'>
                {children}
            </label>

            <input
                className='input__item'
                {...rest}
            />

            <span
                className={errorText ? 'input__error input__error_active' : 'input__error'}
            >
                {errorText}
            </span>
        </div>
    );
}