import React, { Component, Fragment } from 'react';

class Social extends Component {
  render() {
    const { theme, height } = this.props,
    styles = {
        height: height || '24px',
        margin: '0 10px 0 10px'
    };
    let markup;
    if(theme === "dark") {
        markup = 
            <Fragment>
                <img style={styles} alt="github-icon" src="/assets/github-dark.png" />
                <img style={styles} alt="linkedin-icon" src="/assets/linkedin-dark.png" />
            </Fragment>
    } else {
        markup =
            <Fragment>
                <img style={styles} alt="github-icon" src="/assets/github.png" />
                <img style={styles} alt="linkedin-icon" src="/assets/linkedin.png" />
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