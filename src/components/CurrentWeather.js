import React, { Component } from 'react'

// Images
// import Night from '../WeatherIcons/Cloudy-Night.png';
import Cloudy from '../WeatherIcons/Cloudy.png';
import PartlyCloudy from '../WeatherIcons/PartlyCloudy.png';
import RainStorm from '../WeatherIcons/RainStorm.png';
import Rainy from '../WeatherIcons/Rainy.png';
import Snowy from '../WeatherIcons/Snowy.png';
import Sunny from '../WeatherIcons/Sunny.png';

class CurrentWeather extends Component {
  render() {
    let icon = null;
    switch (this.props.currentMain) {
      case 'Thunderstorm':
        icon = <img src={RainStorm} alt="Storm" />;
        break;
      case 'Drizzle':
        icon = <img src={Rainy} alt="Rainy" />;
        break;
      case 'Rain':
        icon = <img src={Rainy} alt="Rainy" />;
        break;
      case 'Snow':
        icon = <img src={Snowy} alt="Snowy" />;
        break;
      case 'Clouds':
        if (this.props.currentDesc === 'few clouds: 11-25%' || this.props.currentDesc === 'few clouds') {
          icon = <img src={PartlyCloudy} alt="PartlyCloudy" />;
        } else {
          icon = <img src={Cloudy} alt="Cloudy" />;
        }
        break;
      case 'Clear':
        icon = <img src={Sunny} alt="Sunny" />;
        break;
      default:
        icon = <img src={Cloudy} alt="Cloudy" />;
    }
    return (
      <div className="icon_temp_display">
        <div className="icon">{icon}</div>
        <div className="temp">{72}&#176;</div>
      </div>
    )
  }
}

export default CurrentWeather
