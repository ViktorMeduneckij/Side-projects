import React from 'react';
import Calendar from '../BigCalendar/BigCalendar.jsx';

class Body extends React.Component {

  render() {
    return(
      <div className="main-container">
        <Calendar/>
      </div>
    );
  }
}

export default Body;