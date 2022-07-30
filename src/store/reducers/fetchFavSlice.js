import {createSlice} from "@reduxjs/toolkit";

const fetchFavSlice = createSlice({
  name: "fetchFavorites",
  initialState: {
    dataFavorites: [],
  },
  reducers: {
    addDataFavorite(state, action) {
      const checkID = action.payload.map((obj) => obj.team.id);
      const arrID = state.dataFavorites.map((obj) => obj.team.id);
      if (!arrID.includes(checkID[0])) {
        state.dataFavorites = state.dataFavorites.concat(action.payload);
      }
    },
  },
});

export const { addDataFavorite } = fetchFavSlice.actions;

export default fetchFavSlice.reducer;
