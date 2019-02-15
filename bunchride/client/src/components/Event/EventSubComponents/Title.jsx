import React from 'react';
import moment from 'moment';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
    }
  }

  componentDidMount() {
    this.convertToTitleDate(this.props.date)
  }

  convertToTitleDate(date) {
    var newDate = moment(date).format('dddd, Do MMMM')
    this.setState({
      'date': newDate,
    });
  }

  render() {
    return (
      <div className="event-title-wrapper">
        <h1> { this.props.title } </h1>
        <div className="event-title-date"> { this.state.date } </div>
      </div>
    );
  }
}

export default Title;