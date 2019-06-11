import React, { Component } from 'react'


// Images
import Night from '../WeatherIcons/Cloudy-Night.png';
import Cloudy from '../WeatherIcons/Cloudy.png';
import PartlyCloudy from '../WeatherIcons/PartlyCloudy.png';
import RainStorm from '../WeatherIcons/RainStorm.png';
import Rainy from '../WeatherIcons/Rainy.png';
import Snowy from '../WeatherIcons/Snowy.png';
import Sunny from '../WeatherIcons/Sunny.png';

class CurrentWeather extends Component {
  render() {
    let fade = this.props.fade;
    let icon = null;
    let display = null;
    let temp = Math.round((this.props.currentTemp - 273.15) * 9 / 5 + 32);

    // Test for which icon to use
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
        if (this.props.night) {
          icon = <img src={Night} alt="Night" />
        } else {
          if (this.props.currentDesc === 'few clouds: 11-25%' || this.props.currentDesc === 'few clouds') {
            icon = <img src={PartlyCloudy} alt="PartlyCloudy" />;
          } else {
            icon = <img src={Cloudy} alt="Cloudy" />;
          }
        }
        break;
      case 'Clear':
        if (this.props.night) {
          icon = <img src={Night} alt="ClearNight" />
        } else {
          icon = <img src={Sunny} alt="Sunny" />;
        }
        break;
      default:
        icon = <img src={Cloudy} alt="Cloudy" />;
    }

    // Don't display unless user has searched for something
    if (this.props.currentMain === '') {
      display = <div></div>
    } else {
      display = <div>
        <div className={fade ? 'fadeInUp icon' : 'icon'}>{icon}</div>
        <div className={fade ? 'fadeInUp temp' : 'temp'}>{temp}&#176;</div>
      </div>
    }


    return (
      <div>
        <div className="icon_temp_display">
          {display}
        </div>
      </div>
    )
  }
}

export default CurrentWeather
