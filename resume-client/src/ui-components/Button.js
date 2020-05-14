import React, { Component } from 'react';

class Button extends Component {

  handlePopup(url) {
    console.log('popup');
    window.open(url, 'github', 'height=600,width=960,toolbar=0,menubar=0,location=0');
  }

  handleDownload(url) {
    console.log(url, 'download file here');
  }

  render() {
    const
      {url, label, type } = this.props;
    // Button Types: Popup, download
    if (type === 'popup') {
      return (
        <div onClick={ () => {this.handlePopup(url)} }><button>{label}</button></div>
      );
    } else if (type === 'download') {
      return (
        <div onClick = { () => { this.handleDownload(url)} }> <button>{label}</button></div >
      );
    } else {
      return (
        <a href={url} target="_blank"><button>{label}</button></a>
      );
    }
  }
}

export default Button;