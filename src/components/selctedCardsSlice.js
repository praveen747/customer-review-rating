import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCards: [],
};

const selectCardsSlice = createSlice({
  name: "selectCards",
  initialState,
  reducers: {
    updateSelectedCards: (state, action) => {
      state.selectedCards = action.payload;
    },
    resetSelectedCards: (state) => {
      state.selectedCards = [];
    },
  },
});

export const { updateSelectedCards, resetSelectedCards } =
  selectCardsSlice.actions;

export default selectCardsSlice.reducer;
