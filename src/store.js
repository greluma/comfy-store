import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feactures/cart/cartSlice";
import userSlice from "./feactures/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartSlice,
    userState: userSlice,
  },
});
