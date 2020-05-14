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
      date: new Date(),
      weather: '',
      codeData: '',
      testAPI: ''
    };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ testAPI: res }));
      /* .catch((error) => {
        this.setState(
          { testAPI: error }
        )
      }); */
  }

  componentDidMount(){
/*    axios.get(`https://api.darksky.net/forecast/1ed2786cd16aef53eb5e3a8b23c10a69/`+ny)
      .then(res => {
        const darkSkyData = res.data;
        this.setState({ weather: darkSkyData });
      });*/

    axios.get(`https://cors-anywhere.herokuapp.com/http://craigbauer.nyc/wp-json/wp/v2/code/`)
    .then(res => {
        const codeData = res.data;
        console.log(res.data);
        this.setState({ codeData: codeData });
      });
    this.callAPI();

  }

  render() {

    const today = new Date();
    console.log(today);
    
    if(this.state.codeData) {
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
              {this.state.codeData.map(function (single, index) {
                  if( single.status === "publish" || single.status === "draft" ) {
                    const route = "/" + single.slug;
                    console.log("Single: ", single);
                    //const codestring = single.content.rendered;
                    /* const cleanString = codestring
                      .replace(/<pre class="wp-block-code"><code>/g, '')
                      .replace(/<\/code><\/pre>/g, '') */
                      //.replace(/&lt;/g, '<');
                    const markup =
                      <Route key={index} path={route}>
                        <div className="single-code">
                          <Link to="/code">back to projects</Link>
                          <h1 className="project-title">{single.title.rendered}</h1>
                          <Button url="http://craigbauer.nyc" label="View On GITHUB" />
                          {/* <SyntaxHighlighter language="jsx" style={docco}>
                            {cleanString}
                          </SyntaxHighlighter> */}
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
