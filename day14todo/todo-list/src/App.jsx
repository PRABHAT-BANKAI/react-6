import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/features/todoSlice";

const App = () => {
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const { value } = useSelector((state) => {
    return state.todolist;
  });
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(addTodo(input));
    setInput("");
  }
  function handleEdit(i) {
    setBoolean(true);
    setInput(value[i]);
    setEditIndex(i);
  }
  function handleUpdate() {
    dispatch(updateTodo({ index: editIndex, todo: input }));
    setInput("");
    setBoolean(false);
    setEditIndex(null);
  }

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {boolean ? (
        <button onClick={ handleUpdate}> Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      {value.length != 0 ? (
        value.map((todo, index) => {
          return (
            <div key={index}>
              <p>{todo}</p>
              <button onClick={() => dispatch(deleteTodo(index))}>
                Delete
              </button>
              <button onClick={() => handleEdit(index)}>EDit</button>
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
