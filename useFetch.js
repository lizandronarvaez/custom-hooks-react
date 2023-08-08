/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getProducts = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const res = await fetch(url);
        const data = await res.json()

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getProducts()
    }, [url]);

    return {
        state: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

export default useFetch