import React from 'react';

class MinTemp extends React.Component {

  kelvinToCelsius(tempToConvert) {
    var kelvinToCelsius = require('kelvin-to-celsius');

    return kelvinToCelsius(tempToConvert);
  }

  render() {
    return !!this.props.minTemp && (
      <div className="min-temp">
        { Math.round(this.kelvinToCelsius(this.props.minTemp)) }
      </div>
    );
  }
}

export default MinTemp;
