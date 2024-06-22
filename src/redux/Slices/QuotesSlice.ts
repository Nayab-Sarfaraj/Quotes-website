import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { log } from "console";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "error",
  SUCCESS: "success",
});
const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchQuotes = createAsyncThunk(
  "fetchQuotes",
  async ({
    page = 1,
    author = "",
    category = "",
  }: {
    page: number;
    author: string;
    category: string;
  }) => {
    try {
      if (author) {
        console.log("the author is " + author);
        const response = await axios.get(
          `/api/quotes?page=${page}&author=${author}`
        );
        console.log(response.data);
        return response.data;
      } else if (category) {
        console.log("the category is " + category);

        console.log("insode ther csda");
        const response = await axios.get(
          `/api/quotes?page=${page}&category=${category}`
        );
        console.log(response.data);
        return response.data;
      } else {
        console.log("the pagee is " + page);
        const response = await axios.get(`/api/quotes?page=${page}`);

        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("error while fetching the quotes " + error);
    }
  }
);

export default quoteSlice.reducer;
