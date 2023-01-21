import React, { useEffect, useState } from 'react'
/* solicitamos el url */ 
export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data:url,
        isLoading: true,
        hasError: null
    })


    const getFetch = async() =>{ 

        /* acá vamos a volver a cargar el url, el estado isLoading de mi componente o de mi hook, más abajo. */
        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url)
        const data = await resp.json();

        /* acá es donde se restablece */
        /* para volver a llamarlo si se hace una interación */
        setState({
            data,
            isLoading: false,
            hasError: null
        });
        console.log(data);
    }

    /* disparamos un useEffect para que se vuelva a disparar si el url cambia. */
    /* internamente vamos a llamar al getFetch para obtener los datos de la url */
    /* no podemos colocarle un async a nuestro useEffect ya que estaría regresando una promesa, y eso no funciona, ya que el useEffect solo espera una función */
    useEffect(() => {
      getFetch();
    }, [url])
    
  return {
    data:       state.data, 
    isLoading:  state.isLoading,
    hasError:   state.hasError,
  };
}
