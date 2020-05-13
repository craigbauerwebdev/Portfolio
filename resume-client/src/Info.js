import React, { Component } from 'react';
import './css/Info.css';
import Button from './ui-components/Button';


class Info extends Component {

  render() {
    return (
      <div id="info-wrap">
        <h3>8 Foxwood Avenue</h3>
        <h3>Suffern, NY 10901</h3>
        <h3>craigbauer23@gmail.com</h3>
        <h3>(347) 742-2411</h3>
      </div>
    );
  }
}

export default Info;
