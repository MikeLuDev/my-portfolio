import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Link className="nav-link" to={(this.props.title == "Home") ? "/" : this.props.title.toLowerCase()}>
        {this.props.title}
      </Link>
    );
  }
}

const Header = () => (
  <header>
    <div className="header-wrap">
        <img className="header-logo" src="http://via.placeholder.com/128x128"></img>
        <NavItem title="Home" />
        <NavItem title="Travel" />
        <NavItem title="Portfolio" />
        <NavItem title="Contact" /> 
      </div>
  </header>
)

const Footer = ({}) => (
  <footer>
    <p>Made by me, of course.</p>
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
