import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types/game";

interface GameState {
  currentGame: Game;
}

const initialState: GameState = {
  currentGame: {} as Game,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<Game>) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;
