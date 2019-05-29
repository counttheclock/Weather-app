import React, { Component } from 'react'
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import WeatherDescription from './WeatherDescription';
import FiveDay from './FiveDay';
import key from '../utils/key';
import json from '../country_codes.json';


class MainCard extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      zipCode: '',
      selected: 'US',
      currentMain: '',
      currentDesc: '',
      currentTemp: '',
      firstMain: '',
      firstDesc: '',
      firstHigh: '',
      secondMain: '',
      secondDesc: '',
      secondHigh: '',
      thirdMain: '',
      thirdDesc: '',
      thirdHigh: '',
      forthMain: '',
      forthDesc: '',
      forthHigh: '',
      fifthMain: '',
      fifthDesc: '',
      fifthHigh: ''
    };
  }

  componentDidMount() {
    this.setState({ countries: json })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getWeather = async (e) => {
    e.preventDefault();

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.selected}&APPID=${key.key}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          currentMain: data.weather[0].main,
          currentTemp: data.main.temp,
          currentDesc: data.weather[0].description
        })
      )
      .catch(err => console.log(err))

    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},${this.state.selected}&APPID=${key.key}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          firstMain: data.list[3].weather[0].main,
          firstHigh: data.list[3].main.temp_max,
          firstDesc: data.list[3].weather[0].description,
          secondMain: data.list[11].weather[0].main,
          secondDesc: data.list[11].weather[0].description,
          secondHigh: data.list[11].main.temp_max,
          thirdMain: data.list[19].weather[0].main,
          thirdDesc: data.list[19].weather[0].description,
          thirdHigh: data.list[19].main.temp_max,
          forthMain: data.list[27].weather[0].main,
          forthDesc: data.list[27].weather[0].description,
          forthHigh: data.list[27].main.temp_max,
          fifthMain: data.list[35].weather[0].main,
          fifthDesc: data.list[35].weather[0].description,
          fifthHigh: data.list[35].main.temp_max
        })
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="main_card">
        <Search
          getWeather={this.getWeather}
          onChange={this.onChange}
          selected={this.state.selected}
          zipCode={this.state.zipCode}
          countries={this.state.countries}
        />
        <CurrentWeather
          currentMain={this.state.currentMain}
          currentTemp={this.state.currentTemp}
          currentDesc={this.state.currentDesc}
        />
        <WeatherDescription currentDesc={this.state.currentDesc} />
        <FiveDay
          firstMain={this.state.fifthMain}
          secondMain={this.state.secondMain}
          thirdMain={this.state.thirdMain}
          forthMain={this.state.forthMain}
          fifthMain={this.state.fifthMain}
        />
      </div>
    )
  }
}

export default MainCard
