import React from 'react';
import Facebook from '../Facebook/Facebook.jsx';

class Header extends React.Component {
  render() {
    return(
      <div className="main-header">
        <span className="bunchride-logo"></span>
        <span className="bunchride-title">MoreWatts</span>
        <span className="bunchride-login">
          <Facebook/>
        </span>
      </div>
    );
  }
}

export default Header;
