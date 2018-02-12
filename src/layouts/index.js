import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const NavItem = ({title}) => (
  <Link 
    id={`nav-link-${title}`}
    className={`nav-link`} 
    to={(title == "home") ? "/" : title}
  >
    {title.charAt(0).toUpperCase() + title.slice(1)}
  </Link>
);

const Header = () => (
  <header>
    <div className="header-wrap">
        <img className="header-logo" src="http://via.placeholder.com/128x128"></img>
        <NavItem title="home" />
        <NavItem title="travel" />
        <NavItem title="portfolio" />
        <NavItem title="contact" /> 
      </div>
  </header>
)

const Footer = ({}) => (
  <footer>
    <div className="footer-wrap">
      <div className="footer-left">
        <h3>About this site:</h3>
        <p>The design and construction of this website is done entirely by me.</p>
        <p>Primary tools include React and Gatsby.</p>
      </div>
      <div className="footer-right">
        <p>For business inquiries or any questions please <Link to="contact">contact me.</Link> <a></a></p>
      </div>
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div className="template-wrapper">
    <Helmet
      title="Michael Lu | Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="main-content">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
