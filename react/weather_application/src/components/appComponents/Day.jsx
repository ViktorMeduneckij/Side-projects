import React from 'react';

// Components import statements
import WDate from '../calendarComponents/WDate.jsx';
import WIcon from '../calendarComponents/WIcon.jsx';
import WType from '../calendarComponents/WType.jsx';
import WDescription from '../calendarComponents/WDescription.jsx';
import Temperature from '../calendarComponents/Temperature.jsx';
import MinTemp from '../calendarComponents/MinTemp.jsx';

class Day extends React.Component {

  render() {
    return (
      <div className="weather-node">
        <WDate date={ this.props.date} />
        <WIcon icon= { this.props.icon } />
        <WType weatherType={ this.props.wType} />
        <WDescription wDescription={ this.props.wDescription }/>
        <Temperature temp={ this.props.temp} />
        <MinTemp minTemp={ this.props.minTemp} />
      </div>
    );
  }
}

export default Day;
