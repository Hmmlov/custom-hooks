import { useState } from "react"


export const useCounter = (inicialValue = 10) => {
    /* puede retornar un objeto, un boolean, lo que se requiera */

    const [counter, setCounter] = useState(inicialValue)

    const increment = (value = 1) => {
        /* current, toma el valor actual y le suma el valor que hemos puesto */
        setCounter((current) => current + value)
    }

    const decrement = (value = 1) => {
        /* validar que no sea menor a 0 es decir que no pase de 0 a -1, y es no se quiere */
        if(counter === 0) return;
        setCounter((current) => current - value)
    }

    const reset = () => {
        setCounter(inicialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}