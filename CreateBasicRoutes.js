import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// console.dir(Router);

const Home = (props) => {
  console.log(props);
  return <h2>Home page</h2>;
};

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {/*<Route path="/about" render={() => (
        false ? <h1>About</h1> : <h1>About 2</h1>
      )} />*/}
      <Route
        path="/about"
        children={({match}) => match && <h1>About</h1>} />
    </div>
  </Router>
)

export default App;

// <Route strict path="/about/" component={Home} />
