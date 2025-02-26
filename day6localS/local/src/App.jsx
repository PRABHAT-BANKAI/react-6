import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("countData") )|| 0);

  useEffect(() => {
    localStorage.setItem("countData", count);
  }, [count]);
  return (
    <div>
      <div style={{}}>
        <button disabled={count == 0} onClick={() => setCount(count - 1)}>
          Dec
        </button>
        <button>Count :{count}</button>
        <button onClick={() => setCount(count + 1)}>Inc</button>

        <input type="text" />
      </div>
    </div>
  );
};

export default App;
