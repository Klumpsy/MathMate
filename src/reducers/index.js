import sumCheckReducer from "./sumChecker"; 
import isLoggedReducer from "./isLogged"; 
import { combineReducers } from "redux";

const allReducers = combineReducers({
    sumCheckReducer, 
    isLoggedReducer
})

export default allReducers; 