import React from 'react';

class EventNode extends React.Component {

  render() {
    return(
      <div> {this.props.location.selectedEventId} </div>
    );
  }
}

export default EventNode;
