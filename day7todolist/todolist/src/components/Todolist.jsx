import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolistData")) || []
  );

  function handleAdd() {
    setTodolist([inputText, ...todolist]);
    setInputText("");
  }

  useEffect(() => {
    localStorage.setItem("todolistData", JSON.stringify(todolist));
  },[todolist]);
  // console.log(todolist)
  // controlled component uncontrolled component
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <button onClick={handleAdd}>Add Task</button>
      <div>
        {todolist.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
