import { useEffect, useReducer, useState } from "react";
import todoReducer from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [todosCounter, setTodoCounter] = useState(0);
    const [todosPending, setTodosPending] = useState(0);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodoCounter(todos.length);
        setTodosPending(todos.filter(todo => !todo.done).length)
    }, [todos])

    const handleNewTodo = todo => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = id => {

        dispatch({
            type: "[TODO] Remove Todo",
            payload: id
        })
    }

    const handleToggleTodo = id => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id
        })
    }

    return {
        todos,
        todosCounter,
        todosPending,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}

export default useTodos