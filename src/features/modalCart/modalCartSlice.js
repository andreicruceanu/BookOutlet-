import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  book: null,
};

const modalCartSlice = createSlice({
  name: "modalCart",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.book = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.book = null;
    },
  },
});

export const { openModal, closeModal } = modalCartSlice.actions;
export default modalCartSlice.reducer;
