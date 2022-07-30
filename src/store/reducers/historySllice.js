import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "historySearch",
  initialState: {
    searchParams: [],
  },
  reducers: {
    addInHistorySearch(state, action) {
      state.searchParams.push(action.payload);
    },
  },
});

export const { addInHistorySearch } = historySlice.actions;

export default historySlice.reducer;
