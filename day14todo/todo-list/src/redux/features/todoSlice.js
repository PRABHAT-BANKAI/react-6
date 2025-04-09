import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("todoData")) || [],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [action.payload, ...state.value];
      localStorage.setItem("todoData", JSON.stringify(state.value));
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
