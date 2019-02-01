import React from 'react';

class WDate extends React.Component {

  getWeekday(date) {
    var moment = require('moment');
    var dt = moment(date);

    return dt.format('dddd');
  }

  render() {
    return !!this.props.date && (
      <div>
        { this.getWeekday(this.props.date) }
      </div>
    );
  }
}

export default WDate;
