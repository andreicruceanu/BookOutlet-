import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sliderServices from "./sliderService.js";
import axios from "axios";

const initialState = {
  sliders: [],
  error: false,
  errorMessage: undefined,
  success: false,
  loading: false,
};

export const sliderSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSliders.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.sliders = action.payload;
      })
      .addCase(getSliders.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.loading = false;
        state.success = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.sliders = [];
      });
  },
});

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

export default sliderSlice.reducer;
