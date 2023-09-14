import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})