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
  <a className="portfolio-project-card" href={href} style={{backgroundImage: `url(${img})`}} >
    <h2>{name}</h2>
  </a>
);

const ProjectLinks = ({projects}) => (
  <div className="portfolio-project-container" target="_blank" rel="noopener">
    {projects.map((project, index) => (
      <ProjectCard key={`portfolio-project-card-${index}`} name={project.name} href={project.href} img={project.img} />
    ))}
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
  <div className="portfolio-head">
    <h3>
      Below are a few of my favorite projects - both personal and professional.
    </h3>
  </div>
);

const Portfolio = () => (
  <div className="portfolio-wrap">
    <h1>Portfolio</h1>
    <PortfolioHead />
    <ProjectLinks projects={projects} />

    <h1>Want to see even more?</h1>

    <ExternalSites sites={sites} />

  </div>
)

export default Portfolio;