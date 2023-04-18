import { Router } from 'express';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ma première page en React</h1>
        <Router>
          <Route path="/" element={Dashboard}> </Route>
        </Router>
      </div>
    );
  }
}


export default App;
