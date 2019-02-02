import React from 'react';

class WeatherType extends React.Component {

  render() {
    return !!this.props.weatherType.length && (
      <div className="w-type">
        { this.props.weatherType }
      </div>
    );
  }
}

export default WeatherType;
