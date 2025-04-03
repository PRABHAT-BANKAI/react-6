import React, { memo } from "react";

const Child = ({ handleCount2 }) => {
  console.log("Child rendered");
  return (
    <div>
      <h1>child</h1>
      <button onClick={handleCount2}>INC2</button>
    </div>
  );
};

export default memo(Child);
