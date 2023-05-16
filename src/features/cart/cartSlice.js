import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cart: cart ? cart : [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const book = action.payload;

      if (book) {
        state.totalQuantity++;
      }

      const existingBook = state.cart.find((item) => item._id === book._id);

      if (!existingBook) {
        book.quantity = 1;
        book.totalPrice = book.price;
        state.cart.push(book);
      } else {
        existingBook.quantity++;
        existingBook.totalPrice =
          Number(existingBook.totalPrice) + Number(existingBook.price);
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      toast.success("Carte a fost adaugata in cos !");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    remove: (state, action) => {
      state.cart.map((book) => {
        if (book._id === action.payload._id) {
          const newCart = state.cart.filter((item) => item._id !== book._id);
          state.cart = newCart;
          toast.error("Cartea a fost eliminata din cos !");
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return state;
      });
    },
  },
});

export const { addToCartReducer, remove } = cartSlice.actions;
export default cartSlice.reducer;
