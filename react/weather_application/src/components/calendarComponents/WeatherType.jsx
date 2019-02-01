import React from 'react';

class WeatherType extends React.Component {

  render() {
    return !!this.props.weatherType.length && (
      <div>
        { this.props.weatherType }
      </div>
    );
  }
}

export default WeatherType;
