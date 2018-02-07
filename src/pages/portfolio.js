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

const PortfolioHead = ({}) => (
  <div className="portfolio-head">
    <h3>
      Below are a few of my projects - both personal and professional.
    </h3>
  </div>
);

const Portfolio = () => (
  <div className="portfolio-wrap">
    <h1>Portfolio</h1>
    <PortfolioHead />
    <ProjectLinks projects={projects} />
  </div>
)

export default Portfolio;