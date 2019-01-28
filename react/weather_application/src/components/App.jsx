import React from 'react';

// Components import statements
import CityForm from './CityForm.jsx';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      city: '',
      countryCode: ''
    };
  }

  setLocation(city, countryCode) {
    this.setState({
      city,
      countryCode
    });
  } 
 
  render () {
    return (
      <div>
        <CityForm onSubmit={ this.setLocation }/>
        <Calendar city={ this.state.city } countryCode= { this.state.countryCode } />
      </div>
    );
  }
}

export default App;
