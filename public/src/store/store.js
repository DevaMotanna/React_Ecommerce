import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Slices/wishlistSlice";
import cartReducer from "./Slices/cartSlice";
import { saveToStorage } from "../utils/storage";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveToStorage("wishlist", state.wishlist.items);
  saveToStorage("cart", state.cart.items);
});
