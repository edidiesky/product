import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  cartmodal: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, action) => {
      state.registermodal = true;
    },
    offRegisterModal: (state, action) => {
      state.registermodal = false;
    },

    onCartModal: (state, action) => {
      state.cartmodal = true;
    },
    offCartModal: (state, action) => {
      state.cartmodal = false;
    },
  },
});

export const {
  onLoginModal,
  onCartModal,
  offCartModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
} = modalSlice.actions;

export default modalSlice.reducer;
