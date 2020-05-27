import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Social from './ui-components/Social';
//import { Redirect } from 'react-router-dom';
//import './css/Weather.css';
//import { BrowserRouter as Link } from "react-router-dom";
import Button from './ui-components/Button';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      showMessage: false,
      updating: null,
      showLoader: null,
      showSuccess: null,
      showError: null
    }
  }

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
    /* this.setState({
      redirect: null
    }); */
    if(!this.state.updating) {
      this.setState({
        updating: true
      })
      if(this.state.name && this.state.email && this.state.message) {
        axios.post(`http://localhost:9000/sendFormAPI`, {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
          updating: true
        })
        .then(res => {
          this.setState({ 
            resMessage: res.data,
            showForm: false,
            showMessage: true,
            updating: null
          });
        });
        // clear the form fields 
      } else {
        console.log('Missing Data');
        alert('Form Error. Missing Data, please check that all fieldes are filled out and try again');
        this.setState({
          updating: null
        });
      }
    }
  }

  handleFormReset = () => {
    console.log('reset form');
    this.setState({
      name: null,
      email: null,
      message: null,
      showForm: true,
      showMessage: false
    })
  }

  render() {
    /* if(this.state.redirect === 'success') {
      // eslint-disable-next-line no-unused-expressions
      <Redirect to="/resume" />
    } */
    const { settings } = this.props,
      mailto = "mailto:" + settings.main_email;
    return (
      <div id="contact-wrap" className="inner">
        <h1>Contact Me</h1>
        <div className="profile-card group">
          <div className="contact-pic"></div>
          <div>
            <h2>Craig Bauer</h2>
            <p><b>JavaScript Developer</b></p>
            <p>(347) 742-2411</p>
            <p>
              <a href={mailto}>{settings.main_email}</a>
            </p>
            <Social github={settings.gitHub_url} linkedin={settings.linkedin_url} theme="dark" height="24px" />
          </div>
        </div>
        
        {this.state.showForm &&
        <Fragment>
          <p>or fill out the form below:</p>
          <form id="contact-form">
            {/*  <label for="name">Name</label> */}
            <i>All fields are required</i>
              <input // use onChange to store in your state
                onChange={this.handleInputChange}
                id="name"
                name="name"
                type="text"
                placeholder="Your name*"
                required />

              {/* <label for="email">Email</label> */}
                <input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email*"
                  required />

            {/*  <label for="message">Message</label> */}
                <textarea
                  onChange={this.handleInputChange}
                  id="message"
                  name="message"
                  placeholder="Enter your message here*"
                  rows="3"
                  required>
                </textarea>
            <button type="submit" onClick={this.submitForm}>Submit Your Message</button>
          </form >
        </Fragment>
        }
        {this.state.showMessage &&
        <Fragment>
          <div className="success-message success">{this.state.resMessage}</div>
          <div onClick={this.handleFormReset}>
            <Button label="Send Another Message" />
          </div>
        </Fragment>
        }
      </div>
    );
  }
}

export default Contact;
