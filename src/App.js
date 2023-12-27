import React from "react";
import "./App.css";
import Column1 from "./Column1";
import Column2 from "./Column2";
import { useState, useEffect, useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const handleCurrentSection = (current) => {
    setCurrentSection(current);
  };

  const [contentHover, setContentHover] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScrolling = (event) => {
      if (contentRef !== null) {
        if (contentHover === false) {
          contentRef.current.scrollTop += event.deltaY;
        }
      }
    };

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    };
  });

  return (
    <div
      className="App"
      onMouseEnter={() => {
        setContentHover(true);
      }}
      onMouseLeave={() => {
        setContentHover(false);
      }}
    >
      <Column1
        activeSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Column2 ref={contentRef} etCurrentSection={handleCurrentSection} />
    </div>
  );
}

export default App;
