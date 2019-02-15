import React from 'react';
import moment from 'moment';

class SessionTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'startTime': '',
      'endTime': ''
    }
  }

  componentDidMount() { 
    this.convertToTime(this.props.start, this.props.end)
  }

  convertToTime(start, end) {
    var startTime = moment(start).format('HH:m')
    var endTime = moment(end).format('HH:m')
    this.setState({
      startTime,
      endTime,
    });
  }

  render() {
    return (
      <div className="session-time-wrapper">
        <div className="session-start-time"> { this.state.startTime } </div>
        <div className="session-end-time"> { this.state.endTime } </div>
      </div>
    );
  }
}

export default SessionTime;
