import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {

    const [isError, setIsError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {

                case 'isEmpty':
                    value ? setIsError(false) : setIsError(true);
                    setErrorText('Поле не должно быть пустым')
                    break;

                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setIsError(false) : setIsError(true);
                    setErrorText('Некорректный email')
                    break;

                default:
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        isError ? setInputValid(false) : setInputValid(true)
    }, [isError]);

    return {
        isError,
        inputValid,
        errorText,
    }
}