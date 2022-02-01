import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gameMode: "ten",
    gameType: "plus"
};

const gameModeSlice = createSlice({
  name: "gameMode",
  initialState,
  reducers: {
      setGameMode: (state, action) => { 
        state.gameMode = action.payload.gameMode
        state.gameType = action.payload.gameType
      }
  },
});

export const {setGameMode} = gameModeSlice.actions;

export const currentGameMode = state => state.gameMode.gameMode
export const currentGameType = state => state.gameMode.gameType

export default gameModeSlice.reducer;
