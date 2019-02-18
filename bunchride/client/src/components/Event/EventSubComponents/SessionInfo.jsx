import React from 'react';

class SessionInfo extends React.Component {
  render() {
    return (
      <div className="session-info-wrapper">
        <div className="event-type"> 
          <span className="type-icon icon"></span>
          <p> { this.props.type.toUpperCase() } </p>
        </div>
        <div className="event-level"> 
          <span className="level-icon icon"></span>
          <p> { this.props.level } </p>
        </div>
        <div className="event-distance"> 
          <span className="distance-icon icon"></span>
          <p> { this.props.distance + "km" } </p>
        </div>
        <div className="event-speed">
          <span className="speed-icon icon"></span>
          <p> { this.props.speed + " km/h"} </p>
        </div>
      </div>
    );
  }
}

export default SessionInfo;