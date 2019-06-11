import React, { Component } from 'react'

class WeatherDescription extends Component {
  render() {
    let fade = this.props.fade;
    let temp = Math.round((this.props.currentHigh - 273.15) * 9 / 5 + 32);
    let output = null;
    let speed = null

    // Set wind speed 
    if (this.props.windSpeed !== '') {
      speed = Math.round((this.props.windSpeed * (3600 / 1609.344)));
    }

    // Only render once user has searched for something
    if (this.props.currentDesc === '') {
      output = <div></div>
    } else {
      output = <div className={fade ? "weather_desc fadeInUp-1" : "weather_desc"}>{this.props.currentDesc}. High {temp}F. Wind Speeds Around {speed} <span className="lowercase">mph.</span></div>
    }
    return (
      <div>
        {output}
      </div>
    )
  }
}

export default WeatherDescription
