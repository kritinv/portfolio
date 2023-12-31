// Column2.js
import React from "react";
import "./Column2.css"; // Create a new CSS file for this component if needed
import projectInfo from "./projectInfo";
import pastaInfo from "./pastaInfo";
import experienceInfo from "./experienceInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCode,
  faPen,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif", // Change this to the desired font
    fontSize: 12, // Adjust the font size here
  },
});

function Column2() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [checkedProject, setCheckedProject] = useState(false);
  const [checkedExperience, setCheckedExperience] = useState(false);
  const [checkedPasta, setCheckedPasta] = useState(false);

  const handleChangeProject = () => {
    setCheckedProject((prev) => !prev);
  };
  const handleChangeExperience = () => {
    setCheckedExperience((prev) => !prev);
  };
  const handleChangePasta = () => {
    setCheckedPasta((prev) => !prev);
  };

  return (
    <div className="column2">
      {/*****************************************************/}
      {/********************* About me **********************/}
      {/*****************************************************/}
      <h1 id="about" className="section-header">
        About Me
      </h1>
      <div className="aboutme">
        My coding journey started in 2018, and since then, I've been immersed in
        a range of projects—spanning websites, games, AI systems, trading bots,
        and web scrapers.
      </div>
      <div className="aboutme">
        Currently pursuing a major in{" "}
        <a href="https://orfe.princeton.edu/" className="text-link">
          <strong>Operations Research</strong>
        </a>{" "}
        , with minors in{" "}
        {/* <a
          href="https://www.cs.princeton.edu/ugrad/overview"
          className="text-link"
        > */}
        Computer Science {/* </a>{" "} */}
        and Music Performance (
        {/* <a
          href="https://music.princeton.edu/undergraduate/certificate-programs/"
          className="text-link"
        > */}
        Piano
        {/* </a> */}
        ), I really enjoy creating, building, and learning new things.
      </div>
      <div className="aboutme">
        In the professional landscape, I've gained valuable experience as an ML
        intern across diverse settings, from a{" "}
        <a href="https://www.abacusdigital.com/" className="text-link">
          <strong>startup</strong>
        </a>{" "}
        to a{" "}
        <a
          href="https://www.kasikornbank.com/en/personal/pages/home.aspx"
          className="text-link"
        >
          <strong>large corporate bank</strong>
        </a>
        , to a{" "}
        <a
          href="http://www.springtideequitypartners.com/"
          className="text-link"
        >
          <strong>private fund</strong>
        </a>
        .
      </div>
      <div className="aboutme">
        Beyond the screen, you might find me experimenting with{" "}
        {/* <a
          href="https://www.youtube.com/watch?v=AX-YfWX0bFY"
          className="text-link"
        > */}
        pasta {/* </a>{" "} */}
        recipes, challenging my{" "}
        {/* <a
          href="https://www.youtube.com/watch?v=G3ticHfFo2Q"
          className="text-link"
        > */}
        spice {/* </a>{" "} */}
        tolerance, jamming to{" "}
        <a
          href="https://www.youtube.com/watch?v=kACt0FM0Kf8"
          className="text-link"
        >
          <strong>jazz</strong>
        </a>{" "}
        (and occasionally{" "}
        <a
          href="https://www.youtube.com/watch?v=KB59i99Wxc4"
          className="text-link"
        >
          <strong>Liszt</strong>
        </a>
        ), or skipping{" "}
        {/* <a
          href="https://www.youtube.com/watch?v=MfstYSUscBc"
          className="text-link"
        > */}
        leg day
        {/* </a> */}. Let's connect and create something amazing!
      </div>
      {/*****************************************************/}
      {/********************* Projects **********************/}
      {/*****************************************************/}
      <h1 id="projects" className="section-header">
        Projects
      </h1>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedProject}
              onChange={handleChangeProject}
              color="default"
            />
          }
          label="Display Technologies"
        />
      </ThemeProvider>
      {projectInfo.map((project, index) => (
        <div key={index} className="project-container">
          <div className="project-section-container">
            {/* Project Date */}
            <div className="left-column date-wrapper">
              <div className="date">{project.date}</div>
            </div>
            {/* Project Title */}
            <div className="right-column">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.liveDemoLink}
                id="project-link"
              >
                <div className="project-title-wrapper">
                  <h2 className="project-title">{project.name}</h2>
                  <div className="icon">
                    <FontAwesomeIcon
                      className="link-icon"
                      icon={faExternalLinkAlt}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-section-container">
            <div className="left-column">
              {/* Project Gif */}
              <img
                src={process.env.PUBLIC_URL + "/images/" + project.gif}
                alt="Your GIF animation"
                className="gif-element"
              ></img>
            </div>
            <div className="right-column">
              {/* Project Description */}
              <p className="description">{project.description}</p>

              {/* Technology Used */}
              {checkedProject && (
                <div className="technologies">
                  {project.technologiesUsed.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-button">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {/* Live Demo, Source Code, Writeup */}
              <div className="buttons">
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    className="button-link"
                    onMouseOver={() => setIsButtonHovered(true)}
                    onMouseOut={() => setIsButtonHovered(false)}
                  >
                    <div className="button">
                      <div className="icon">
                        <FontAwesomeIcon
                          className="icon-various"
                          icon={faLaptop}
                        />
                      </div>
                      <div className="button-title"> Live Demo</div>
                    </div>
                  </a>
                )}

                {(project.sourceCodeLink ||
                  (project.sourceCodeLinks &&
                    project.sourceCodeLinks.length > 0)) && (
                  <a
                    href={project.sourceCodeLink || project.sourceCodeLinks[0]}
                    className="button-link"
                    onMouseOver={() => setIsButtonHovered(true)}
                    onMouseOut={() => setIsButtonHovered(false)}
                  >
                    <div className="button">
                      <div className="icon">
                        <FontAwesomeIcon
                          className="icon-various"
                          icon={faCode}
                        />
                      </div>
                      <div className="button-title">Source Code</div>
                    </div>
                  </a>
                )}

                {project.writeupLink && (
                  <a
                    href={project.writeupLink}
                    className="button-link"
                    onMouseOver={() => setIsButtonHovered(true)}
                    onMouseOut={() => setIsButtonHovered(false)}
                  >
                    <div className="button">
                      <div className="icon">
                        <FontAwesomeIcon
                          className="icon-various"
                          icon={faPen}
                        />
                      </div>
                      <div className="button-title">Writeup</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/*****************************************************/}
      {/******************** Experience *********************/}
      {/*****************************************************/}
      <h1 id="experience" className="section-header">
        Experience
      </h1>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedExperience}
              onChange={handleChangeExperience}
              color="default"
            />
          }
          label="Display Technologies"
        />
      </ThemeProvider>
      {experienceInfo.map((experience, index) => (
        <div key={index} className="project-container">
          <div className="project-section-container">
            {/* Experience Date */}
            <div className="left-column date-wrapper">
              <div className="date">{experience.date}</div>
            </div>
            {/* Expeience Title */}
            <div className="right-column">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={experience.link}
                id="project-link"
              >
                <div className="project-title-wrapper">
                  <h2 className="project-title">{experience.name}</h2>
                  <div className="icon">
                    <FontAwesomeIcon
                      className="link-icon"
                      icon={faExternalLinkAlt}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-section-container">
            <div className="left-column"></div>
            <div className="right-column">
              {/* Project Description */}
              <p className="description">{experience.description}</p>

              {/* Technology Used */}
              {checkedExperience && (
                <div className="technologies">
                  {experience.technologiesUsed.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-button">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {/*****************************************************/}
      {/********************** Pastas ***********************/}
      {/*****************************************************/}
      <h1 id="pastas" className="section-header">
        Pastas
      </h1>
      <div className="aboutme">
        These are some of my favorite pastas that I've cooked and tried, ranked.
        I've noticed my general preference for Sicilian-style pastas, as they
        offer a light yet incredibly complex taste. However, I can't deny that
        extremely intense flavors, such as wild boar, are insanely delicious.
      </div>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          control={
            <Switch
              checked={checkedPasta}
              onChange={handleChangePasta}
              color="default"
            />
          }
          label="Display Ingredients"
        />
      </ThemeProvider>
      {pastaInfo.map((pasta, index) => (
        <div key={index} className="project-container">
          <div className="project-section-container">
            {/* Experience Date */}
            <div className="left-column date-wrapper">
              <div className="rank">{pasta.rank + "."}</div>
            </div>
            {/* Expeience Title */}
            <div className="right-column">
              <h2 className="project-title-pasta">{pasta.name}</h2>
            </div>
          </div>

          <div className="project-section-container">
            <div className="left-column">
              {/* Project Gif */}
              <img
                src={process.env.PUBLIC_URL + "/images/" + pasta.image}
                alt="Your GIF animation"
                className="pasta"
              ></img>
            </div>{" "}
            <div className="right-column">
              {/* Project Description */}
              <p className="description">{pasta.description}</p>

              {/* Technology Used */}
              {checkedPasta && (
                <div className="technologies">
                  {pasta.ingredients.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-button">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <h2>Honorable Mentions</h2>{" "}
      <div className="honorable">
        <p>
          <strong>Gnocchi al Pesto:</strong> Presents soft potato dumplings
          bathed in a vibrant basil pesto sauce, showcasing the lushness of
          Ligurian cuisine.
        </p>

        <p>
          <strong>Cacio e Pepe:</strong> Is a classic Roman pasta dish,
          highlighting the simplicity of pecorino cheese, black pepper, and
          pasta in perfect harmony.
        </p>

        <p>
          <strong>Bucatini all'Amatriciana:</strong> Is a quintessential Roman
          recipe featuring hollow spaghetti with a savory tomato and guanciale
          (cured pork cheek) sauce.
        </p>

        <p>
          <strong>Linguini allo Scoglio:</strong> Is a seafood lover's dream,
          with linguini adorned with a medley of fresh shellfish and a
          tomato-based sauce.
        </p>

        <p>
          <strong>Pasta alla Norma:</strong> Showcases the flavors of Sicily,
          featuring eggplant, tomatoes, and ricotta salata cheese over pasta.
        </p>

        <p>
          <strong>Tagliatelle ai Funghi:</strong> Celebrates the earthy goodness
          of mushrooms in a creamy sauce over ribbon-like tagliatelle.
        </p>

        <p>
          <strong>Pappardelle all'Anatra:</strong> Features wide ribbons of
          pasta adorned with a rich and savory duck ragù, offering a taste of
          Tuscan indulgence.
        </p>

        <p>
          <strong>Spaghetti all'Assassina:</strong> Is a bold and spicy pasta
          dish from Calabria, featuring a flavorful sauce with anchovies,
          olives, and chili.
        </p>

        <p>
          <strong>Puttanesca:</strong> Is a bold and flavorful Italian pasta
          dish that hails from the southern regions of Italy. This robust sauce
          features a medley of piquant ingredients such as tomatoes, olives,
          capers, garlic, and anchovies.
        </p>

        <p>
          <strong>Bolognese:</strong> Is a hearty meat sauce from Bologna, often
          paired with tagliatelle for a comforting and satisfying pasta
          experience.
        </p>
      </div>
      <style>
        {`
          // #project-link:hover .link-icon {
          // height: ${isButtonHovered ? "15px" : "20px"};
          // }
          // #project-link:hover .project-title {
          // font-size: ${isButtonHovered ? "20px" : "21px"};
          // padding-top: ${isButtonHovered ? "0.5px" : "0px"};
          // padding-bottom: ${isButtonHovered ? "0.5px" : "0px"};
          // }
          `}
      </style>
    </div>
  );
}

export default Column2;
