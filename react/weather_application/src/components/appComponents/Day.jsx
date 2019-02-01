import React from 'react';

// Components import statements
import WDate from '../calendarComponents/WDate.jsx';
import WeatherType from '../calendarComponents/WeatherType.jsx';
import Temperature from '../calendarComponents/Temperature.jsx';
import MinTemp from '../calendarComponents/MinTemp.jsx';

class Day extends React.Component {

  render() {
    return (
      <div className="weather-node">
        <WDate date={ this.props.date} />
        <WeatherType weatherType={ this.props.weatherType} />
        <Temperature temp={ this.props.temp} />
        <MinTemp minTemp={ this.props.minTemp} />
      </div>
    );
  }
}

export default Day;
