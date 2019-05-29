import React, { Component } from 'react'

// Images
// import Night from '../WeatherIcons/Cloudy-Night.png';
import Cloudy from '../WeatherIcons/Cloudy.png';
import PartlyCloudy from '../WeatherIcons/PartlyCloudy.png';
import RainStorm from '../WeatherIcons/RainStorm.png';
import Rainy from '../WeatherIcons/Rainy.png';
import Snowy from '../WeatherIcons/Snowy.png';
import Sunny from '../WeatherIcons/Sunny.png';

export class FiveDay extends Component {
  render() {
    return (
      <div>
        <hr className="line" />
        <div className="fiveday_heading">
          <h1>5 Day Outlook</h1>
        </div>
        <div className="fiveday_table_wrapper">
          <table className="fiveday_table">
            <tbody>
              <tr>
                <th>Sat</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tues</th>
                <th>Wed</th>
              </tr>
              <tr>
                <td><img className="fiveday_icon" src={PartlyCloudy} alt="PartlyCloudy" /></td>
                <td><img className="fiveday_icon" src={PartlyCloudy} alt="PartlyCloudy" /></td>
                <td><img className="fiveday_icon" src={PartlyCloudy} alt="PartlyCloudy" /></td>
                <td><img className="fiveday_icon" src={PartlyCloudy} alt="PartlyCloudy" /></td>
                <td><img className="fiveday_icon" src={PartlyCloudy} alt="PartlyCloudy" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FiveDay
