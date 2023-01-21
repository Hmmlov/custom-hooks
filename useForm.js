import { useState } from "react";

export const useForm = (initialForm = {} ) => {
    /* trabajar con objetos en mis retornos, porque es más fácil expandirlo */

    const [formState, setFormState] = useState(initialForm)
    
/* lo que requerimos de esto en el TodoAdd desestructurandolo en ese componente*/
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
        /* return { formState, onInputChange }; */
    }
/* lo que requerimos de esto en el TodoAdd desestructurandolo en ese componente*/
  
    const reset = () => {
      setFormState(initialForm)
    }
  return {
    ...formState,
    formState,
    onInputChange,
    reset
  }
}
