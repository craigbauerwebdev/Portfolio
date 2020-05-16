import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Button from './Button';

class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDescription: ""
    };
  }

  handleNavDescription(status) {
    this.setState({
      navDescription: status
    })
  }

  render() {
    const { showButtons } = this.props;
    return (
      <div>
        <div className="nav-icons center">
          {/* Make Routes */}
          <Link 
            onMouseEnter={() => { this.handleNavDescription('Home') }} 
            onMouseLeave={() => { this.handleNavDescription('') }} 
            to="/" title="Home">
            <i className="large material-icons">home</i>
          </Link>
          <Link
            onMouseEnter={() => { this.handleNavDescription('Resume') }}
            onMouseLeave={() => { this.handleNavDescription('') }}
            to="/resume" title="Resume">
            <i className="large material-icons">list_alt</i>
          </Link>
          <Link
            onMouseEnter={() => { this.handleNavDescription('Web Examples') }}
            onMouseLeave={() => { this.handleNavDescription('') }}
            to="websites" title="websites">
            <i className="large material-icons">important_devices</i>
          </Link>
          <Link
            onMouseEnter={() => { this.handleNavDescription('Code Examples') }}
            onMouseLeave={() => { this.handleNavDescription('') }}
            to="/code" title="code">
            <i className="large material-icons">code</i>
          </Link>
          <Link 
            onMouseEnter={() => { this.handleNavDescription('Contact me') }}
            onMouseLeave={() => { this.handleNavDescription('') }}
            to="/contact" title="contact">
            <i className="large material-icons">mail_outline</i>
          </Link>       
        </div>
          <div id="nav-description">{this.state.navDescription}</div>
      </div>
    );
  }
}
export default Icons;
