import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            task : "todo message",
            completed : false
        }
    ],
    addTodo : (task) => {},
    updateTodo : (id, task) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider