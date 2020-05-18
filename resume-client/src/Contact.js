import React, { Component } from 'react';
import axios from 'axios';
import Social from './ui-components/Social';
//import './css/Weather.css';
//import Button from './ui-components/Button';

class Contact extends Component {
constructor(props) {
  super(props);
  this.state = {
    showForm: true,
    showMessage: false
  }
}
/*   submitForm() {
    axios.get(`http://localhost:9000/submitform`,
    {
      method: 'POST',
      body: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    .then(res => {
      console.log(res);
    });
  }

  componentDidMount() {
    this.submitForm();
  } */
  handleInputChange = (event) => {
    const 
      target = event.target,
      name = target.name,
      value = target.value;
      this.setState({
        [name]: value
      });
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.email, this.state.message );
    //form validation
    // validate email before check

    if(this.state.name && this.state.email && this.state.message) {
      axios.post(`http://localhost:9000/sendFormAPI`, {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(res => {
        //console.log(res);
        //const work = res.data;
        this.setState({ 
          resMessage: res.data,
          showForm: false,
          showMessage: true
        });
        alert(this.state.resMessage);
      });
      // clear the form fields

      
    } else {
      console.log('Missing Data');
      alert('Form Error. Missing Data');
    }
  }

  render() { 
    return (
      <div id="contact-wrap" className="inner">
        <h1>Contact Me</h1>
        <div className="contact-pic"></div>
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
        <form id="contact-form">
           {/*  <label for="name">Name</label> */}
            <input // use onChange to store in your state
              onChange={this.handleInputChange}
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required />

            {/* <label for="email">Email</label> */}
              <input
                onChange={this.handleInputChange}
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required />

           {/*  <label for="message">Message</label> */}
              <textarea
                onChange={this.handleInputChange}
                id="message"
                name="message"
                placeholder="Enter your message here"
                rows="3"
                required>
              </textarea>
          <button type="submit" onClick={this.submitForm}>Submit Your Message</button>
        </form >
      </div>
    );
  }
}

export default Contact;
