import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bannersServices from "./bannersServices";
import axios from "axios";

const initialState = {
  banners: [],
  error: null,
  loading: false,
  success: false,
};

export const getBanners = createAsyncThunk("banners", async (_, thunkAPI) => {
  try {
    return await bannersServices.getBanners();
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.banners = action.payload;
      })
      .addCase(getBanners.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.banners = [];
      });
  },
});

export default bannerSlice.reducer;
