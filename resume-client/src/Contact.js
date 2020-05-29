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

  componentDidMount() {
    window.scrollTo(0, 0);
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

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  submitForm = (e) => {
    e.preventDefault();
    const validEmail = this.validateEmail(this.state.email);
    console.log("Valid Email: ", validEmail)
    console.log(this.state.name, this.state.email, this.state.message );
    //form validation
    // validate email before check
    /* this.setState({
      redirect: null
    }); */
    if(!this.state.updating) {
      this.setState({
        updating: true
      });
      if(this.state.name && validEmail && this.state.message) {
        console.log('VALID!', validEmail)
        if (validEmail) {
          console.log('email is not valid');
        }
        this.setState({
          showLoader: true
        })
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
            updating: null,
            showLoader: null
          });
        });
      } else {
        const 
          linebreak = '\r\n',
          doubleLine = '\r\n \r\n';
        let 
          errorMessage = "The following issues were found with your submission:";
          errorMessage += doubleLine;
        if(!this.state.name) {
          errorMessage += "- Missing Name";
          errorMessage += linebreak;
        }
        if(!validEmail) {
          errorMessage += "- Missing or Invalid Email";
          errorMessage += linebreak;
        }
        if(!this.state.message) {
          errorMessage += "- Missing Message";
        }
        errorMessage += doubleLine;
        errorMessage += "Please check your fields and try again.";
        errorMessage += linebreak;
        alert(errorMessage);
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
            <div className="group">
              <button className="left" type="submit" onClick={this.submitForm}>Submit Your Message</button>
              {this.state.showLoader &&
                <div className="loader-wrap left">
                  <div className="loader"></div>
                </div>
              }
            </div>
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
