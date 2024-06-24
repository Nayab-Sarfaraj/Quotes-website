import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const createQuotesSlice = createSlice({
  name: "newQuote",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder.addCase(createQuote.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
      state.status = STATUSES.SUCCESS;
    });
    builder.addCase(createQuote.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(createQuote.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
export const createQuote = createAsyncThunk(
  "createQuote",
  async ({ author, category, quote }) => {
    try {
      const response = await axios.post("/api/quotes", {
        author,
        category,
        quote,
      });
      return response.data;
    } catch (error) {
      console.log("error while fetching the quotes : ", error);
    }
  }
);

export default createQuotesSlice.reducer;
