import React from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'title': '',
      'type': '',
      'startDate': '',
      'endDate': '',
      'city': '',
      'startLocation': '',
      'level': '',
      'distance': '',
      'speed': '',
      'generalInfo': ''
    };
  }

  handleIntegerChange = (e) => {
    e.preventDefault();
    const name = e.target.name;

    if (!isNaN(e.target.value)) {
      this.setState({
        [name] : e.target.value
      });
    }
  }

  handleChangeNoValidation = (e) => {
    const name = e.target.name;

    this.setState({
      [name] : e.target.value
    });
  }

  handleStartDateChange = (date) => {
    console.log(date);
    this.setState({
      'startDate': date._d
    });
  }

  handleEndDateChange = (date) => {
    this.setState({
      'endDate': date._d
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault() 

    const eventValues = {    
      'title': this.state.title,
      'type': this.state.type,
      'startDate': this.state.startDate,
      'endDate': this.state.endDate,
      'city': this.state.city,
      'startLocation': this.state.startLocation,
      'level': this.state.level,
      'distance': this.state.distance,
      'speed': this.state.speed,
      'generalInfo': this.state.generalInfo,
    }

    console.log(eventValues);
  }

  makeRequest() {
    
  }

  render() {
    return (
      <form className="create-event-form" onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" className="title" onChange={this.handleChangeNoValidation} name="title" placeholder="Training on the road"/>
        <label>Type</label>
        <select className="type" name="type" onChange={this.handleChangeNoValidation}>
          <option value="road">Road</option>
          <option value="mtb">MTB</option>
        </select>
        <label>Start date</label>
        {/* <input type="text" className="datepicker-here" data-timepicker="true" data-language='en' autoComplete="off" name="start" placeholder="Date..." /> */}
        <DateTime className="start-date-bybis" onChange={this.handleStartDateChange} />
        <label>End date</label>
        {/* <input type="text" className="datepicker-here" data-timepicker="true" data-language='en' autoComplete="off" name="end" placeholder="Date..." /> */}
        <DateTime onChange={this.handleEndDateChange}/>
        <label>City</label>
        <input type="text" className="city" name="city" onChange={this.handleChangeNoValidation}/>
        <label>Start location</label>
        <input type="text" className="start_location" onChange={this.handleChangeNoValidation} name="startLocation" placeholder="Pramonės pr. 8A, Kaunas..."/>
        <label>Level</label>
        <select className="level" name="level" onChange={this.handleChangeNoValidation}>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
            <option value="pro">Pro</option>
        </select>
        <label>Distance</label>
        <input type="text" className="distance" onChange= {this.handleIntegerChange } name="distance" placeholder="50"/>
        <label>Speed</label>
        <input type="text" className="speed" onChange= {this.handleIntegerChange } name="speed" placeholder="30" />
        <label>General information</label>
        <textarea className="general-info" rows="15" onChange={this.handleChangeNoValidation} name="generalInfo" placeholder="We will be maintaining zone 3, so make sure to have plenty of water..."></textarea>
        <input type="submit" value="Create" className="create-event-submit" />
      </form>
    );
  }
}

export default EventForm;