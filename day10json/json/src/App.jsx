import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </>
  );
};

export default App;
