import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./features/todoSlice";
export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
