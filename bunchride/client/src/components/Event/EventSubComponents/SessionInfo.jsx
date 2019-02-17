import React from 'react';

class SessionInfo extends React.Component {
  render() {
    return (
      <div className="session-info-wrapper">
        <div className="event-distance"> 
          <span className="distance-icon icon"></span>
          <p> { this.props.distance } km</p>
        </div>
        <div className="event-type"> 
          <span className="type-icon icon"></span>
          <p> { this.props.type } </p>
        </div>
      </div>
    );
  }
}

export default SessionInfo;