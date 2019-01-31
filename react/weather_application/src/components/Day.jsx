import React from 'react';

// import WDate from './WDate.jsx';
// import WeatherTYpe from './WeatherType.jsx';
import Temperature from './Temperature.jsx';
// import MinTemp from './MinTemp.jsx';



class Day extends React.Component {

  render() {
    console.log(this.props.dayInfo);
    return !!this.props.temperature.length && (
      <div className="weather-node">
        {/* <WDate date={ this.state.date} /> */}
        {/* <WeatherType weatherType={ this.state.temperature} /> */}
        {/* <Temperature temperature={ this.state.temperature} /> */}
        {/* <MinTemp minTemp={ this.state.temperature} /> */}
      </div>
    );
  }
}

export default Day;
