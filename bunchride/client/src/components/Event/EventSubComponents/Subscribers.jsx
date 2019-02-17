import React from 'react';

class Subscribers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'subscribersCount': '',
    };
  }

  componentDidUpdate() {
    this.getSubscribersCount();
  }

  getSubscribersCount() {
    fetch('/api/v.1.0/event/' + this.props.eventId)
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
            'subscribersCount': data.subscribers
          })
        });
  }

  triggerSubscribtion() {
    
  }

  render() {
    return(
      <div className="subscribers-wrapper" onClick= { this.triggerSubscribtion }>
        <span className="subscribers-icon icon"></span>
        <span className="subscribers-count"> { this.state.subscribersCount } </span>
      </div>
    );
  }
}

export default Subscribers;
