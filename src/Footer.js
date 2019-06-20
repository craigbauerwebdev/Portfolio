import React, { Component } from 'react';
import './css/Header.css';
import Button from './ui-components/Button';
//import Logo from 'process.env.PUBLIC_URL + 'assets/CB-logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="header">
        <footer className="header">
          <div className="nav-icons center">
            {/* Make Routes */}
            /*Make Icons Component*/
            <i className="large material-icons">home</i>
            <i className="large material-icons">list_alt</i>
            <i className="large material-icons">wb_sunny</i>
            <i className="large material-icons">code</i>
            <i className="large material-icons">mail_outline</i>
          </div>
            <div className="button-wrap">
              <Button url="http://craigbauer.nyc" label="Download PDF Resume" />
              <Button url="http://craigbauer.nyc" label="Download Word Resume" />
            </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
