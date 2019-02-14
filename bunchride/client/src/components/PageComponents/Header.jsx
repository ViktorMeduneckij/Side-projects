import React from 'react';
import Facebook from '../Facebook/Facebook.jsx';
import {
  BrowserRouter as Router,
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
            <li><Link to="/">Home</Link></li>
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
