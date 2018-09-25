import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteListing from './NoteListing';
import Note from './Note';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Nav}/>
          <Route exact path="/" component={NoteListing}/>
          <Route path="/new" component={Note}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
