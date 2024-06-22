import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../redux/Slices/QuotesSlice";
const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;
