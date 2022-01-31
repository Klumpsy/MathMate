import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice"; 
import scoreReducer from "../reducers/sumCheckerSlice"; 
import gameModeReducer from "../reducers/gameModeSlice"; 
import checkTimer from "../reducers/timerSlice"; 
import checkSummery from "../reducers/gameSummerySlice"; 

export default configureStore({
    reducer: { 
        user: userReducer,
        score: scoreReducer, 
        gameMode: gameModeReducer, 
        timer: checkTimer, 
        summery: checkSummery
    }   
})