import React, { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countData")) || 0
  );

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  useEffect(() => {
    localStorage.setItem("countData", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h1>About</h1>
      <p>Count:{count}</p>
      <div className="flex gap-5">
        <button className="border" onClick={handleInc}>
          Increment
        </button>
        <button className="border" onClick={handleDec}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default About;
