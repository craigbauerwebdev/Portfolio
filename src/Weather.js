import React, { Component } from 'react';
import './css/Weather.css';
//import Button from './ui-components/Button';

class Weather extends Component {

  componentDidMount() {
    
        //print = document.getElementById('theDate');
        

    }

  render() {

    let 
      date = new Date(),
      thisYear = date.getFullYear(),
      num = date.getDate(),
      month = date.getMonth(),
      day = date.getDay(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds(),
      ms = date.getMilliseconds();
      //check to see the time of day
      if (hour <= 10) {
        console.log('Good Morning');
      } else if (hour <= 16) {
        console.log('Good Afternoon');
      } else {
        console.log('Good Evening');
      }
      //Arrays for converting index returned
    const 
      weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      day = weekDays[day];
      month = months[month];
    const fullDate = day + ' ' + month + ' ' + num +', ' + thisYear;
    
    return (
      <div id="weather-wrap">

        <h1>Weather Component:</h1>
        <p>{day}</p>
        <p>{month}</p>

      </div>
    );
  }
}

export default Weather;
