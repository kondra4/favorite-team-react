import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
  },
  reducers: {
    signInAction(state) {
      state.isAuth = true;
    },

    logOutAction(state) {
      state.isAuth = false;
    },
  },
});

export const { signInAction, logOutAction } = userSlice.actions;

export default userSlice.reducer;
