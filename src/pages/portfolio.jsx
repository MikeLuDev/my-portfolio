import React from 'react';
import Link from 'gatsby-link';

let sites = [
  {
    name: "Codepen",
    href: "https://codepen.io/MikeLuDev/#",
    info: "A collection of fun little apps, doodles, and tests. Mostly front end stuff.",
    img: "/img/codepen-logo.png"
  },
  {
    name: "Github",
    href: "https://github.com/MikeLuDev",
    info: "My public repos, including the code for this site.",
    img: "/img/github-logo.png"
  }
];

let projects = [
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
  },
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
  },
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
  },
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
  },
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
  },
  {
    name: "Project Name",
    href: "www.michaelwlu.com",
    img: "/img/blazek-1200.jpg"
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
  <div className="portfolio-projects">
    <div className="portfolio-project-container">
      {projects.map((project, index) => (
        <ProjectCard key={`portfolio-project-card-${index}`} name={project.name} href={project.href} img={project.img} />
      ))}
    </div>
  </div>
);

const ContactMe = () => (
  <div className="portfolio-contact">
    <a className="portfolio-contact-resume">
      <i className="far fa-file-alt" />
      <h2>Feel free to download my full resume</h2>
    </a>
  </div>
);

const ExternalSites = ({sites}) => (
  <div className="portfolio-external-sites-wrap">
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
      <h3>
        Here are a few of my favorite projects, both personal and professoinal:
      </h3>
    </div>
  </div>
);

const Skills = ({}) => (
  <div className="portfolio-skills">
    <div className="portfolio-skills-icons">
      <i className="fab fa-react" />
      <i className="fab fa-sass" />
      <i className="fab fa-less" />
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
    <ProjectLinks projects={projects} />
    <hr />
    <Skills />
    <ExternalSites sites={sites} />
    <ContactMe />
  </div>
)

export default Portfolio;