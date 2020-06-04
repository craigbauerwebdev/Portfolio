import React, { Component } from 'react';
//import ReactContactForm from 'react-mail-form';


class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { settings } = this.props;
    return (
      <div id="about-wrap" className="inner">
        <div className="bio-pic"></div>
        <h1>{settings.bio_intro}</h1>
        <h2>I'm a Frontend Web Developer</h2>
        <img src="http://craigbauer.nyc/wp-content/uploads/2020/06/mern.png" className="mern-stack" alt="mern stack" width="100%" />
        <div className="bio">
          <p>{settings.bio}</p>
        </div>
        {/*<ReactContactForm to="craigbauer23@gmail.com" />*/}
       {/*  <Weather weather={this.props.weather} /> */}
      </div>
    );
  }

}

export default About;
