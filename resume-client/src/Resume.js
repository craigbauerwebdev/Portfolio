import React, { Component } from 'react';
import Info from './ResumeComponents/Info';
import Summary from './ResumeComponents/Summary';

class Resume extends Component {
  render() {
    return (
      <div id="resume-wrap" className="inner max-960">
        <Info />
        <hr />
        <Summary title="Summary" body="Web Developer with over 10 years of experience in website design and implementation, desktop/ mobile web application development, and the completion of hundreds of complex web applications." />
        <h2>Experience</h2>
        <h3>Townsquare Media</h3>
        <p className="job-description group"><i className="left">Interactive Web Developer</i><i className="right">September 2015 – March 2020</i></p>
        <ul>
          <li>Operated as part of a team of engineers to develop projects using React JS, JavaScript ES 6, Node JS, Express, WordPress and Web Pack in an agile environment for a large web platform consisting of desktop, and mobile that powered 600+ well optimized media web sites.</li>
          <li>Developed a custom Google AMP platform that supports thousands of blog posts across over 600 sites in React JS and Node JS.</li>
          <li>Developed and supported interactive and technically sophisticated HTML 5 rich media ads using JavaScript, AJAX, YouTube API, Facebook Live API, RSS, custom APIs and many other 3rd party APIs.</li>
          <li>Created embed codes and launch files for launching ads with custom options and creatives in Google Ad Manager and Native Apps which were user friendly with great speed and scalability.</li>
        	<li>Duty</li>
        </ul>

        <h3>Averett Free Ginsberg</h3>
        <p className="job-description group"><i className="left">Interactive Web Developer</i><i className="right">March 2014 – September 2015</i></p>
        <ul>
          <li>Operated as part of a team of engineers to develop projects using React JS, JavaScript ES 6, Node JS, Express, WordPress and Web Pack in an agile environment for a large web platform consisting of desktop, and mobile that powered 600+ well optimized media web sites.</li>
          <li>Developed a custom Google AMP platform that supports thousands of blog posts across over 600 sites in React JS and Node JS.</li>
          <li>Developed and supported interactive and technically sophisticated HTML 5 rich media ads using JavaScript, AJAX, YouTube API, Facebook Live API, RSS, custom APIs and many other 3rd party APIs.</li>
          <li>Created embed codes and launch files for launching ads with custom options and creatives in Google Ad Manager and Native Apps which were user friendly with great speed and scalability.</li>
          <li>Duty</li>
        </ul>
      </div>
    );
  }

}

export default Resume;