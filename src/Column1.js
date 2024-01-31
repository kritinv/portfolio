import "./App.css";
import "./Column1.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Column1({ activeSection, setCurrentSection }) {
  const scrollToSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className={`column1`}>
      {" "}
      <h1 className="name">Kritin Vongthongsri</h1>
      <h3>Software Engineer • AI/ML Engineer</h3>
      <p className="serious">
        {/* <a href="https://usg.princeton.edu/2024" className="text-link"> */}
        ORFE and CS {/* </a>{" "} */}
        at{" "}
        <a href="https://www.princeton.edu/" className="text-link">
          <strong>Princeton University</strong>
        </a>
        , seeking opportunities in AI/ML and SWE. I love making{" "}
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
            <a className="menuitem" onClick={() => scrollToSection("about")}>
              <div className="menuwrapper">
                <div className="menuline-wrapper">
                  <hr className="menuline"></hr>
                </div>
                <div>About</div>
              </div>
            </a>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <a onClick={() => scrollToSection("projects")}>
              <div className="menuwrapper">
                <div className="menuline-wrapper">
                  <hr className="menuline"></hr>
                </div>
                <div className="menuitem">Projects</div>
              </div>
            </a>
          </li>
          <li className={activeSection === "experience" ? "active" : ""}>
            <a onClick={() => scrollToSection("experience")}>
              <div className="menuwrapper">
                <div className="menuline-wrapper">
                  <hr className="menuline"></hr>
                </div>
                <div className="menuitem"> Experience</div>
              </div>
            </a>
          </li>
          <li className={activeSection === "pastas" ? "active" : ""}>
            <a onClick={() => scrollToSection("pastas")} className="menuitem">
              <div className="menuwrapper">
                <div className="menuline-wrapper">
                  <hr className="menuline"></hr>
                </div>
                <div>Pastas</div>
              </div>
            </a>
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
      <img
        className="portrait"
        src={process.env.PUBLIC_URL + "/images/" + "portrait.png"}
      ></img>
    </div>
  );
}

export default Column1;
