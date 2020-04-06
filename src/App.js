import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
//import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import axios from 'axios';
//import DarkSky from 'dark-sky';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Weather from './Weather';
import CodeExamples from './CodeExamples';
import './css/App.css';

//SyntaxHighlighter.registerLanguage('jsx', jsx);

const ny = `41.115704,-74.149263`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      weather: '',
      codeData: '',
      //testAPI: ''
    };
  }

  /*callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ testAPI: res }));
  }*/

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
    //this.callAPI();

  }

  render() {

    const today = new Date();
    console.log(today);
    
    if(this.state.codeData) {
      return ( 
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/weather">
                <Weather weather={this.state.weather} />
              </Route>
              <Route path="/code">
                <CodeExamples data={this.state.codeData} />
              </Route>
              {this.state.codeData.map(function (single, index) {
                  if( single.status === "publish" ) {
                    const route = "/" + single.slug;
                    const codestring = single.content.rendered;
                    const cleanString = codestring
                      .replace(/<pre class="wp-block-code"><code>/g, '')
                      .replace(/<\/code><\/pre>/g, '')
                      //.replace(/&lt;/g, '<');
                    const markup =
                      <Route key={index} path={route}>
                        <pre>
                          <div className="single-code">
                            <Link to="/code">back to projects</Link>
                            <div className="project-title">{single.title.rendered}</div>
                            <SyntaxHighlighter language="jsx" style={docco}>
                              {cleanString}
                            </SyntaxHighlighter>
                          </div>
                        </pre>
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
      return 'Loading...'
    }
    
  }
}

export default App;
