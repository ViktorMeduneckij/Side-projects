import React from 'react';
import Header from '../PageComponents/Header.jsx';
import Body from '../PageComponents/Body.jsx';

class App extends React.Component {

  render() {
    return(
      <div className="main-wrapper">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;