import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    favoritesTeams: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.favoritesTeams.push(action.payload);
    },
    removeFavorites(state, action) {
      state.favoritesTeams = state.favoritesTeams.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
