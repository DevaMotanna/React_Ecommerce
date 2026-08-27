import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Slices/wishlistSlices";
import { saveToStorage } from "../utils/storage";
import cartReducer from "./Slices/cartSlice"

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart:cartReducer,
  },
});

store.subscribe(() => {
    const state = store.getState();
    saveToStorage("wishlist", state.wishlist.items);
    saveToStorage("cart", state.cart.items);

})