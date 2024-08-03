import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import bannersReducer from "./features/banners/bannersSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import booksReducer from "./features/Books/BooksSlice.js";
import modalCartReducer from "./features/modalCart/modalCartSlice.js";
import recentBooksReducer from "./features/recentBooks/recentBooks.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    banners: bannersReducer,
    cart: cartReducer,
    modalCart: modalCartReducer,
    recentBooks: recentBooksReducer,
  },
});
