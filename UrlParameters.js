import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

// url parameters

const App = () => (
  <Router>
    <div>
      {/*<Route path="/:page?/:subpage?" render={({match})*/}
      <Route path="/:page?-:subpage?" render={({match}) => (
        <h1>
          Page: {match.params.page || 'Home'}<br />
          SubPage: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
)

export default App;
