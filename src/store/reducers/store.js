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
import favoritesReducer from "./favoritesSlice";
import userDataReducer from "./userSlice";
import fetchFavoritesReducer from "./fetchFavSlice";
import historyReducer from "./historySllice";
import { checkLoginMiddlware } from "../middleware/checkLoginMiddlware";

const rootReducer = combineReducers({
  [teamsApi.reducerPath]: teamsApi.reducer,
  favorites: favoritesReducer,
  user: userDataReducer,
  fetchFavorites: fetchFavoritesReducer,
  historySearch: historyReducer,
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
