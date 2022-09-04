import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  data: cartItems,
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const inCart = state.cartItems.find((item) => item.id === action.payload);

      if (!inCart) {
        const product = state.data.find((item) => item.id === action.payload);
        state.cartItems = [...state.cartItems, product];
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItems.filter((item) => id !== item.id);
      state.cartItems = newCart;
    },
    addAmount: (state, action) => {
      const { id, amount } = action.payload;
      const cart = state.cartItems.find((item) => item.id === id);
      cart.amount += amount;
      if (!cart.amount) {
        cart.amount = 1;
      }
    },
    calculate: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  addAmount,
  calculate,
  addItem,
  addInCart,
} = cartSlice.actions;
