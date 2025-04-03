import React, { useCallback, useState } from "react";
import Child from "./component/Child";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    console.log("count1,render");
    setCount1(count1 + 1);
  };
  const handleCount2 = useCallback(() => {
    console.log("count2,render");
    setCount2(count2 + 1);
  }, [count2]);
  console.log("parent render");

  return (
    <div>
      <h1>parent </h1>
      <p>Count1:{count1}</p>
      <button onClick={handleCount1}>INC1</button>
      <br />
      <p>Count2:{count2}</p>

      <Child handleCount2={handleCount2} />
    </div>
  );
};

export default App;
