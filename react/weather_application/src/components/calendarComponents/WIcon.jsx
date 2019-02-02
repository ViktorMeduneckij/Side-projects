import React from 'react';

class WIcon extends React.Component {
  render() {
    return !!this.props.icon && (
        <img src={ 'http://openweathermap.org/img/w/' + this.props.icon + '.png' } />
    );
  }
}

export default WIcon;
