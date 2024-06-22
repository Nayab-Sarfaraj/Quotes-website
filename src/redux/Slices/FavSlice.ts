import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addFav(state, action) {
      const isExist = state.find((item) => item._id === action.payload._id);
      if (isExist) return;
      state.push(action.payload);
    },
  },
});
export const { addFav } = favSlice.actions;
export default favSlice.reducer;
