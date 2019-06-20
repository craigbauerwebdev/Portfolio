import React, { Component } from 'react';
import './css/Info.css';
import Button from './ui-components/Button';


class Info extends Component {

  render() {
    return (
      <div id="info-wrap">
        <h2>8 Foxwood Avenue</h2>
        <h2>Suffern, NY 10901</h2>
        <h2>craigbauer23@gmail.com | (347) 742-2411</h2>
        <Button url="http://craigbauer.nyc" label="Download PDF Resume" />
        <Button url="http://craigbauer.nyc" label="Download Word Resume" />
      </div>
    );
  }
}

export default Info;
