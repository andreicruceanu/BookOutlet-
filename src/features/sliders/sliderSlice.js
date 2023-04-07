import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sliderServices from "./sliderService.js";

const initialState = {
  sliders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getSliders = createAsyncThunk(
  "slider/all",
  async (_, thunkAPI) => {
    try {
      return await sliderServices.getSliders();
    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSliders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sliders = action.payload;
      })
      .addCase(getSliders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.sliders = [];
      });
  },
});

export default sliderSlice.reducer;
