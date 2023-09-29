import { ADD_TODO_LIST, EMPTY_DATA, REMOVE_TODO_LIST } from "./Constant";
const initialData ={
data:[],
};
const addData = (state =initialData, action) => {
  
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        data: [
            ...state.data,
            {
                message: action.message,
                id: action.id
            },
        ],
    };
      
     
    case REMOVE_TODO_LIST:
      const todos = state.data.filter((todos) => todos.id !== action.id)
      return {
          ...state,
          data: todos,
      }

      case EMPTY_DATA:
        return  {data:[],}

    default:
      return state;
     }

}

export default addData;