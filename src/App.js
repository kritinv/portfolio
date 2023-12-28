import React from "react";
import "./App.css";
import Column1 from "./Column1";
import Column2 from "./Column2";
import { useState, useEffect, useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const myRef = useRef();

  const handleCurrentSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
    setCurrentSection(section);
    // Wait for the scrolling to finish
  };

  const handleScroll = () => {
    const currentScrollTop = myRef.current.scrollTop;
    const aboutMeSection = myRef.current.querySelector("#about").offsetTop;
    const projectsSection = myRef.current.querySelector("#projects").offsetTop;
    const experienceSection =
      myRef.current.querySelector("#experience").offsetTop;
    const pastaSection = myRef.current.querySelector("#pastas").offsetTop;

    const sections = [
      { id: "about", offset: aboutMeSection },
      { id: "projects", offset: projectsSection },
      { id: "experience", offset: experienceSection },
      { id: "pastas", offset: pastaSection },
    ];

    let currentSection = "about";

    for (const section of sections) {
      if (currentScrollTop >= section.offset) {
        currentSection = section.id;
      } else {
        break;
      }
    }

    setCurrentSection(currentSection);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    myRef.current.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      myRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" ref={myRef}>
      <Column1
        activeSection={currentSection}
        setCurrentSection={handleCurrentSection}
      />
      <Column2 setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;
