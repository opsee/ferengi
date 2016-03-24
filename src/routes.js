import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import About from './components/pages/About.jsx';
import App from './components/App.jsx';
import Index from './components/pages/Index.jsx';
import Features from './components/pages/Features.jsx';
import How from './components/pages/How.jsx';
import BetaTOS from './components/pages/BetaTOS.jsx';
import {
  TryAWS,
  TryChecks,
  TryDev,
  TryIcinga,
  TryMicroservices,
  TryNagios,
  TrySensu,
  TryUX
} from './components/pages/try';

module.exports = (
  <Router>
    <Route component={App} path="/">
      <IndexRoute component={Index} />
      <Route path="features" component={Features} />
      <Route path="how" component={How} />
      <Route path="about" component={About} />
      <Route path="beta-tos" component={BetaTOS} />

      { /* Twitter campaign landing pages */ }
      <Route path="try/aws" component={TryAWS} />
      <Route path="try/checks" component={TryChecks} />
      <Route path="try/dev" component={TryDev} />
      <Route path="try/icinga" component={TryIcinga} />
      <Route path="try/microservices" component={TryMicroservices} />
      <Route path="try/nagios" component={TryNagios} />
      <Route path="try/sensu" component={TrySensu} />
      <Route path="try/ux" component={TryUX} />
    </Route>
  </Router>
);