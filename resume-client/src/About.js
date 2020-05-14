import React, { Component } from 'react';
//import ReactContactForm from 'react-mail-form';
import './css/About.css';
//import Button from './ui-components/Button';
//import Weather from './Weather';

class About extends Component {

  render() {
    return (
      <div id="home-wrap">
        <div className="me"></div>
        <h1>Hello, My Name is Craig</h1>
        <h2>I'm a Frontend Web Developer</h2>
        <div className="bio">
          <p>The default interactive shell is now zsh.
          To update your account to use zsh, please run `chsh -s /bin/zsh`.
          For more details, please visit https://support.apple.com/kb/HT208050.
          MacBook-Pro:resume-client craigbauer$ cd ..
          MacBook-Pro:resume craigbauer$ cd api
          MacBook-Pro:api craigbauer$ npm start</p>
        </div>
        {/*<ReactContactForm to="craigbauer23@gmail.com" />*/}
       {/*  <Weather weather={this.props.weather} /> */}
      </div>
    );
  }

}

export default About;
