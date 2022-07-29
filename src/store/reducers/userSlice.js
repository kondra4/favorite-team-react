import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
  },
  reducers: {
    signInAction(state) {
      state.isAuth = true;
      // localStorage.setItem("Auth", JSON.stringify(true));
    },
    logOutAction(state) {
      state.isAuth = false;
      // localStorage.setItem("Auth", JSON.stringify(false));
    },
  },
});

export const { signInAction, logOutAction } = userSlice.actions;

export default userSlice.reducer;
