import React from 'react';

class Temperature extends React.Component {

  kelvinToCelsius(tempToConvert) {
    var kelvinToCelsius = require('kelvin-to-celsius');

    return kelvinToCelsius(tempToConvert);
  }
  
  render() {
    return !!this.props.temp && (
      <div className="temp">
        { Math.round(this.kelvinToCelsius(this.props.temp)) }
      </div>
    );
  }
}

export default Temperature;
