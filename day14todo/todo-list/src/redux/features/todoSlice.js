import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("todoData")) || [],
  isAuth: localStorage.getItem("isAuth") || false,
  userData: JSON.parse(localStorage.getItem("userData")) || [
    { email: "batman@gmail.com", password: "batman" },
  ],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [action.payload, ...state.value];
      localStorage.setItem("todoData", JSON.stringify(state.value));
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo, i) => i != action.payload);
      localStorage.setItem("todoData", JSON.stringify(state.value));
    },
    updateTodo: (state, action) => {
      console.log(action, "action");
      const { index, todo } = action.payload;
      const updateData = state.value.map((item, i) =>
        i == index ? todo : item
      );
      state.value = updateData;
      localStorage.setItem("todoData", JSON.stringify(state.value));
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
