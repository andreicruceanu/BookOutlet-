import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils/localStorage";

const storageKeyForShow = "showRecent";
const storageKeyForBooks = "recentBooks";

const initialState = {
  showRecent: getItem(storageKeyForShow) || false,
  listRecentBooks: getItem(storageKeyForBooks) || [],
};

const recentBooksSlice = createSlice({
  name: "recentBooks",
  initialState,
  reducers: {
    openList: (state) => {
      state.showRecent = true;
      setItem(storageKeyForShow, true);
    },
    closeList: (state) => {
      state.showRecent = false;
      setItem(storageKeyForShow, false);
    },
    addRecentBooks: (state, action) => {
      const existingBook = state.listRecentBooks.find(
        (book) => book._id.toString() === action.payload._id.toString()
      );
      if (!existingBook) {
        state.listRecentBooks.unshift(action.payload);
        setItem(storageKeyForBooks, state.listRecentBooks);
      }
    },
  },
});

export const { openList, closeList, addRecentBooks } = recentBooksSlice.actions;

export default recentBooksSlice.reducer;
