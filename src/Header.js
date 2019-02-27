import React, { Component } from 'react';
import './css/Header.css';
import Button from './ui-components/Button';

class Header extends Component {

  render() {
    
    return (
      <div className="header">

        <header className="header group">
          <h1 style={{float: 'left'}}>My Dash</h1>
          <div style={{textAlign: 'right', float: 'right'}}>
           {/* <Button url="/home" label="Home" />
            <Button url="/weather" label="Weather" />
            <Button url="/list" label="Todos" />*/}
            <i className="large material-icons">home</i>
            <i className="large material-icons">wb_sunny</i>
            <i className="large material-icons">check_circle</i>
          </div>
        </header>

      </div>
    );
  }
}

export default Header;
