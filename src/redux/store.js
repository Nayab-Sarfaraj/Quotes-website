import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../redux/Slices/QuotesSlice";
import favReducer from "./Slices/FavSlice";
const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    favourites: favReducer,
  },
});

export default store;
