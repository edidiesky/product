import { createSlice } from "@reduxjs/toolkit";
const cartData = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  cart: cartData ? cartData : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExist = state.cartItems.find((i) => i.id === item.id);

      if (itemExist) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === itemExist.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== item);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
