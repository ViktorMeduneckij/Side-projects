import React from 'react';
import Main from '../PageComponents/Main';
import EventNode from '../Event/EventNode';
import Header from '../PageComponents/Header';
import Footer from '../PageComponents/Footer';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="layout-wrapper">
          <Header />
          <Route exact path="/" component={Main}/>
          <Route exact path="/event/:eventId" component={EventNode}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
