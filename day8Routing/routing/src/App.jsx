import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import tom from "./assets/image.jpeg";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import { Link, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li> About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
