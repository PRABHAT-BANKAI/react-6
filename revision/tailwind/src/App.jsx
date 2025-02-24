import React from "react";

const App = () => {
  return (
    <>
     
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 30 }, (_, index) => (
          <div key={index} className="bg-gray-100 px-4 py-2 rounded-md">
            <h1>Box {index + 1}</h1>
            <p>heading</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
