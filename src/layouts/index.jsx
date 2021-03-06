import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import browserHistory from 'react-router';

import '../style/main.scss';

import penguin from "../img/penguin.svg";

const links = ["home", "blog", "music", "portfolio", "contact"];

const NavItem = ({active, title, onClick}) => (
  <Link 
    className={`nav-link${active ? ' active' : ''}`}
    to={(title == "home") ? "/" : title} 
    onClick={onClick} >
    {title.charAt(0).toUpperCase() + title.slice(1)}
  </Link>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: 'home'
    }
    this.setActiveTab = this.setActiveTab.bind(this); 
  }

  setActiveTab(tabName) {
    this.setState({
      active_tab: tabName
    })
  }

  render() {
    return (
      <header>
        <div className="header-wrap">
          <NavItem
            title={'home'}
            active={this.state.active_tab == 'home'}
            onClick={() => this.setActiveTab('home')} />
          <NavItem
            title={'blog'}
            active={this.state.active_tab == 'blog'}
            onClick={() => this.setActiveTab('blog')} />
          <NavItem
            title={'portfolio'}
            active={this.state.active_tab == 'portfolio'}
            onClick={() => this.setActiveTab('portfolio')} />
          <NavItem
            title={'contact'}
            active={this.state.active_tab == 'contact'}
            onClick={() => this.setActiveTab('contact')} />
        </div>
      </header>
    )
  }
}

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
        <p>For business inquiries or any questions please <Link to="contact">contact me.</Link><a></a></p>
      </div>
    </div>
  </footer>
);

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
