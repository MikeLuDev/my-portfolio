import React from 'react';
import Link from 'gatsby-link';

import codePenLogo from "../img/codepen-logo.png";
import githubLogo from "../img/github-logo.png";
import glitchLogo from "../img/glitch-logo.png";
import timeStamperImg from "../img/projects/time-stamper.png";
import simonImg from "../img/projects/simon.png";
import pomImg from "../img/projects/pomodoro.png";
import calcImg from "../img/projects/calc.png";
import gatsbyLogo from "../img/gatsby-logo.svg";

import resume from "../file/resume-Michael-Lu.pdf";

let sites = [
  {
    name: "Github",
    href: "https://github.com/MikeLuDev",
    info: "My public repos, including the code for this site.",
    img: githubLogo
  },{
    name: "Codepen",
    href: "https://codepen.io/MikeLuDev/#",
    info: "A collection of fun little apps, doodles, and tests. Mostly front end stuff.",
    img: codePenLogo
  },{
    name: "Glitch",
    href: "https://glitch.com/@MikeLuDev",
    info: "Small backend projects including API servers and microservices.",
    img: glitchLogo
  }
];

let projects = [
  {
    name: "time-stamper",
    href: "https://time-stamper.glitch.me/",
    img: timeStamperImg
  },{
    name: "Simon",
    href: "https://codepen.io/MikeLuDev/pen/veevZO",
    img: simonImg
  },{
    name: "Calculator",
    href: "https://codepen.io/MikeLuDev/pen/mMXNNL",
    img: calcImg
  },{
    name: "Pomodoro Clock",
    href: "https://codepen.io/MikeLuDev/pen/bRZMqp",
    img: pomImg
  }
];

const ProjectCard = ({name, href, img}) => (
  <a className="portfolio-project-card"
    href={href} 
    style={{backgroundImage: `url(${img})`}}
    target="blank"
    rel="noopener" >
    <h2>{name}</h2>
  </a>
);

const ProjectLinks = ({projects}) => (
  <div className="portfolio-projects-wrap">
    <h1>Some of my favorite projects</h1>
      <div className="portfolio-project-container">
        {projects.map((project, index) => (
          <ProjectCard key={`portfolio-project-card-${index}`} name={project.name} href={project.href} img={project.img} />
        ))}
      </div>
  </div>
);

const ContactMe = () => (
  <div className="portfolio-contact">
    <a className="portfolio-contact-resume" href={resume} download>
      <i className="far fa-file-alt" />
      <h2>Download my resume</h2>
    </a>
  </div>
);

const ExternalSites = ({sites}) => (
  <div className="portfolio-external-sites-wrap">
    <h1>You can find more of my work here:</h1>
    {sites.map((site, index) => (
      <ExternalSite name={site.name} href={site.href} info={site.info} img={site.img} />
    ))}
  </div>
)

const ExternalSite = ({name, href, info, img}) => (
  <a href={href} className="portfolio-external-site" target="_blank" rel="noopener">
    <img src={img} />
    <div>
      <h2>{name}</h2>
      <p>{info}</p>
    </div>
  </a>
);

const PortfolioHead = ({}) => (
  <div className="portfolio-head-bg">
    <div className="portfolio-head-main">
      <h1>I love to solve problems.</h1>
    </div>
  </div>
);

const Skills = ({}) => (
  <div className="portfolio-skills">
    <h1>These are my tools</h1>
    <div className="portfolio-skills-icons">
      <i className="fab fa-react" />
      <i className="fab fa-sass" />
      <img className="gatsby-logo" src={gatsbyLogo} />
      <i className="fab fa-less" />
      <i className="fab fa-node-js" />
      <i className="fab fa-git" />
      <i className="fab fa-html5" />
      <i className="fab fa-css3" />
      <i className="fab fa-js-square" />
    </div>
  </div>
);

const Tech = () => (
  <div className="portfolio-tech">
  </div>
);

const Portfolio = () => (
  <div className="portfolio-wrap">
    <PortfolioHead />
    <Skills />
    <ProjectLinks projects={projects} />
    <ExternalSites sites={sites} />
    <ContactMe />
  </div>
)

export default Portfolio;