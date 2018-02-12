import React from 'react'
import Link from 'gatsby-link'

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
  <div className="portfolio-project-container">
    {projects.map((project, index) => (
      <ProjectCard key={`portfolio-project-card-${index}`} name={project.name} href={project.href} img={project.img} />
    ))}
  </div>
);

const ExternalSite = ({}) => (
  <a href="http://www.codepen.io" className="portfolio-external-site">
    <img src="http://via.placeholder.com/128x128" />
    <div>
      <h2>External Site Name</h2>
      <p>External site info</p>
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

    <h1>...want to see even more?</h1>

    <div className="portfolio-external-sites-wrap">
      <ExternalSite />
      <ExternalSite />
      <ExternalSite />
    </div>
  </div>
)

export default Portfolio;