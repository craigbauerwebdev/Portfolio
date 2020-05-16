import React, { Component } from 'react';
import Social from './ui-components/Social';
//import './css/Weather.css';
//import Button from './ui-components/Button';

class Contact extends Component {

/*   submitForm() {
    axios.get(`http://localhost:9000/submitform`,
    {
      method: 'POST',
      body: {
        name: 'Craig',
        email: 'eee',
        message: 'mmm'
      }
    })
    .then(res => {
      console.log(res);
    });
  }

  componentDidMount() {
    this.submitForm();
  } */

  render() { 
    return (
      <div id="contact-wrap" className="inner">
        <h1>Contact Me</h1>
        <div className="bio-pic"></div>
        <div>
          <h2>Craig Bauer</h2>
          <p><b>JavaScript Developer</b></p>
          <p>(347) 742-2411</p>
          <p>
            <a href="mailto:craigbauer23@gmail.com">craigbauer23@gmail.com</a>
          </p>
        </div>
        <Social theme="dark" height="24px" />
        <p>or fill out the form below:</p>
        <form action="http://localhost:9000/submitform" id="contact-form" method="post">
           {/*  <label for="name">Name</label> */}
            <input // use onChange to store in your state
              
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required />

            {/* <label for="email">Email</label> */}
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Your email"
                required />

           {/*  <label for="message">Message</label> */}
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                rows="3"
                required>
              </textarea>
              <button type="submit">Submit Your Message</button>
        </form >
      </div>
    );
  }
}

export default Contact;
