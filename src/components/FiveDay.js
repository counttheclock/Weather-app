import React, { Component } from 'react'

// Images
import Cloudy from '../WeatherIcons/Cloudy.png';
import PartlyCloudy from '../WeatherIcons/PartlyCloudy.png';
import RainStorm from '../WeatherIcons/RainStorm.png';
import Rainy from '../WeatherIcons/Rainy.png';
import Snowy from '../WeatherIcons/Snowy.png';
import Sunny from '../WeatherIcons/Sunny.png';

export class FiveDay extends Component {
  render() {
    let fade = this.props.fade;
    let output = null;
    const dayDest = (day) => {
      switch (day) {
        case 'Monday':
          return 'Mon';
        case 'Tuesday':
          return "Tues";
        case 'Wednesday':
          return "Wed";
        case 'Thursday':
          return "Thurs"
        case 'Friday':
          return 'Fri';
        case 'Saturday':
          return "Sat";
        case "Sunday":
          return "Sun";
        default:
          return 'N/A'
      }
    }

    // Test for which icon to use
    const iconTest = (weather, description) => {
      switch (weather) {
        case 'Thunderstorm':
          return RainStorm;
        case 'Drizzle':
          return Rainy;
        case 'Rain':
          return Rainy;
        case 'Snow':
          return Snowy;
        case 'Clouds':
          if (description === 'few clouds: 11-25%' || description === 'few clouds') {
            return PartlyCloudy
          } else {
            return Cloudy;
          }
        case 'Clear':
          return Sunny;
        default:
          return Cloudy;
      }
    }

    if (this.props.firstMain === '') {
      output = <div></div>
    } else {
      output = <div>
        <hr className={fade ? "line fadeInUp-2" : "line"} />
        <div className={fade ? "fiveday_heading fadeInUp-3" : "fiveday_heading"}>
          <h1>5 Day Outlook</h1>
        </div>
        <div className={fade ? "fiveday_table_wrapper fadeInUp-4" : "fiveday_table_wrapper"} onAnimationEnd={this.props.fadeFalse}>
          <table className="fiveday_table">
            <tbody>
              <tr>
                <th>{dayDest(this.props.firstDay)}</th>
                <th>{dayDest(this.props.secondDay)}</th>
                <th>{dayDest(this.props.thirdDay)}</th>
                <th>{dayDest(this.props.forthDay)}</th>
                <th>{dayDest(this.props.fifthDay)}</th>
              </tr>
              <tr className="fiveday_table">
                <td><img className="fiveday_icon" src={iconTest(this.props.firstMain, this.props.firstDesc)} alt="FirstWeather" /></td>
                <td><img className="fiveday_icon" src={iconTest(this.props.secondMain, this.props.secondDesc)} alt="SecondWeather" /></td>
                <td><img className="fiveday_icon" src={iconTest(this.props.thirdMain, this.props.thirdDesc)} alt="ThirdWeather" /></td>
                <td><img className="fiveday_icon" src={iconTest(this.props.forthMain, this.props.forthDesc)} alt="ForthWeather" /></td>
                <td><img className="fiveday_icon" src={iconTest(this.props.fifthMain, this.props.fifthDesc)} alt="FifthWeather" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    }
    return (
      <div>
        {output}
      </div>
    )
  }
}

export default FiveDay
