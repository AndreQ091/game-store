import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types/game";

interface CartState {
  items: Game[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
