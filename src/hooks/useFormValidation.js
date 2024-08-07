import { useState, useCallback } from 'react'

function useFormValidation(formInput) {
    const [error, setError] = useState([]);
    const triggerValidation = useCallback(() => {
        for (const name in formInput) {
            const value = formInput[name];
            if (value === "") {
                setError((prev) => [...prev, { field: name, message: `${name} is required!` }])
            }
        }
    }, [formInput])

    const resetFormValidation = () => {
        setError([])
    }

    return { error, resetFormValidation, triggerValidation }
}

export default useFormValidation