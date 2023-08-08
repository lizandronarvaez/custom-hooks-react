import { useState } from "react"

const useCounter = (defaultValue = 10) => {
    const [counter, setCounter] = useState(defaultValue);

    const addCounter = (value) => setCounter(current=>current + value)
    const resetCounter = () => setCounter(defaultValue)
    const subCounter = (value) => {
        counter <= 0 ?
            null
            : setCounter(current=>current - value)
    }
    return {
        counter,
        addCounter,
        subCounter,
        resetCounter
    }
}


export default useCounter