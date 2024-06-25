import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const LoginSlice = createSlice({
  name: "loginCredential",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    isAdmin: false,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      if (!action.payload) {
        state.data = [];
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
        return;
      }
      state.data = action.payload;
      state.status = STATUSES.SUCCESS;
      if (state.data?.filteredUser?.isAdmin) {
        state.isAdmin = true;
      }
    });
    builder.addCase(LoginUser.pending, (state, action) => {
      state.status = STATUSES.LOADING;
      state.data = [];
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.isAdmin = false;
      state.data = [];
    });
    builder.addCase(LogoutUser.fulfilled, (state, action) => {
      if (!action.payload) {
        state.data = [];
        state.status = STATUSES.ERROR;
        state.isAdmin = false;
        return;
      }
      state.data = action.payload;
      state.isAdmin = false;
      state.status = STATUSES.SUCCESS;
    });
    builder.addCase(LogoutUser.pending, (state, action) => {
      state.data = [];
      state.status = STATUSES.LOADING;
    });
    builder.addCase(LogoutUser.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.data = [];
      state.isAdmin = false;
    });
    builder.addCase(FetchProfile.fulfilled, (state, action) => {
      if (!action.payload) {
        state.data = [];
        state.status = STATUSES.ERROR;
        return;
      }
      state.data = action.payload;
      state.status = STATUSES.SUCCESS;
      if (state.data?.user?.isAdmin) {
        state.isAdmin = true;
      }
    });
    builder.addCase(FetchProfile.pending, (state, action) => {
      state.status = STATUSES.LOADING;
      state.data = [];
    });
    builder.addCase(FetchProfile.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.data = [];
      state.isAdmin = false;
    });
  },
});
export const LoginUser = createAsyncThunk(
  "LoginUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post("/api/v1/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log("error while logging the user : ", error);
      toast(error.response.data.message);
    }
  }
);
export const LogoutUser = createAsyncThunk("LogoutUser", async () => {
  try {
    const response = await axios.get("/api/v1/logout");
    return response.data;
  } catch (error) {
    console.log("errro while logging the user " + error);
  }
});

export const FetchProfile = createAsyncThunk("FetchProfile", async () => {
  try {
    const response = await axios.get("/api/v1/me");
    console.log("from the profile fetch " + response.data);
    return response.data;
  } catch (error) {
    console.log("error while logging the user : ", error);
    toast(error.response.data.message);
  }
});

export default LoginSlice.reducer;
