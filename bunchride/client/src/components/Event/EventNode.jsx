import React from 'react';

import Title from './EventSubComponents/Title';
import SessionInfo from './EventSubComponents/SessionInfo';
import SessionTime from './EventSubComponents/SessionTime';
import Location from './EventSubComponents/Location';
import EventMap from './EventSubComponents/EventMap';
import Subscribers from './EventSubComponents/Subscribers';

class EventNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'event': null,
    }
  }

  componentDidMount() {
    this.getEvent(this.props.location.selectedEventId);
  }

  getEvent(eventId) {
    fetch('/api/v.1.0/event/' + eventId, {mode: 'no-cors'})
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
    return !!this.state.event && (
      <div className="event-wrapper">
        <div className="content-left">
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
          <EventMap location = { this.state.event.start_location }/>
          <Subscribers 
          subscribers = { this.state.event.subscribers } 
          eventId = { this.state.event._id }
          />
        </div>
        <div className="content-right">
          
        </div>
      </div>
    );
  }
}

export default EventNode;
