import React from 'react';

class Location extends React.Component {
  render() {
    return(
      <div className="session-location">  
        <span className="location-icon icon"></span>
        <p>{ this.props.location } </p>
      </div>
    );
  }
}

export default Location;
