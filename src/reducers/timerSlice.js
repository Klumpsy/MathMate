import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOn: false,
    game: "none"
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
      setStart: (state) => { 
        state.isOn = true;
      },
      setStop: (state) => { 
        state.isOn = false; 
      },
      setGameStatusActive: (state) => { 
        state.game = "playing"
      },
      setGameStatusDone: (state) => { 
        state.game = "done"
      },
      setGameStatusNone: (state) => { 
        state.game = "none"
      }
  },
});

export const { setStart, setStop, setGameStatusActive, setGameStatusNone, setGameStatusDone} = timerSlice.actions;

export const timerStatus = state => state.timer.isOn; 
export const gameStatus = state => state.timer.game; 

export default timerSlice.reducer;
