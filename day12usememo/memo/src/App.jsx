import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  console.log("rendering...");
  let sum = useMemo(() => {
    console.log("call sum");
    return Number(input1) + Number(input2);
  },[input1, input2]);
  return (
    <div>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
      <br />
      <input
        type="text"
        placeholder="enter first number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter second number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <p>Sum:{sum}</p>
    </div>
  );
};

export default App;
