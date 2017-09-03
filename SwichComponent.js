import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link 
} from 'react-router-dom';

import './App.css';

// conditionally render with the Switch Component

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Switch>
        <Links />
        <Route path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/:itemId" 
          render={({match}) => <h1>Item: {match.params.itemid}</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App;

