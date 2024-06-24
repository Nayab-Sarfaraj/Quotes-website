import { configureStore } from "@reduxjs/toolkit";
import QuotesReducer from "../redux/slices/QuotesSlice";
import CreateQuoteReducer from "./slices/CreateQuoteSlice";
const store = configureStore({
  reducer: {
    quotes: QuotesReducer,
    newQuote: CreateQuoteReducer,
  },
});

export default store;
