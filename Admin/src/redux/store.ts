import { configureStore } from "@reduxjs/toolkit";
import QuotesReducer from "../redux/slices/QuotesSlice";
import CreateQuoteReducer from "./slices/CreateQuoteSlice";
import singleQuoteReducer from "./slices/SingleQuoteSlice";
import searchedItemReducer from "./slices/AuthorCategorySlice";
const store = configureStore({
  reducer: {
    quotes: QuotesReducer,
    newQuote: CreateQuoteReducer,
    singleQuote: singleQuoteReducer,
    searchedItem: searchedItemReducer,
  },
});

export default store;
