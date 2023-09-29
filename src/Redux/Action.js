import { ADD_TODO_LIST, REMOVE_TODO_LIST,EMPTY_DATA } from "./Constant";


export const addTodoList = (message) => {
    console.warn("action addtodolist called", message)
    return {
        type: ADD_TODO_LIST,
        message,
        id:Math.random(),
    }
}

export const removeTodoList = (id) => {
    console.warn("action removetodolist called", id)
    return {
        type: REMOVE_TODO_LIST,
        id,
    }
}
export const emptyData = (data) => {
    console.warn("action EMPTY TODO LIST called",data)
    return {
        type: EMPTY_DATA,
        data,
    }
}