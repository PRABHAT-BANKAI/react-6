import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incbyAmount,
  increment,
} from "./redux/features/couterSlice";
import Home from "./components/Home";

const App = () => {
  const { value } = useSelector((state) => {
    console.log(state.counter.value);
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {value}</p>

      <button onClick={() => dispatch(increment())}>inc</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        dec
      </button>
      <button onClick={() => dispatch(incbyAmount(15))}>5 amount</button>
      <Home />
    </div>
  );
};

export default App;
