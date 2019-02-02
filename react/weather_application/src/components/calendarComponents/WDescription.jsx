import React from 'react';

class WDate extends React.Component {

  render() {
    return !!this.props.wDescription && (
      <div className="w-description">
        { this.props.wDescription }
      </div>
    );
  }
}

export default WDate;
