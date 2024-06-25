import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const singleQuote = createSlice({
  name: "singleQuote",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleQuote.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.SUCCESS;
    });
    builder.addCase(fetchSingleQuote.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchSingleQuote.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
export const fetchSingleQuote = createAsyncThunk(
  "fetchSingleQuote",
  async (id ) => {
    try {
      const response = await axios.get(`/api/quotes/${id}`);
      return response.data;
    } catch (error) {
      console.log("error while fetching the quotes : ", error);
      toast(error.response.data.message);
    }
  }
);

export default singleQuote.reducer;
