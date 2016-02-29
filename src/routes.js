import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import About from './components/pages/About.jsx';
import Index from './components/pages/Index.jsx';
import Features from './components/pages/Features.jsx';
import How from './components/pages/How.jsx';
import Root from './components/Root.jsx';

module.exports = (
  <Router>
    <Route component={Root} path="/">
      <IndexRoute component={Index} />
      <Route path="features" component={Features} />
      <Route path="how" component={How} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);