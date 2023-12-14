import { useState, useEffect, useCallback } from 'react'

function useFormValidation(formInput) {
    const [isFormValid, setIsFormValid] = useState(false);
    const [error, setError] = useState(null);
    console.log(formInput);

    const triggerValidation = useCallback(() => {
        for (const name in formInput) {
            const value = formInput[name];
            if (value === "") {
                setIsFormValid(false);
                setError(`${name} is required!`)
            }
        }
    }, [formInput])

    const resetFormValidation = () => {
        setIsFormValid(true);
    }

    useEffect(() => {

    }, [formInput])

    return { isFormValid, error, resetFormValidation, triggerValidation }
}

export default useFormValidation