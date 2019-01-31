import React from 'react';

class Temperature extends React.Component {


  render() {
    return !!this.props.temperature.length && (
      <div>
        { this.props.temperature }
      </div>
    );
  }
}

export default Temperature;
