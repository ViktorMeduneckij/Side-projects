import React from 'react';

class Location extends React.Component {
  render() {
    return(
      <div className="session-location"> { this.props.location } </div>
    );
  }
}

export default Location;
