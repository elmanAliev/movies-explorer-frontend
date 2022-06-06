import './Input.css';

export const Input = ({ type, isError, errorText, errorId, children, ...rest}) => {

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
                className={`input__error${isError ? 'input__error_active' : ''}`}
                id={errorId}
            >
                пример
                {/* {errorText} */}
            </span>
        </div>
    );
}