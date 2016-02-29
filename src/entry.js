import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';

import routes from './routes';
import Root from './components/Root.jsx';

// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

/*
 * This is the render function used by the static site generator plugin.
 */
module.exports = function render(locals, callback) {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Root assets={locals.assets} />
    );
    callback(null, `<!DOCTYPE html>${html}`);
  });
};