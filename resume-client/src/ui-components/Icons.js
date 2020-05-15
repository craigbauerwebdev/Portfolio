import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Button from './Button';

class Icons extends Component {
  render() {
    const { showButtons } = this.props;
    return (
      <div>
        <div className="nav-icons center">
          {/* Make Routes */}
          <Link to="/">
            <i className="large material-icons">home</i>
          </Link>
          <Link to="/resume" title="Resume">
            <i className="large material-icons">list_alt</i>
          </Link>
          <Link to="/code">
            <i className="large material-icons">code</i>
          </Link>
          <Link to="/contact">
            <i className="large material-icons">mail_outline</i>
          </Link>       
        </div>
        <Switch>
          <Route exact path="/resume">
            {showButtons && <div className="button-wrap">
              <Button url="http://craigbauer.nyc" label="Download PDF Resume" />
              <Button url="http://craigbauer.nyc" label="Download Word Resume" />
            </div>}
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Icons;
