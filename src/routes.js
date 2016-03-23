import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import About from './components/pages/About.jsx';
import App from './components/App.jsx';
import Index from './components/pages/Index.jsx';
import Features from './components/pages/Features.jsx';
import How from './components/pages/How.jsx';
import BetaTOS from './components/pages/BetaTOS.jsx';
import TryCampaign from './components/pages/TryCampaign';
import {
  TryAWS,
  TryChecks,
  TryDev,
  TryIcinga,
  TryMicroservices,
  TryNagios,
  TrySensu,
  TryUX
} from './components/pages/try'

module.exports = (
  <Router>
    <Route component={App} path="/">
      <IndexRoute component={Index} />
      <Route path="features" component={Features} />
      <Route path="how" component={How} />
      <Route path="about" component={About} />
      <Route path="beta-tos" component={BetaTOS} />

      <Route path="try" component={TryCampaign} >
        <Route path="aws" component={TryAWS} />
        <Route path="checks" component={TryChecks} />
        <Route path="dev" component={TryDev} />
        <Route path="icinga" component={TryIcinga} />
        <Route path="microservices" component={TryMicroservices} />
        <Route path="nagios" component={TryNagios} />
        <Route path="sensu" component={TrySensu} />
        <Route path="ux" component={TryUX} />
      </Route>
    </Route>
  </Router>
);