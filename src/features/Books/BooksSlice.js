import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import booksService from "./BooksService";

const initialState = {
  topBooks: [],
  newBooks: [],
  newsBookoutlet: [],
  topPackagesBook: [],
  error: false,
  errorMessage: undefined,
  success: false,
  loading: false,
};

export const booksSlice = createSlice({
  name: "topBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.topBooks = action.payload?.topBooks;
        state.newBooks = action.payload?.newBooks;
        state.newsBookoutlet = action.payload?.newsBookoutlet;
        state.topPackagesBook = action.payload?.topPackagesBook;
      })
      .addCase(getBooks.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.loading = false;
        state.success = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.topBooks = [];
        state.newBooks = [];
        state.newsBookoutlet = [];
        state.topPackagesBook = [];
      });
  },
});

export const getBooks = createAsyncThunk("/books", async (_, thunkAPI) => {
  try {
    return await booksService.getBooks();
  } catch (error) {
    const message =
      (error.response && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export default booksSlice.reducer;
