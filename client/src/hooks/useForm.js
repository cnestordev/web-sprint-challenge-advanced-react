import { useState } from 'react'

export const useForm = initialObj => {
    const [values, setValues] = useState(initialObj)

    const changeValue = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return [values, changeValue]
}