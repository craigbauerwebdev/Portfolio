import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Button from './ui-components/Button';
import CodeExamples from './CodeExamples';
import WebExamples from './WebExamples';
//import SingleExample from './SingleExample';
import Footer from './Footer';
import Header from './Header';
import Login from './Auth/Login.js';
import PrivateRoute from './Auth/PrivateRoute';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Dashboard from './dashboard/Dashboard';
import { AuthProvider } from './Auth/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWork: null,
      codeExamples: null,
      testAPI: []
    };
  }

  callSiteOptions() {
    axios.get(`http://localhost:9000/profileSettings`)
      .then(res => {
        //console.log(res);
        const options = res.data;
        this.setState({ settings: options });
      });
  }

  callMyWorkAPI() {
    axios.get(`http://localhost:9000/myworkAPI`)
      .then(res => {
        //console.log(res);
        const work = res.data;
        this.setState({ webExamples: work });
      });
  }

  callCodeAPI() {
    axios.get(`http://localhost:9000/codeExamplesAPI`)
      .then(res => {
        //console.log(res);
        const code = res.data;
        this.setState({ codeExamples: code });
      });
  }

  componentDidMount(){
    this.callMyWorkAPI();
    this.callCodeAPI();
    this.callSiteOptions();
  }

  render() {
    const {codeExamples, webExamples, settings} = this.state;
    if (codeExamples && webExamples && settings) {
      return ( 
        <div className="App">
          <AuthProvider>
          <Router>
            <Header />
            <p>{this.state.testAPI}</p>
            <Switch>
              <Route exact path="/">
                <About settings={settings[0]} />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/websites">
                <div className="page-title">
                  <h1>Web Sites</h1>
                </div>
                <WebExamples data={this.state.webExamples} />
              </Route>
              <Route path="/code">
                <div className="page-title">
                  <h1>Code Examples</h1>
                </div>
                <CodeExamples data={this.state.codeExamples} />
              </Route>
              <Route path="/contact">
                <Contact settings={settings[0]} />
              </Route>
              <PrivateRoute exact path="/dashboard" settings={settings[0]}
                component={Dashboard}
                /* render={
                    () => {
                      <Dashboard />
                    }
                } */
              />
                {/* <Dashboard settings={settings[0]} /> */}
              {/* </PrivateRoute> */}
              <Route exact path="/login">
                <Login />
              </Route>
              {
                codeExamples.map(function (single, index) {
                  if (single.status === "publish" || single.status === "draft") {
                    const route = "/" + single.slug;
                    const markup =
                      <Route key={index} path={route}>
                        {/* <SingleExample single={single} /> */}
                        <div className="single-code inner">
                          {/* <Link to="/code">back to projects</Link> */}
                          <h1 className="project-title">{single.title.rendered}</h1>
                          <img alt={single.slug} src={single.code_thumb} />
                          <Button url={single.button_url} label="View On GITHUB" type="popup" />
                          <div dangerouslySetInnerHTML={{__html: single.excerpt.rendered}}></div>
                        </div>
                        <div className="related-projects">                    
                          <h2 className="more-projects">More Projects</h2>
                          <CodeExamples data={codeExamples} />
                        </div>
                      </Route>
                    return markup;
                  }
                  return false;
                })
              }
              {
                webExamples.map(function (single, index) {
                  if (single.status === "publish") {
                    const route = "/" + single.slug;
                    const markup =
                      <Route key={index} path={route}>
                        {/* <SingleExample single={single} /> */}
                        <div className="single-code inner">
                          <Link to="/websites">back to projects</Link>
                          <h1 className="project-title">{single.title.rendered}</h1>
                          <Button url={single.link} label="View Project" type="popup" />
                          <div dangerouslySetInnerHTML={{ __html: single.excerpt.rendered }}></div>
                        </div>
                        <div className="related-projects">
                          <h2 className="more-projects">Related Projects</h2>
                          <WebExamples data={webExamples} />
                        </div>
                      </Route>
                    return markup;
                  }
                  return false;
                })
              }
              <Route>
                <h1>404 Page Not Found</h1>
              </Route> 
              {/*Home Route, Weather Route, Todo Route, Bookmark Route*/}
            </Switch>
            {/* <SingleCodeRoutes codeExamples={codeExamples} /> */}
            <Footer settings={settings[0]} />
          </Router>
          </AuthProvider> 
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