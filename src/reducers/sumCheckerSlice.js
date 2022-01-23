import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    score: 0
};

const sumCheckerSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
      setRightAnswer: (state) => { 
          state.score = state.score + 1
      },
      setWrongAnswer: (state) => { 
          state.score = state.score - 1
      },
      setResetScore: (state) => { 
          state.score = 0; 
      }
  },
});

export const {setRightAnswer, setWrongAnswer, setResetScore} = sumCheckerSlice.actions;

export const checkScore = state => state.score; 

export default sumCheckerSlice.reducer;

