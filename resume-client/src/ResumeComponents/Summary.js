import React, { Component, Fragment } from 'react';

class Summary extends Component {

  render() {
      const { title, body } = this.props;
    return (
        <Fragment>
            <div className="section-title">
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
        </Fragment >
    );
  }
}

export default Summary;
