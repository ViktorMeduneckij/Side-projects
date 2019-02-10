import React from 'react';

class LoggedInUser extends React.Component {

  render() {
    return(
      <div className="logged-in-user wrapper">
        <span className="logged-in-user picture">
          <img src={ this.props.picture } alt="bunchride-logo"></img>
        </span>
      </div>
    );
  }
}

export default LoggedInUser;