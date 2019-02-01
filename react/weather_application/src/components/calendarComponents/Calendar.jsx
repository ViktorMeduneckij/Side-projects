import React from 'react';

// Components import statements
import Day from '../appComponents/Day.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'days': [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city === this.props.city && prevProps.countryCode === this.props.countryCode ) {
      return;
    }

    this.makeRequest(this.props.city, this.props.countryCode);
  }

  makeRequest(city, countryCode) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + countryCode + '&APPID=2ae485863d59f73f6dc69e3c8f2e79ff')
      .then(function(response) {
        if(!response.ok) {
          console.log('Something is wrong');
          return;
        }
        return response.json()
      })
      .then((data) => {
        var days = data.list.filter(function(value, index, Arr){
          return index % 8 === 0;
        });
        this.setState({
          days
        });
      });
  }

  render() {
    return !!this.props.city.length && !!this.props.countryCode.length &&
    this.state.days.map((day) => ( 
      <Day 
        key={ day.dt }  
        date={ day.dt_txt }
        temp={ day.main.temp } 
        minTemp = { day.main.temp_min } 
        weatherType = { day.weather[0].main }
      />
    ));
  }
}

export default Calendar;
