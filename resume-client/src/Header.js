import React, { Component } from 'react';
import Button from './ui-components/Button';
import Icons from './ui-components/Icons';
import { Link } from "react-router-dom";
//import Logo from 'process.env.PUBLIC_URL + 'assets/CB-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header">
          <Link to="/">
            <img height="100" src={process.env.PUBLIC_URL + 'assets/CB-logo.png'} />
          </Link>
          <Icons showButtons={true} />
        </header>
      </div>
    );
  }
}
export default Header;
