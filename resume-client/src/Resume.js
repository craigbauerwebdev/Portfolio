import React, { Component } from 'react';
import Button from './ui-components/Button';
import Info from './ResumeComponents/Info';
import Summary from './ResumeComponents/Summary';

class Resume extends Component {
  render() {
    return (
      <div id="resume-wrap" className="inner max-960">
        <div className="button-wrap">
          <Button url="http://craigbauer.nyc/resume/CraigBauerResume.pdf" label="Download PDF Resume" />
          {/* <Button url="http://craigbauer.nyc" label="Download Word Resume" /> */}
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
            <li>React JS</li>
            <li>Redux</li>
            <li>Node JS/ Express</li>
            <li>jQuery</li>
          </ul>
          <ul className="col">
            <li>GIT/ GIT Hub</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
            <li>Shopify</li>
          </ul>
          <ul className="col">
            <li>PhotoShop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Typography</li>
          </ul>
        </div>
        <br />
        <h2>Professional Experience</h2>
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
        
        <div className="job-description group"><h3 className="freelance-title">Freelance Front-End Web Developer/Designer</h3><i className="right">January 2006 – March 2014</i></div>
        <ul>
          <li>Managed multiple freelance web development projects for many clients. Selected projects include:
            <ul>
              <li><b>Spotzot</b>
                <ul>
                  <li>Developed a WordPress website with back-end access to ensure future development and design changes for company employees.</li>
                  <li>Designed a custom WordPress theme based on custom templates, fields, and post types.</li>
                  <li>Developed JavaScript and jQuery components to enable interaction with the site content.</li>
                  <li>Optimized company search engine rankings, increasing visibility and company initiatives.</li>
                </ul>
              </li>
              <li><b>Aaron Max Designs</b>
                <ul>
                  <li>Developed business websites on platforms like WordPress with integrated graphics, utilizing the Adobe Creative Suite and web standards to provide striking graphics and functionality.</li>
                  <li>Utilized Adobe Illustrator to vector hand-drawn logos and graphics.</li>
                  <li>Provided ongoing support and maintenance for the websites, troubleshooting any issues to ensure optimal operational performance.</li>
                </ul>
              </li>  
              <li><b>Others:</b> Coney Island Saucery (2019), Finesse (2015), Hot Sauce Willie’s (2013 – 2015), Chelsea Guitars (2014), Takashi NYC (2013), Mud Village (2012), Mountain Cat Guitars(2011)</li>
            </ul>
          </li>
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
     /*  <Button url="/contact" label="Contact Me" /> */
    );
  }
}

export default Resume;