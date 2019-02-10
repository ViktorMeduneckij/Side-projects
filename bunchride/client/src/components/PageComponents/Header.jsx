import React from 'react';
import Facebook from '../Facebook/Facebook.jsx';

class Header extends React.Component {

  render() {
    return(
      <header>
        <span className="bunchride-logo"></span>
        <span className="bunchride-title">Bunchride</span>
        <span className="bunchride-login">
          <Facebook/>
        </span>
      </header>
    );
  }
}

export default Header;
