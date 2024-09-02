import { createSlice } from "@reduxjs/toolkit";
const customerData = JSON.parse(localStorage.getItem("customer"));
const initialState = {
  currentUser: customerData ? customerData : null,
};

export const authSlice = createSlice({
  name: "auth",
initialState,
  reducers: {
    LogOut: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("customer");
    },
    setUserCredentials: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("customer", JSON.stringify(action.payload));
    },
  },
});

export const { LogOut, setUserCredentials } = authSlice.actions;

export default authSlice.reducer;
