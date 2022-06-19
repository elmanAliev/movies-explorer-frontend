import './InputProfile.css';

export const InputProfile = ({ isError, errorText, children, ...rest }) => {

    return (
        <div className='input-profile'>
            <label className='input-profile__label'>
                {children}
            </label>

            <input
                className='input-profile__input'
                {...rest}
            />

            <span
                className={isError ? 'input-profile__error input-profile__error_active' : 'input-profile__error'}
            >
                {errorText}
            </span>
        </div>
    );
}