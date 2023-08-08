/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";

const useForm = (initialForm = {}) => {

    const [formState, useFormState] = useState(initialForm)

    // const { email, password } = formState

    const onChangeForm = ({ target }) => {
        const { name, value } = target;
        useFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = (initialForm) => useFormState(initialForm);

    return {
        ...formState,
        formState,
        onChangeForm,
        onResetForm
    }
}

export default useForm