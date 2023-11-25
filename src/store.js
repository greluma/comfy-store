import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feactures/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartSlice,
  },
});
