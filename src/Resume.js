import React, { Component } from 'react';
import Info from './ResumeComponents/Info';
import './css/Resume.css';


class Resume extends Component {

  render() {
    return (
      <div id="resume-wrap" class="inner">
        <Info />
        <hr />
        <h2>Experience</h2>
        <h3>AVERETT FREE GINSBERG</h3>
        <i>Interactive Web Developer</i>
        <i>March 2014 – September 2015</i>
        <ul>
        	<li>Duty</li>
        	<li>Duty</li>
        	<li>Duty</li>
        	<li>Duty</li>
        	<li>Duty</li>
        </ul>
      </div>
    );
  }

}

export default Resume;
