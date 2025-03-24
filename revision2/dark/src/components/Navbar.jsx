import React from "react";

const Navbar = ({ dark, setDark }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: dark ? "black" : "aqua",
        color: dark ? "white" : "black",
        justifyContent: "space-between",
        display: "flex",
        padding: "0px 6%",
        alignItems: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Crypto m5</h1>
      <nav>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <button onClick={()=>setDark(!dark)}>DarkMode</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
