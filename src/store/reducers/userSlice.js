import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    email: "",
    password: "",
  },
  reducers: {
    signInAction(state) {
      state.isAuth = true;
    },

    logOutAction(state) {
      state.isAuth = false;
    },

    addEmail(state, action) {
      state.email = action.payload;
    },

    addPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { signInAction, logOutAction, addEmail, addPassword } =
  userSlice.actions;

export default userSlice.reducer;
