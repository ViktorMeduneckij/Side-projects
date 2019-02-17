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

  componentWillMount() { 
    this.convertToTime(this.props.start, this.props.end)
  }

  convertToTime(start, end) {
    var startTime = moment(start).format('LT')
    var endTime = moment(end).format('LT')
    this.setState({
      startTime,
      endTime
    });
  }

  render() {
    return (
      <div className="session-time-wrapper">
        <div className="session-start-time">  
          <span className="start-icon icon"></span>
          <p> { this.state.startTime } </p>
        </div>
        <div className="session-end-time"> 
          <span className="end-icon icon"></span>
          <p> { this.state.endTime } </p>
        </div>
      </div>
    );
  }
}

export default SessionTime;
