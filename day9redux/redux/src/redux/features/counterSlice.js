import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,action) =>{ state.value += 1},// state = [...state,action.payload]
    decrement: (state) => state.value -= 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;