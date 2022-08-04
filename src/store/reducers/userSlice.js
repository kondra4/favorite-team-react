import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    signInAction(state, action) {
      const currentUser = action.payload;

      state[currentUser].isAuth = true;
    },

    logOutAction(state, action) {
      const currentUser = action.payload;

      state[currentUser].isAuth = false;
    },

    addNewUser(state, action) {
      const newUser = action.payload.email;

      state[newUser] = action.payload;
    },

    addInHistorySearch(state, action) {
      const currentUser = action.payload.currentUser;

      state[currentUser].searchParams.push(action.payload.searchTitle);
    },

    addFavorites(state, action) {
      const currentUser = action.payload.currentUser;

      state[currentUser].favoritesTeams.push(action.payload.id);
    },

    removeFavorites(state, action) {
      const currentUser = action.payload.currentUser;

      state[currentUser].favoritesTeams = state[
        currentUser
      ].favoritesTeams.filter((id) => id !== action.payload.id);
    },
  },
});

export const {
  signInAction,
  logOutAction,
  addNewUser,
  addInHistorySearch,
  addFavorites,
  removeFavorites,
} = userSlice.actions;

export default userSlice.reducer;
