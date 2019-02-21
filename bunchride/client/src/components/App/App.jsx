import React from 'react';
import Main from '../PageComponents/Main';
import EventNode from '../Event/EventNode';
import Header from '../PageComponents/Header';
import Footer from '../PageComponents/Footer';
import EventForm from '../forms/EventForm';
import EventEditForm from '../forms/EventEditForm';


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
          <div className="main-content">
            <Route exact path="/" component={Main}/>
            <Route exact path="/event/:eventId" component={EventNode}/>
            <Route exact path="/add-event" component={EventForm}/>
            <Route exact path="/edit/event/:eventId" component={EventEditForm}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
