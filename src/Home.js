import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import './css/Home.css';
//import Button from './ui-components/Button';
import Weather from './Weather';

class Home extends Component {

  render() {
    return (
      <div id="home-wrap">
        <h1>Home Route</h1>
        {/*<ReactContactForm to="craigbauer23@gmail.com" />*/}
        <Weather weather={this.props.weather} />
      </div>
    );
  }

}

export default Home;
