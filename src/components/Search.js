import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input onChange={this.props.onChange} value={this.props.zipCode} name="zipCode" type="text" placeholder="ZIP CODE" className="zip_input" />
          <select className="country_input" value={this.props.selected} name="selected" onChange={this.props.onChange}>
            {this.props.countries.map((country) => (
              <option key={country.alpha} value={country.alpha}>{country.name}</option>
            ))}
          </select>
          <input type="submit" className="search_input" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search
