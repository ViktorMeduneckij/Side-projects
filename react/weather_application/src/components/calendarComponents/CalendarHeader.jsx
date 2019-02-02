import React from 'react';

class CalendarHeader extends React.Component {

  render() {
    return !!this.props.city && !!this.props.country && (
      <div className="calendar-header">
        { 'Displaying upcoming forecast for 5 days in ' + this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1) + ',' + this.props.country.toUpperCase() }
      </div>
    );
  }
}

export default CalendarHeader;
