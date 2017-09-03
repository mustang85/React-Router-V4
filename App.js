import React from 'react';
import { 
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

// Understend the Differce Between the React Router v4 Router

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date());
  return true;
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)
{/*
  hashType="slash">
  hashType="noslash">
  hashType="hashbang">
*/}

const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinksRoutes />
  </HashRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
    >
    <LinksRoutes />
  </MemoryRouter>
)

const StaticRouterApp = () => {
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
}

export default StaticRouterApp;

