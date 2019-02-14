import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'events': [],
    }
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest() {
    fetch('/api/v.1.0/events', {mode: 'no-cors'})
      .then(function(response) {
        if(!response.ok) {
          console.log('Something is wrong');
          return;
        }
        return response.json()
      })
      .then((data) => {
        if (!data) {
          return;
        }
        this.parseEvents(data)
      });
  }

  parseEvents(events) {
    events.forEach(function(event) {
      event.end = new Date(event.end);
      event.start = new Date(event.start); 
    });

    this.setState({
      'events': events,
    });
  }

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return(
      <div className="big-calendar">
        <BigCalendar
          localizer={ localizer }
          events={ this.state.events }
          view ='week'
          views={['week']}
        />
      </div>
    )
  }

}

export default Calendar;

