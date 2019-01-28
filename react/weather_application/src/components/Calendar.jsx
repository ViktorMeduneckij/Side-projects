import React from 'react';

class Calendar extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.city === this.props.city && prevProps.countryCode === this.props.countryCode ) {
      return;
    }

    this.makeRequest(this.props.city, this.props.countryCode);
  }

  makeRequest(city, countryCode) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + countryCode + '&APPID=2ae485863d59f73f6dc69e3c8f2e79ff')
      .then(function(response) {
        if(response.ok) {
          console.log(response.json());
        }
      });
  }

  render() {
    return !!this.props.city.length && !!this.props.countryCode.length && (
      <div>
        <div className="">{ this.props.city }</div>
        <div className="">{ this.props.countryCode }</div>
      </div>
    );
  }
}

export default Calendar;
