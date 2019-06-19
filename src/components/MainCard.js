import React, { Component } from 'react'
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import WeatherDescription from './WeatherDescription';
import FiveDay from './FiveDay';
import Error from './Error';
import Loader from './Loader';
import CallToAction from './CallToAction';
import productionkeys from '../utils/productionkeys';
// import key from '../utils/key';
import json from '../country_codes.json';
import moment from 'moment-timezone'

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
      currentHigh: '',
      lat: '',
      long: '',
      sunrise: '',
      night: false,
      sunset: '',
      currentTime: '',
      windSpeed: '',
      firstMain: '',
      firstDesc: '',
      firstHigh: '',
      firstDay: '',
      secondMain: '',
      secondDesc: '',
      secondHigh: '',
      secondDay: '',
      thirdMain: '',
      thirdDesc: '',
      thirdHigh: '',
      thirdDay: '',
      forthMain: '',
      forthDesc: '',
      forthHigh: '',
      forthDay: '',
      fifthMain: '',
      fifthDesc: '',
      fifthHigh: '',
      fifthDay: '',
      fade: false,
      error: false,
      loading: false,
      initial: true
    };
  }

  componentDidMount() {
    this.setState({ countries: json })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  startLoader = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false })
    }, 500);
    this.setState({ fade: true, initial: false })
  }

  initialFalse = () => {
    this.setState({ initial: false })
  }

  fadeFalse = () => {
    this.setState({ fade: false })
  }

  getWeather = async (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.selected}&APPID=${productionkeys.key}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          currentMain: data.weather[0].main,
          currentTemp: data.main.temp,
          currentTime: (moment(data.dt * 1000).format('LLLL')),
          lat: data.coord.lat,
          long: data.coord.lon,
          currentDesc: data.weather[0].description,
          currentHigh: data.main.temp_max,
          windSpeed: data.wind.speed,
          error: false
        })
      )
      .catch(err =>
        this.setState({ error: true })
      )

    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},${this.state.selected}&APPID=${productionkeys.key}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          firstMain: data.list[3].weather[0].main,
          firstHigh: data.list[3].main.temp_max,
          firstDesc: data.list[3].weather[0].description,
          firstDay: (moment(data.list[3].dt * 1000).format('dddd')),
          secondMain: data.list[11].weather[0].main,
          secondDesc: data.list[11].weather[0].description,
          secondHigh: data.list[11].main.temp_max,
          secondDay: (moment(data.list[11].dt * 1000).format('dddd')),
          thirdMain: data.list[19].weather[0].main,
          thirdDesc: data.list[19].weather[0].description,
          thirdHigh: data.list[19].main.temp_max,
          thirdDay: (moment(data.list[19].dt * 1000).format('dddd')),
          forthMain: data.list[27].weather[0].main,
          forthDesc: data.list[27].weather[0].description,
          forthHigh: data.list[27].main.temp_max,
          forthDay: (moment(data.list[27].dt * 1000).format('dddd')),
          fifthMain: data.list[35].weather[0].main,
          fifthDesc: data.list[35].weather[0].description,
          fifthHigh: data.list[35].main.temp_max,
          fifthDay: (moment(data.list[35].dt * 1000).format('dddd')),
          error: false
        })
        // console.log(data)
      )
      .catch(err =>
        this.setState({ error: true })
      )

    setTimeout(() => {
      fetch(`https://secure.geonames.org/timezoneJSON?lat=${this.state.lat}&lng=${this.state.long}&username=${productionkeys.username}`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            currentTime: data.time,
            sunrise: data.sunrise,
            sunset: data.sunset
          })
        )
        .catch(err => console.log(err))
    }, 300);


    setTimeout(() => {
      if (moment(this.state.currentTime) < moment(this.state.sunrise)) {
        this.setState({ night: true })
      }
    }, 400)
  }

  render() {
    let output = null;
    if (this.state.initial === true) {
      output =
        <div className="main_card">
          <Search
            getWeather={this.getWeather}
            onChange={this.onChange}
            selected={this.state.selected}
            zipCode={this.state.zipCode}
            countries={this.state.countries}
            fadeTrue={this.fadeTrue}
            startLoader={this.startLoader}
          />
          <CallToAction
            initialFalse={this.initialFalse}
          />
        </div>
    }
    else if (this.state.loading === true) {
      output =
        <div className="main_card">
          <Search
            getWeather={this.getWeather}
            onChange={this.onChange}
            selected={this.state.selected}
            zipCode={this.state.zipCode}
            countries={this.state.countries}
            fadeTrue={this.fadeTrue}
            startLoader={this.startLoader}
          />
          <Loader />
        </div>
    }
    else if (this.state.error === false && this.state.loading === false) {
      output =
        <div className="main_card">
          <Search
            getWeather={this.getWeather}
            onChange={this.onChange}
            selected={this.state.selected}
            zipCode={this.state.zipCode}
            countries={this.state.countries}
            startLoader={this.startLoader}
          />
          <CurrentWeather
            currentMain={this.state.currentMain}
            currentTemp={this.state.currentTemp}
            currentDesc={this.state.currentDesc}
            degree={this.state.degree}
            fade={this.state.fade}
            night={this.state.night}
          />
          <WeatherDescription
            currentDesc={this.state.currentDesc}
            currentTemp={this.state.currentTemp}
            currentHigh={this.state.currentHigh}
            windSpeed={this.state.windSpeed}
            degree={this.state.degree}
            fade={this.state.fade}
          />
          <FiveDay
            firstMain={this.state.firstMain}
            firstDesc={this.state.firstDesc}
            firstDay={this.state.firstDay}
            secondMain={this.state.secondMain}
            secondDesc={this.state.secondDesc}
            secondDay={this.state.secondDay}
            thirdMain={this.state.thirdMain}
            thirdDesc={this.state.thirdDesc}
            thirdDay={this.state.thirdDay}
            forthMain={this.state.forthMain}
            forthDesc={this.state.forthDesc}
            forthDay={this.state.forthDay}
            fifthMain={this.state.fifthMain}
            fifthDesc={this.state.fifthDesc}
            fifthDay={this.state.fifthDay}
            degree={this.state.degree}
            fadeFalse={this.fadeFalse}
            fade={this.state.fade}
          />
        </div>
    } else {
      output =
        <div className="main_card">
          <Search
            getWeather={this.getWeather}
            onChange={this.onChange}
            selected={this.state.selected}
            zipCode={this.state.zipCode}
            countries={this.state.countries}
            fadeTrue={this.fadeTrue}
            startLoader={this.startLoader}
          />
          <Error
            fadeFalse={this.fadeFalse}
          />
        </div>
    }
    return (
      <div>
        {output}
      </div>
    )
  }
}

export default MainCard
