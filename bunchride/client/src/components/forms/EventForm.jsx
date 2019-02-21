import React from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

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
  
  componentDidMount() {
    document.body.classList.toggle('form-page')
  }
  componentWillUnmount() {
    document.body.classList.remove('form-page')
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
    e.preventDefault();
    this.makeRequest();
  }

  makeRequest() {
    fetch('/submit-create-event', {
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
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <div className="form create-event wrapper">
        <h1>Create a new event</h1>
        <form className="create-event-form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" className="title" onChange={this.handleChangeNoValidation} name="title" placeholder="Training on the road"/>
          <label>Type</label>
          <select className="type" name="type" onChange={this.handleChangeNoValidation}>
            <option value="road" selected>Road</option>
            <option value="mtb">MTB</option>
          </select>
          <label>Start date</label>
          <DateTime onChange={this.handleStartDateChange} />
          <label>End date</label>
          <DateTime onChange={this.handleEndDateChange}/>
          <label>City</label>
          <input type="text" className="city" name="city" onChange={this.handleChangeNoValidation}/>
          <label>Start location</label>
          <input type="text" className="start_location" onChange={this.handleChangeNoValidation} name="startLocation" placeholder="Pramonės pr. 8A, Kaunas..."/>
          <label>Level</label>
          <select className="level" name="level" onChange={this.handleChangeNoValidation}>
              <option value="beginner" selected>Beginner</option>
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
      </div>
    );
  }
}

export default EventForm;