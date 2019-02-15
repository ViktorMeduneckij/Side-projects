import React from 'react';

class SessionInfo extends React.Component {
  render() {
    return (
      <div className="session-info-wrapper">
        <div className="event-distance"> { this.props.distance } km</div>
        <div className="event-type"> { this.props.type } </div>
      </div>
    );
  }
}

export default SessionInfo;