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
        book.totalPrice = book.price * book.quantity;
        state.cart.push(book);
      } else {
        existingBook.quantity++;
        existingBook.totalPrice =
          Number(existingBook.totalPrice) + Number(existingBook.price);
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCart: (state, action) => {
      const bookIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cart[bookIndex].quantity > 1) {
        state.cart[bookIndex].quantity -= 1;
        state.cart[bookIndex].totalPrice =
          state.cart[bookIndex].price * state.cart[bookIndex].quantity;
        console.log(state.cart[bookIndex].totalPrice);
        toast.info("Ai actualizat cantitatea produsului!");
      } else if (state.cart[bookIndex].quantity === 1) {
        toast.error("Minim 1 buc");
      }
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

export const { addToCartReducer, remove, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
