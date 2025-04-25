import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userStore")) || [],
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = [...state.userData, action.payload];
      localStorage.setItem("userStore", JSON.stringify(state.userData));
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
    },
  },
});

export const { setUserData, setIsAuth } = authSlice.actions;

export default authSlice.reducer;
