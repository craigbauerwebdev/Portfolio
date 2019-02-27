import React, { Component } from 'react';
import './css/Home.css';
//import Button from './ui-components/Button';

class Home extends Component {

  render() {
    const ds = this.props.darksky.options({
          latitude: 41.115704,
          longitude: -74.149263,
          //time: '2017-08-10',
          language: 'en',
          //exclude: ['minutely', 'daily'],
          extendHourly: true
      })
      .get()
      .then()

      console.log('Darksky', ds);
    return (
      <div className="home-route">

        <h1>Home Route</h1>

      </div>
    );
  }
}

export default Home;
