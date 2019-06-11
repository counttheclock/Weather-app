import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input onChange={this.props.onChange} value={this.props.zipCode} name="zipCode" type="text" placeholder="ZIP CODE" className="zip_input fadeInUp" />
          <select className="country_input fadeInUp" value={this.props.selected} name="selected" onChange={this.props.onChange}>
            {this.props.countries.map((country) => (
              <option key={country.alpha} value={country.alpha}>{country.name}</option>
            ))}
          </select>
          <input type="submit" className="search_input fadeInUp" value="&#xf002;" onClick={this.props.startLoader} />
        </form>
      </div>
    )
  }
}

export default Search
