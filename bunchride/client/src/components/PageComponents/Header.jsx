import React from 'react';
import Facebook from '../Facebook/Facebook.jsx';
import {
  Link
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <div className="main-header">
        <span className="bunchride-logo">
          MoreWatts.com
          <p>bunchride</p>
        </span>
        <span className="bunchride-navigation">
          <ul className="main-navigation">
            <li><Link to="/">Calendar</Link></li>
            <li><a href="http://localhost:3001/create-event">+ Event</a></li>

          </ul>
        </span>
        <span className="bunchride-login">
          <Facebook/>
        </span>
      </div>
    );
  }
}

export default Header;
