import React, { Component } from 'react';
import Button from './ui-components/Button';
import Info from './ResumeComponents/Info';
import Summary from './ResumeComponents/Summary';

class Resume extends Component {
  render() {
    return (
      <div id="resume-wrap" className="inner max-960">
        <div className="button-wrap">
          <Button url="http://craigbauer.nyc" label="Download PDF Resume" />
          <Button url="http://craigbauer.nyc" label="Download Word Resume" />
        </div>
        <Info />
        <hr />
        <Summary title="Summary" body="Web Developer with over 10 years of experience in website design and implementation, desktop/ mobile web application development, and the completion of hundreds of complex web applications." />
        <br />
        <h2>Skills</h2>
        <div className="group">
          <ul className="col">
            <li>HTML 5</li>
            <li>CSS3/ Animation</li>
            <li>Sass</li>
            <li>JavaScript ES6</li>
          </ul>
          <ul className="col">
            <li>AJAX/JSON</li>
            <li>PHP</li>
            <li>WordPress</li>
            <li>WP Rest API</li>
          </ul>
          <ul className="col">
            <li>skills here</li>
          </ul>
          <ul className="col">
            <li>skills here</li>
          </ul>
          <ul className="col">
            <li>skills here</li>
          </ul>
        </div>
        <br />
        <h2>Experience</h2>
        <h3>Townsquare Media</h3>
        <p className="job-description group"><i className="left">Front End Web Developer</i><i className="right">September 2015 – March 2020</i></p>
        <ul>
          <li>Operated as part of a team of engineers to develop projects using React JS, JavaScript ES 6, Node JS, Express, WordPress and Web Pack in an agile environment for a large web platform consisting of desktop, and mobile that powered 600+ well optimized media web sites.</li>
          <li>Developed a custom Google AMP platform that supports thousands of blog posts across over 600 sites in React JS and Node JS.</li>
          <li>Developed and supported interactive and technically sophisticated HTML 5 rich media ads using JavaScript, AJAX, YouTube API, Facebook Live API, RSS, custom APIs and many other 3rd party APIs.</li>
          <li>Created embed codes and launch files for launching ads with custom options and creatives in Google Ad Manager and Native Apps which were user friendly with great speed and scalability.</li>
          <li>Created interactive Dashboards and internal tools in React JS and PHP for managing and displaying Parse databases and JSON data.</li>
          <li>Developed dozens of WordPress plugins to customize the WordPress dashboard and Rest data.</li>
        </ul>
        <br />
        <h3>Averett Free Ginsberg</h3>
        <p className="job-description group"><i className="left">Interactive Web Developer</i><i className="right">March 2014 – September 2015</i></p>
        <ul>
          <li>Created web content for a large client base, including web applications, games, and front-end development to ensure a polished and functional final product.</li>
          <li>Coordinated with a team of 4 web developers, delegating tasks to ensure the timely and accurate completion of large projects.</li>
          <li>Promoted mobile OS compatibility by developing web content and applications within mobile applications, ensuring a seamless migration to desktop operating systems.</li>
          <li>Utilized HTML5, jQuery, and CSS3 to design interactive and animated media banners and ads.</li>
          <li>Adjusted website components to ensure optimal performance and functionality, establishing cross-browser compatibility and reducing image sizes and http requests to reduce loading times.</li>
          <li>Develop and manage web content using WordPress, JavaScript, jQuery, jQuery Mobile, PHP, HTML5, CSS3, Bootstrap, Angular JS, Mezzanine, Sass and GIT.</li>
        </ul>
        <br />
        
        <p className="job-description group"><h3 className="freelance-title">Freelance Front-End Web Developer/Designer</h3><i className="right">January 2006 – March 2014</i></p>
        <ul>
          <li>Stuff</li>
          <li></li>
        </ul>
        <h2>Education</h2>
        <h3>Coursework in Communications Design and Web Development, 2011 – 2013</h3>
        <ul>
          <li>New York City College of Technology
            <ul>
              <li>Relevant Coursework: Computer Science, Responsive Web Design, Communication Design etc.</li>
            </ul>
          </li>
        </ul>
        <h3>Associate of Applied Science in Web Development, 2011</h3>
        <ul>
          <li>Kingsborough Community College</li>
        </ul>
      </div>
    );
  }
}

export default Resume;