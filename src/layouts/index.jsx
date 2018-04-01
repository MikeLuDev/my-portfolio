import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import browserHistory from 'react-router';

import '../style/main.scss';

import penguin from "../img/penguin.svg";

const links = ["home", "blog", "music", "portfolio", "contact"];

const NavItem = ({title}) => (
  <Link 
    id={`nav-link-${title}`}
    className={`nav-link `}
    to={(title == "home") ? "/" : title}>
    {title.charAt(0).toUpperCase() + title.slice(1)}
  </Link>
);

const Header = ({links}) => (
  <header>
    <div className="header-wrap">
        <img className="header-logo" src={penguin}></img>
        {links.map((link, index) => (
          <NavItem title={link} key={`nav-link-${index}`} />
        ))}
      </div>
  </header>
)

const Footer = ({}) => (
  <footer>
    <div className="footer-wrap">
      <div className="footer-left">
        <h3>About this site</h3>
        <p>The design and construction of this website is done entirely by me.
          Primary tools include React, Gatsby, and SASS.
          Icons are provided by <a href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</a>
        </p>
        <p>Professional photography by 
          <a href="https://www.rachelelizabethphotography.net/" target="_blank" rel="noopener"> Rachel Elizabeth Photography</a>
        </p>
      </div>
      <div className="footer-right">
        <h3>Want to get in touch?</h3>
        <p>For business inquiries or any questions please <Link to="contact">contact me.</Link> <a></a></p>
      </div>
    </div>
  </footer>
);

/* WRITE A BLOG POST ABOUT THIS
const TemplateWrapper = ({ children }) => (
  <div className="template-wrapper">
    <Helmet
      title="Michael Lu | Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header links={links} />
    <div className="main-content">
      {children()}
    </div>
    <Footer />
  </div>
)*/

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }    
  }

  render() {
    return (
      <div className="template-wrapper">
        <Helmet
          title="Michael Lu | Web Developer"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          script={[
            { defer: 'true', src: 'https://use.fontawesome.com/releases/v5.0.8/js/all.js'}
          ]}>
        </Helmet>
        <Header links={links} />
          <div className="main-content">
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
