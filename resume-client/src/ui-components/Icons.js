import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Switch, Link } from "react-router-dom";
//import Button from './Button';

class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDescription: "",
    };
  }

  handleNavDescription(status) {
    this.setState({
      navDescription: status,
    });
  }

  render() {
    return (
      <div>
        <div className="nav-icons center">
          <Link
            onMouseEnter={() => {
              this.handleNavDescription("Home");
            }}
            onMouseLeave={() => {
              this.handleNavDescription("");
            }}
            to={`${process.env.PUBLIC_URL}/`}
            title="Home"
          >
            <i className="large material-icons">person</i>
          </Link>
          <Link
            onMouseEnter={() => {
              this.handleNavDescription("Resume");
            }}
            onMouseLeave={() => {
              this.handleNavDescription("");
            }}
            to={`${process.env.PUBLIC_URL}/resume`}
            title="Resume"
          >
            <i className="large material-icons">list_alt</i>
          </Link>
          <Link
            onMouseEnter={() => {
              this.handleNavDescription("Web Examples");
            }}
            onMouseLeave={() => {
              this.handleNavDescription("");
            }}
            to={`${process.env.PUBLIC_URL}/websites`}
            title="websites"
          >
            <i className="large material-icons">important_devices</i>
          </Link>
          <Link
            onMouseEnter={() => {
              this.handleNavDescription("Code Examples");
            }}
            onMouseLeave={() => {
              this.handleNavDescription("");
            }}
            to={`${process.env.PUBLIC_URL}/code`}
            title="code"
          >
            <i className="large material-icons">code</i>
          </Link>
          <Link
            onMouseEnter={() => {
              this.handleNavDescription("Contact me");
            }}
            onMouseLeave={() => {
              this.handleNavDescription("");
            }}
            to={`${process.env.PUBLIC_URL}/contact`}
            title="contact"
          >
            <i className="large material-icons">mail_outline</i>
          </Link>
        </div>
        <div id="nav-description">{this.state.navDescription}</div>
      </div>
    );
  }
}
export default Icons;
