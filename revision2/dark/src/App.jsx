import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  // hooks of react always on top of jsx
  // state, useEffect, useMemo, useRef, etc.
  const [dark, setDark] = useState(false); // useState using for state management
  return (
    <div>
      {/* i send  a state as a "prop" prop means properties  the childs components */}
      <Navbar dark={dark} setDark={setDark} />
      <Section dark={dark} />
      <Footer dark={dark} />
    </div>
  );
};

export default App;
