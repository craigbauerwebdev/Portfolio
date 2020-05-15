import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Button from './ui-components/Button';
import CodeExamples from './CodeExamples';
//import DarkSky from 'dark-sky';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWork: null,
      codeData: null,
      testAPI: []
    };
  }

  callMyWorkAPI() {
    axios.get(`http://localhost:9000/myworkAPI`)
      .then(res => {
        //console.log(res);
        const work = res.data;
        this.setState({ myWork: work });
      });
  }

  callCodeAPI() {
    axios.get(`http://localhost:9000/codeAPI`)
      .then(res => {
        //console.log(res);
        const code = res.data;
        this.setState({ codeExamples: code });
      });
  }

  componentDidMount(){
    /* axios.get(`https://cors-anywhere.herokuapp.com/http://craigbauer.nyc/wp-json/wp/v2/web/`)
      .then(res => {
        const websites = res.data;
        this.setState({ web: websites });
      }); */

    axios.get(`https://cors-anywhere.herokuapp.com/http://craigbauer.nyc/wp-json/wp/v2/code/`)
    .then(res => {
        const codeData = res.data;
        console.log(res.data);
        this.setState({ codeData: codeData });
      });
    this.callMyWorkAPI();
    this.callCodeAPI();
  }

  render() {
    const {codeData, myWork} = this.state;
    if (codeData && myWork) {
      return ( 
        <div className="App">
          <Router>
            <Header />
            <p>{this.state.testAPI}</p>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/code">
                <CodeExamples data={this.state.codeData} />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              {/* <SingleCodeRoutes data={codeData} /> */}
              {codeData.map(function (single, index) {
                  if( single.status === "publish" || single.status === "draft" ) {
                    const route = "/" + single.slug;
                    //console.log("Single: ", single);
                    const markup =
                      <Route key={index} path={route}>
                        <div className="single-code">
                          <Link to="/code">back to projects</Link>
                          <h1 className="project-title">{single.title.rendered}</h1>
                          <Button url={ single.button_url } label="View On GITHUB" type="popup" />
                        </div> 
                      </Route>
                      return markup;
                  } 
                  return false;
              })}
              <Route>
                <h1>404 Page Not Found</h1>
              </Route>  
              {/*Home Route, Weather Route, Todo Route, Bookmark Route*/}
            </Switch>
            <Footer />
          </Router>
        </div>
      );
    } else {
      return (
        <div className="loading-screen">
          <div className="loader-wrap center">
            <div className="loader"></div>
            <p>Just a second</p>
          </div>
        </div>
      );
    }
    
  }
}

export default App;