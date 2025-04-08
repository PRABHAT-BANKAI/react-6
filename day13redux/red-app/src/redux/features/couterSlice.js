import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("counterData")) || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
    incbyAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
  },
});

export const { increment, decrement, incbyAmount } = counterSlice.actions;

export default counterSlice.reducer;
