import { combineReducers } from "redux";
import addData from './Reducer'

const rootReducer = combineReducers(
    {
        addData: addData

    }
)
export default rootReducer;