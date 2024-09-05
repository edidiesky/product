import { updateCart } from "@/utils/cartUtils";
import { createSlice } from "@reduxjs/toolkit";
const cartData = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  cart: cartData ? cartData : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // find the element exist
      const itemExist = state.cart.find((i) => i.id === item.id);
      // check if the element exist
      if (itemExist) {
        // update if the element exist
        state.cart = state.cart.map((x) => (x.id === itemExist.id ? item : x));
      } else {
        state.cart = [...state.cart, item];
      }
      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cart = state.cart.filter((x) => x.id !== item);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
