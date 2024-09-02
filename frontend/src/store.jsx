import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { authSlice } from "./slices/authSlice";
import { cartSlice } from "./slices/cartSlice";
import { modalSlice } from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    cart: cartSlice,
    modal: modalSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
