import './Input.css';

export const Input = ({ type, isError, isDirty, errorText, children, ...rest}) => {

    return (
        <div className='input'>
            <label className='input__label'>
                {children}
            </label>

            <input type={type}
                className='input__item'
                {...rest}
            />

            <span
                className={`${(isError && isDirty) ? 'input__error input__error_active' : 'input__error'}`}
            >
                {errorText}
            </span>
        </div>
    );
}