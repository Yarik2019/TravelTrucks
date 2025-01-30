import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistFavorites = {
  key: "favorites",
  version: 1,
  storage,
  whitelist: ["favorites"],
};
import { campersReducer } from "./campers/slice";
import { favoritesReducer } from "./favorites/slice";
export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistReducer(persistFavorites, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
