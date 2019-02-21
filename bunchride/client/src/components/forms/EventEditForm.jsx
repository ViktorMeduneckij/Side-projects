import React from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class EventEditForm extends React.Component {
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

  componentDidMount() {
    document.body.classList.toggle('form-page')
    this.getEventValues();
  }
  componentWillUnmount() {
    document.body.classList.remove('form-page')
  }

  getEventValues() {
    var url = window.location.pathname.split('/');
    console.log(url[3]);
    fetch('/api/v.1.0/event/' + url[3])
      .then(function(response) {
        if (!response.ok) {
          console.log('failed to get event from edit form');
          return;
        }
        return response.json();
      })
      .then((data) => {
        this.setEventState(data)
      })
  }

  setEventState(data) {
    this.setState({
      'title': data.title,
      'type': data.type,
      'startDate': data.start,
      'endDate': data.end,
      'city': data.city,
      'startLocation': data.start_location,
      'level': data.level,
      'distance': data.distance,
      'speed': data.speed,
      'generalInfo': data.generalInfo
    });
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
    this.makeRequest();
  }

  makeRequest() {
    var url = window.location.pathname.split('/');
    fetch('/submit-edit-event/' + url[3], {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        type: this.state.type,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        city: this.state.city,
        startLocation: this.state.startLocation,
        level: this.state.level,
        distance: this.state.distance,
        speed: this.state.speed,
        generalInfo: this.state.generalInfo,
      })
    })
    .then((response) => {
      if (response.ok) {
        this.props.history.push('/event/' + url[3]);
      }
    })
  }

  render() {
    return (
      <div className="form edit-event wrapper">
        <h1>Edit Event</h1>
        <form className="edit-event-form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" className="title" onChange={this.handleChangeNoValidation} value = { this.state.title } name="title" placeholder="Training on the road"/>
          <label>Type</label>
          <select className="type" name="type" onChange={this.handleChangeNoValidation} value = { this.state.type }>
            <option value="road">Road</option>
            <option value="mtb">MTB</option>
          </select>
          <label>Start date</label>
          <DateTime onChange={this.handleStartDateChange} value = { this.state.startDate }/>
          <label>End date</label>
          <DateTime onChange={this.handleEndDateChange} value = { this.state.endDate }/>
          <label>City</label>
          <input type="text" className="city" name="city" onChange={this.handleChangeNoValidation} value = { this.state.city }/>
          <label>Start location</label>
          <input type="text" className="start_location" onChange={this.handleChangeNoValidation} name="startLocation" value = { this.state.startLocation } placeholder="Pramonės pr. 8A, Kaunas..."/>
          <label>Level</label>
          <select className="level" name="level" onChange={this.handleChangeNoValidation} value = { this.state.level }>
              <option value="beginner">Beginner</option>
              <option value="advanced">Advanced</option>
              <option value="pro">Pro</option>
          </select>
          <label>Distance</label>
          <input type="text" className="distance" onChange= {this.handleIntegerChange } value = { this.state.distance } name="distance" placeholder="50"/>
          <label>Speed</label>
          <input type="text" className="speed" onChange= {this.handleIntegerChange } value = { this.state.speed } name="speed" placeholder="30" />
          <label>General information</label>
          <textarea className="general-info" rows="15" onChange={this.handleChangeNoValidation}  value = { this.state.generalInfo } name="generalInfo" placeholder="We will be maintaining zone 3, so make sure to have plenty of water..."></textarea>
          <input type="submit" value="Submit changes" className="create-event-submit" />
        </form>
      </div>
    );
  }
}

export default EventEditForm;
