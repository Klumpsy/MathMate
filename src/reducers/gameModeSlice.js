import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gameMode: "ten"
};

const gameModeSlice = createSlice({
  name: "gameMode",
  initialState,
  reducers: {
      setGameModeTen: (state) => { 
        state.gameMode = "ten"
      }, 
      setGameModeHundred: (state) => { 
        state.gameMode = "hundred"
      },
      setGameModeThousand: (state) => { 
        state.gameMode = "thousand"
      } 
  },
});

export const {setGameModeTen, setGameModeHundred, setGameModeThousand} = gameModeSlice.actions;

export const currentGameMode = state => state.gameMode

export default gameModeSlice.reducer;
