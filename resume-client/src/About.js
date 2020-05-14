import React, { Component } from 'react';
//import ReactContactForm from 'react-mail-form';


class About extends Component {

  render() {
    return (
      <div id="home-wrap">
        <div className="bio-pic"></div>
        <h1>Hello, My Name is Craig</h1>
        <h2>I'm a Frontend Web Developer</h2>
        <img src="assets/mern.png" className="mern-stack" alt="mern stack" width="100%" />
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
