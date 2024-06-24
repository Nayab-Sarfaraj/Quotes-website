import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.SUCCESS;
    });
    builder.addCase(fetchQuotes.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
export const fetchQuotes = createAsyncThunk("fetchQuotes", async () => {
  try {
    const response = await axios.get("/api/admin/quotes");
    return response.data;
  } catch (error) {
    console.log("error while fetching the quotes : ", error);
  }
});

export default quoteSlice.reducer;
