import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
        
        const response = await axios.get(
          `/api/quotes?page=${page}&author=${author}`
        );
        return response.data;
      } else if (category) {

        const response = await axios.get(
          `/api/quotes?page=${page}&category=${category}`
        );
        return response.data;
      } else {
        const response = await axios.get(`/api/quotes?page=${page}`);

        return response.data;
      }
    } catch (error) {
      console.log("error while fetching the quotes " + error);
    }
  }
);

export default quoteSlice.reducer;
