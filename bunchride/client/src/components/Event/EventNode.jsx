import React from 'react';

import EventEditBtn from './EventSubComponents/EditEventBtn';
import Title from './EventSubComponents/Title';
import SessionInfo from './EventSubComponents/SessionInfo';
import SessionTime from './EventSubComponents/SessionTime';
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

  getEvent() {
    fetch('/api/v.1.0/' + this.props.location.pathname, {mode: 'no-cors'})
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
            type = { this.state.event.type }
            level = { this.state.event.level }
            distance = { this.state.event.distance }
            speed = { this.state.event.speed }
          />
          <SessionTime 
            start = { this.state.event.start }
            end = { this.state.event.end }
            location = { this.state.event.start_location }
          />
          <EventMap location = { this.state.event.start_location }/>
        </div>
        <div className="content-right">
          <EventEditBtn eventId = { this.state.event._id }/>
          <Subscribers
            subscribers = { this.state.event.subscribers } 
            eventId = { this.state.event._id }
            />
          </div>
        <div className="general-info">
          <span className="general-info-icon icon"></span>
          <p> { this.state.event.generalInfo } </p>
        </div>
      </div>
    );
  }
}

export default EventNode;
