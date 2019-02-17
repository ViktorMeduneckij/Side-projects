import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

class EventMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'lat': null,
      'lng': null
    };
  }

  componentDidMount() {
    this.doGeocode(this.props.location);
  }

  doGeocode(address) {
    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + address + '&key=41ac47addc5e41678b676474d4ee32db')
      .then(function(response) {
        if (!response.ok) {
          console.log('failed to geocode');
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          return;
        }
        this.setState({
          lat: data.results[0].geometry.lat,
          lng: data.results[0].geometry.lng
        });
      });
  }

  renderMap() {
    var position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={16} width={600} height={400}>
        <Marker anchor={position} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>
    )
  }

  render() {
    return !!this.state.lat && !!this.state.lng && (
      <div className="event-map wrapper">
        { this.renderMap() }
      </div>
    );
  }
}

export default EventMap;
