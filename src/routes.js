import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import About from './components/pages/About';
import App from './components/App';
import Index from './components/pages/Index';
import Features from './components/pages/Features';
import How from './components/pages/How';
import Integrations from './components/pages/Integrations';
import BetaTOS from './components/pages/BetaTOS';
import {
  TryAWS,
  TryChecks,
  TryDev,
  TryIcinga,
  TryMicroservices,
  TryNagios,
  TryPingdom,
  TrySensu,
  TryUX
} from './components/pages/try';

/**
 * ADDING A NEW ROUTE?
 * Don't forget to update ferengi/src/constants/routeMeta.js
 */
module.exports = (
  <Router>
    <Route component={App} path="/">
      <IndexRoute component={Index} />
      <Route path="features" component={Features} />
      <Route path="how" component={How} />
      <Route path="about" component={About} />
      <Route path="integrations" component={Integrations} />
      <Route path="beta-tos" component={BetaTOS} />

      { /* Twitter campaign landing pages */ }
      <Route path="try/aws" component={TryAWS} />
      <Route path="try/checks" component={TryChecks} />
      <Route path="try/dev" component={TryDev} />
      <Route path="try/icinga" component={TryIcinga} />
      <Route path="try/microservices" component={TryMicroservices} />
      <Route path="try/nagios" component={TryNagios} />
      <Route path="try/pingdom" component={TryPingdom} />
      <Route path="try/sensu" component={TrySensu} />
      <Route path="try/ux" component={TryUX} />
    </Route>
  </Router>
);