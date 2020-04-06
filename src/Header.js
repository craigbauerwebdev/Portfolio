import React, { Component } from 'react';
import './css/Header.css';
import Button from './ui-components/Button';
import Icons from './ui-components/Icons';
//import Logo from 'process.env.PUBLIC_URL + 'assets/CB-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header">
          <img height="100" src={process.env.PUBLIC_URL + 'assets/CB-logo.png'} />
          <Icons showButtons={true} />
        </header>
      </div>
    );
  }
}
export default Header;