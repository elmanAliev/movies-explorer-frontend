import './InputProfile.css';

export const InputProfile = ({ type, isError, isDirty, errorText, children, ...rest }) => {

    return (
        <div className='input-profile'>
            <label className='input-profile__label'>
                {children}
            </label>

            <input type={type}
                className='input-profile__input'
                {...rest}
            />

            <span
                className={`${(isError && isDirty) ? 'input-profile__error input-profile__error_active' : 'input-profile__error'}`}
            >
                {errorText}
            </span>
        </div>
    );
}