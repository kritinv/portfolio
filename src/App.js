import React from "react";
import "./App.css";
import Column1 from "./Column1";
import Column2 from "./Column2";
import { useState, useEffect, useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  return (
    <div className="App">
      <Column1
        activeSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Column2 className="invi" />
    </div>
  );
}

export default App;
