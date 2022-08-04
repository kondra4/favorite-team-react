import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { teamsApi } from "./teamsApi";
import userDataReducer from "./userSlice";
import fetchFavoritesReducer from "./fetchFavSlice";
import { checkLoginMiddlware } from "../middleware/checkLoginMiddlware";

const rootReducer = combineReducers({
  [teamsApi.reducerPath]: teamsApi.reducer,
  user: userDataReducer,
  fetchFavorites: fetchFavoritesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["teams", "fetchFavorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([teamsApi.middleware, checkLoginMiddlware]),
});
export const persistor = persistStore(store);
export default store;
