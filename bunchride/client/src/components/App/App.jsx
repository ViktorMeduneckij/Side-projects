import React from 'react';
import Main from '../PageComponents/Main';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Main}/>
        </div>
      </Router>



      
    );
  }
}

export default App;