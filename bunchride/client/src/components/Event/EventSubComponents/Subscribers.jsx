import React from 'react';
import Cookies from 'universal-cookie';


class Subscribers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribers: [],
    };
  }

  componentDidMount() {
    this.getSubscribersCount(this.props.eventId);
  }

  getSubscribersCount(eventId) {
    fetch('/api/v.1.0/event/' + eventId)
      .then(function(response) {
        if (!response.ok) {
          console.log('failed to get subscribers');
          return;
        }
        return response.json();
        })
        .then((data) => {
          if (!data) {
            return;
          }
          this.setState({
            subscribers: [...this.state.subscribers, ...data.subscribers]
          })
        });
  }

  renderSubscribers() {
    return (
      this.state.subscribers.map((subscriber, index) => (
        <li key={index} className="subscriber">{ subscriber.name }</li>
      ))
    );
  }

  triggerSubscribtion(eventId) {
   console.log('trigger subscribtion'); 
   const cookies = new Cookies();
   var userName = cookies.get('name');

   fetch('/api/v.1.0/event/update/' + eventId + '/' +userName)
    .then(function(response) {
      if (!response.ok) {
        console.log('failed to set subscriber');
        return;
      }
      return response.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        
      })
  }

  render() {
    return(
      <div className="subscribers-wrapper">
        <div className="subscriber-action">
          <div className="subscriber-action-wrapper" onClick= { () => this.triggerSubscribtion(this.props.eventId) }>
            <span className="subscribers-icon icon"></span>
            <p>Subscribe</p>
          </div>
          <p className="subscribers-count">{ this.state.subscribers.length } </p>
        </div>
        <span className="subscribers-list-wrapper">
          <ul className="subscribers-list">
           { this.renderSubscribers() }
          </ul>
        </span>
      </div>
    );
  }
}

export default Subscribers;
