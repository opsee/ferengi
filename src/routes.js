import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Root from './components/Root.jsx';
import Index from './components/pages/Index.jsx';
import About from './components/pages/About.jsx';

// module.exports = (
//   <Router>
//     <Route component={Root} path='/'>
//       <IndexRoute component={Index} />
//       <Route path="about" component={About} />
//     </Route>
//   </Router>
// );

module.exports = (
  <Router>
    <Route component={Root} path='/'>

    </Route>
  </Router>
);