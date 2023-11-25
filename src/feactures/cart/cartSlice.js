import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getInitialCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCart(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart");
    },

    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      console.log(action.payload);
      const { cartID } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);

      state.numItemsInCart -= item.amount;
      state.cartTotal -= item.price * item.amount;
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item removed from cart");
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      const prevAmount = item.amount;
      item.amount = amount;
      state.numItemsInCart += amount - prevAmount;
      state.cartTotal += item.price * (amount - prevAmount);
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item updated");
    },

    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
