import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const init = () => {
    /* la primera vez va ser nulo/vacío, es por ello que se le agrega el || [] */
    /* antes de todo ese código, estaba así 
        return JSON.parse(localStorage.getItem('todos'));
    */
    /* si esto es vacío regresar un arreglo vacío || [] */
    /* el json.parse nos sirve para traerlo como un object */
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState=[]) => {
      /* El reducer ahora mismo no lo estamos utilizando, solo es una referencia a la función, solamente el useReducer lo ejecutará cuando tenga que hacerlo */
    /* const [ state, dispatch ] = useReducer(todoReducer, initialState) */
    /* solo se llamara 'dispatch' cuando tiene un reducer */
    /* si es más de un reducer en el functional component, se modifica el nombre a un 'dispatchTodoAction' = esta es la función que dispara actions, hacia ese reducer*/
    /* initialArgs = init */
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)
    const pendientes = todos.filter(todo => !todo.done).length

    const todosCount = todos.length

    useEffect(() => {
        /* si queremos guardar el objeto, hay que serializarlo en un Stringify */
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleTodoToggle = (id) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: id,
        }

        dispatch(action);
    }
    
    const handleTodoDelete = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id,
        })

    }
  return {
    todos,
    handleNewTodo,
    handleTodoDelete,
    handleTodoToggle,
    /* otra forma es colocarlo directamente aquí */
    pendientes,
    todosCount
  }
}
