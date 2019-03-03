import React, { Component } from 'react';
import './css/App.css';
import axios from 'axios';
//import DarkSky from 'dark-sky';
import Header from './Header';
import Home from './Home';
import Weather from './Weather';
//import Button from './ui-components/Button';

const ny = `41.115704,-74.149263`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      weather: 'fifty cent'
    };
  }
  
  //https://api.darksky.net/forecast/1ed2786cd16aef53eb5e3a8b23c10a69/41.115704,-74.149263
  componentDidMount(){ //host api on my server - https://cors-anywhere.herokuapp.com/
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1ed2786cd16aef53eb5e3a8b23c10a69/`+ny)
      .then(res => {
        const darkSkyData = res.data;
        this.setState({ weather: darkSkyData });
      })
  }

  log() {
    console.log('xxx');
  }

  render() {

    const today = new Date();
    console.log(today);
    
    if(this.state.weather) {
      return ( 
       
        <div className="App">

                <Header />
                <Home weather={this.state.weather} />
                <Weather weather={this.state.weather} />
                
                {/*Home Route, Weather Route, Todo Route, Bookmark Route*/}


        </div>
      
      );
    } else {
      return 'Loading...'
    }
    
  }
}

export default App;
