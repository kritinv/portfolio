import "./App.css";
import "./Column1.css";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Column1({ activeSection, setCurrentSection }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
    setCurrentSection(section);
  };

  return (
    <div className={`column1 center-content ${scrolling ? "scrolling" : ""}`}>
      {" "}
      <h1 className="name">Kritin Vongthongsri</h1>
      <h3>Aspiring Software Engineer</h3>
      <p className="serious">
        I am a{" "}
        <a href="https://usg.princeton.edu/2024" className="text-link">
          <strong>Senior</strong>
        </a>{" "}
        at{" "}
        <a href="https://www.princeton.edu/" className="text-link">
          <strong>Princeton University</strong>
        </a>{" "}
        looking for opportunities in software engineering. I love making{" "}
        <a
          href="https://www.youtube.com/watch?v=AX-YfWX0bFY"
          className="text-link"
        >
          <strong>pasta</strong>
        </a>
        , creating{" "}
        <a
          href="https://www.youtube.com/watch?v=UfT--NCxi-8&list=OLAK5uy_n_ZGQ1f908r8kWypZ0X70FDz2VLeL0RdM"
          className="text-link"
        >
          <strong>music</strong>
        </a>
        , and{" "}
        <a
          href="https://www.youtube.com/watch?v=2frAVVPrMLQ&t=39s"
          className="text-link"
        >
          <strong>Manchester United</strong>
        </a>
        .
      </p>
      <nav>
        <ul>
          <li className={activeSection === "about" ? "active" : ""}>
            <div className="menuwrapper">
              <div className="menuline-wrapper">
                <hr className="menuline"></hr>
              </div>
              <div>
                <a
                  className="menuitem"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
              </div>
            </div>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <div className="menuwrapper">
              <div className="menuline-wrapper">
                <hr className="menuline"></hr>
              </div>
              <div>
                <a
                  className="menuitem"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </a>
              </div>
            </div>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <div className="menuwrapper">
              <div className="menuline-wrapper">
                <hr className="menuline"></hr>
              </div>
              <div>
                <a
                  onClick={() => scrollToSection("experience")}
                  className="menuitem"
                >
                  Experience
                </a>
              </div>
            </div>
          </li>
          <li className={activeSection === "pastas" ? "active" : ""}>
            <div className="menuwrapper">
              <div className="menuline-wrapper">
                <hr className="menuline"></hr>
              </div>
              <div>
                <a
                  onClick={() => scrollToSection("pastas")}
                  className="menuitem"
                >
                  Pastas
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="contact">
        <a href="https://github.com/kritinv" className="text-link">
          {" "}
          <FontAwesomeIcon className="contact-item" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/kritin-vongthongsri"
          className="text-link"
        >
          {" "}
          <FontAwesomeIcon className="contact-item" icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/bomb.kv/" className="text-link">
          {" "}
          <FontAwesomeIcon className="contact-item" icon={faInstagram} />
        </a>
        <a href="mailto: kritinv@princeton.edu" className="text-link">
          {" "}
          <FontAwesomeIcon className="contact-item" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Column1;
