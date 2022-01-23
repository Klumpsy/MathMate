import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice"; 
import scoreReducer from "../reducers/sumCheckerSlice"; 
import gameModeReducer from "../reducers/gameModeSlice"; 

export default configureStore({
    reducer: { 
        user: userReducer,
        score: scoreReducer, 
        gameMode: gameModeReducer
    }   
})