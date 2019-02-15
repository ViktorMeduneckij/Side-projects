import React from 'react';

import Title from './EventSubComponents/Title';
import SessionInfo from './EventSubComponents/SessionInfo';
import SessionTime from './EventSubComponents/SessionTime';
import Location from './EventSubComponents/Location';
import Subscribers from './EventSubComponents/Subscribers';

class EventNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'event': [],
    }
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent() {
    fetch('/api/v.1.0/event/' + this.props.location.selectedEventId, {mode: 'no-cors'})
      .then(function(response) {
        if(!response.ok) {
          console.log('Failed to get single event.');
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        this.setState({
          'event': data
        })
      });
  }

  render() {
    console.log(this.state.event);
    return(
      <div className="event-wrapper">
        <Title 
        title = { this.state.event.title } 
        date = { this.state.event.start }
        />
        <SessionInfo 
          distance = { this.state.event.distance }
          type = { this.state.event.type }
        />
        <SessionTime 
          start = { this.state.event.start }
          end = { this.state.event.end }
        />
        <Location location = { this.state.event.start_location }/>
        <Subscribers 
        subscribers = { this.state.event.subscribers } 
        eventId = { this.state.event._id }
        />
      </div>
    );
  }
}

export default EventNode;
