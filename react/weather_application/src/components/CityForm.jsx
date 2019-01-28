import React from 'react';

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      countryCode: ''
    };
  }

  handleChangeCity(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleChangeCountry(event) {
    this.setState({
      countryCode: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.city, this.state.countryCode);
    event.preventDefault();
  }

  render () {
    return (
      <form className="city-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.city} placeholder="Enter a city name" onChange={this.handleChangeCity.bind(this)} />
        <input type="text" value={this.state.countryCode} placeholder="Enter a country code" onChange={this.handleChangeCountry.bind(this)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CityForm;
