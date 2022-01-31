import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    summery: []
};

const gameSummerySlice = createSlice({
  name: "summery",
  initialState,
  reducers: {
    addToSummery: (state, action) => { 
        state.summery = [...state.summery, {sum: action.payload.sum, result: action.payload.result, givenAnswer: action.payload.givenAnswer}];
    },
    removeSummery: (state) => { 
        state.summery = []; 
    }
  }
});

export const {addToSummery, removeSummery} = gameSummerySlice.actions;

export const showSummery = state => state.summery.summery; 

export default gameSummerySlice.reducer;
