import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav style={{ height: "70px", backgroundColor: "aqua" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "0 20px",
          }}
        >
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/features"}>
            <li>Features</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
