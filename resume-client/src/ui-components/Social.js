import React, { Component, Fragment } from 'react';

class Social extends Component {
  render() {
    const { theme, height, github, linkedin } = this.props,
    styles = {
        height: height || '24px',
        margin: '0 10px 0 10px'
    };
    let markup;
    if(theme === "dark") {
        markup = 
            <Fragment>
            <a href={github} rel="noopener noreferrer" target="_blank">
                <img style={styles} alt="github-icon" src={`${process.env.PUBLIC_URL}/assets/github-dark.png`} />
                </a>
            <a href={linkedin} rel="noopener noreferrer" target="_blank">
                <img style={styles} alt="linkedin-icon" src={`${process.env.PUBLIC_URL}/assets/linkedin-dark.png`} />
                </a>
            </Fragment>
    } else {
        markup =
            <Fragment>
            <a href={github} rel="noopener noreferrer" target="_blank">
                <img style={styles} alt="github-icon" src={`${process.env.PUBLIC_URL}/assets/github.png`} />
                </a>
            <a href={linkedin} rel="noopener noreferrer" target="_blank">
                <img style={styles} alt="linkedin-icon" src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} />
                </a>
            </Fragment>
    }
    return (
    <div className="social-icons">
        {markup}
    </div>
    );
  }
}

export default Social;