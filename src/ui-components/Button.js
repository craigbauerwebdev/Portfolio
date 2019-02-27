import React, { Component } from 'react';
import '../css/Button.css';

class Button extends Component {

  render() {
    const
      {url, label} = this.props;

    return (
      <a href={url}><button>{label}</button></a>
    );
  }
}

export default Button;
