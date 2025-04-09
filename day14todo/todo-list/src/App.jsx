import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/features/todoSlice";

const App = () => {
  const { value } = useSelector((state) => {
    return state.todolist;
  });
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>

      {value.length != 0 ? (
        value.map((todo, index) => {
          return (
            <div key={index}>
              <p>{todo}</p>
            </div>
          );
        })
      ) : (
        <h2>empty todolist </h2>
      )}
    </div>
  );
};

export default App;
