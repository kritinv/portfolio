import React from "react";
import "./App.css";
import Column1 from "./Column1";
import Column2 from "./Column2";
import { useState, useEffect } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const handleCurrentSection = (current) => {
    setCurrentSection(current);
  };

  const handleScroll = () => {
    const column2 = document.querySelector(".column2");
    if (column2) {
      const scrollY = window.scrollY || window.pageYOffset;
      column2.scrollTop = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run effect only once on mount

  return (
    <div className="App">
      <Column1
        activeSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Column2 setCurrentSection={handleCurrentSection} />
    </div>
  );
}

export default App;
