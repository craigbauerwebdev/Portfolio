import React, { Component } from 'react';
import './css/App.css';
import DarkSky from 'dark-sky';
import Header from './Header';
import Home from './Home';
//import Button from './ui-components/Button';

class App extends Component {

  log() {
    console.log('xxx');
  }

  render() {
    const 
      darksky = new DarkSky('1ed2786cd16aef53eb5e3a8b23c10a69');
      darksky.options({
          latitude: 41.115704,
          longitude: -74.149263,
          //time: '2017-08-10',
          language: 'en',
          //exclude: ['minutely', 'daily'],
          extendHourly: true
      })
      .get()
      .then(console.log)
    console.log(darksky);

    //console.log( darkSky.getCurrentConditions() );

    const today = new Date();
    console.log(today);
    
    return (
      <div className="App">

              <Header />
              <Home darksky={darksky} />
              {/*<Weather />*/}
              
              {/*Home Route, Weather Route, Todo Route, Bookmark Route*/}


      </div>
    );
  }
}

export default App;
