import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch()
  const countValue = useSelector((state) => {
  return state.counter.value
  });
  return (
    <div>
      <h1>Count:{countValue}</h1>
      <button onClick={()=>dispatch(increment())}>inc</button>
    </div>
  );
};

export default App;
