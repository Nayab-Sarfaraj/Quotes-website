import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const authorCategorySlice = createSlice({
  name: "authorCategory",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchItem.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.SUCCESS;
    });
    builder.addCase(fetchSearchItem.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchSearchItem.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
export const fetchSearchItem = createAsyncThunk(
  "fetchSearchItem",
  async ({ author, category }) => {
    try {
      if (author) {

        const response = await axios.get(`/api/admin/quotes?author=${author}`);
        return response.data;
      }
      if (category) {
        const response = await axios.get(
          `/api/admin/quotes?category=${category}`
        );
        return response.data;
      }
    } catch (error) {
      console.log("error while fetching the quotes : ", error);
      toast(error.response.data.message);
    }
  }
);

export default authorCategorySlice.reducer;
