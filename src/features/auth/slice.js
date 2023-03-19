import { getItem } from "../../utils/local-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./service";
import { STATUSES } from "../../constants/statuses";
import { SEVERITIES } from "../../constants/severities";
import { UNKNOWN_ERROR } from "../../constants/errors";

const data = getItem("authData", "object");

const initialState = {
  data: data,
  messages: {},
  severities: {},
  statuses: {},
};

export const register = createAsyncThunk(
  "auth/register",
  async (requestPayload, { rejectWithValue }) => {
    const response = await service.register(requestPayload);

    const responsePayload = await response.json();

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(responsePayload);
    }

    return responsePayload;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state, { payload }) => {
      state.messages[payload] = undefined;
      state.severities[payload] = undefined;
      state.statuses[payload] = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.statuses.register = STATUSES.pending;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.statuses.register = STATUSES.fulfilled;
        state.messages.register = payload.message;
        state.severities.register = payload.severity;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.statuses.register = STATUSES.rejected;
        state.messages.register = payload?.message
          ? payload.message
          : UNKNOWN_ERROR;
        state.severities.register = payload?.severity
          ? payload.severity
          : SEVERITIES.error;
      });
  },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
