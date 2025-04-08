import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/couterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
