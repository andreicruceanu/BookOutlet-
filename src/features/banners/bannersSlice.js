import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bannersServices from "./bannersServices";

const initialState = {
  banners: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getBanners = createAsyncThunk("/banners", async (_, thunkAPI) => {
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
        state.isLoading = true;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.banners = action.payload;
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.banners = [];
      });
  },
});

export default bannerSlice.reducer;
