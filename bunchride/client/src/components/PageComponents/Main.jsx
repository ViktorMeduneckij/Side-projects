import React from 'react';
import Header from '../PageComponents/Header.jsx';
import Body from '../PageComponents/Body.jsx';

class Main extends React.Component {

  render() {
    return(
      <div className="main-wrapper">
        <Header />
        <Body />
      </div>
    )
  }
}

export default Main;
