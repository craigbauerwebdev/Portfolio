import React, { Component, Fragment } from 'react';

class Summary extends Component {

  render() {
    //const { title, body } = this.props;
    return (
        <Fragment>
            <h2>Skills</h2>
            <div className="group">
                <ul className="col">
                    <li>HTML 5</li>
                    <li>CSS3/ Animation</li>
                    <li>Sass</li>
                    <li>JavaScript ES6</li>
                </ul>
                <ul className="col">
                    <li>AJAX/JSON</li>
                    <li>PHP</li>
                    <li>WordPress</li>
                    <li>WP Rest API</li>
                </ul>
                <ul className="col">
                    <li>React JS</li>
                    <li>Redux</li>
                    <li>Node JS/ Express</li>
                    <li>jQuery</li>
                </ul>
                <ul className="col">
                    <li>GIT/ GIT Hub</li>
                    <li>Bootstrap</li>
                    <li>Foundation</li>
                    <li>Shopify</li>
                </ul>
                <ul className="col">
                    <li>PhotoShop</li>
                    <li>Illustrator</li>
                    <li>InDesign</li>
                    <li>Typography</li>
                </ul>
            </div>
        </Fragment >
    );
  }
}

export default Summary;
