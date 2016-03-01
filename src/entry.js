import React from 'react';
import { createMemoryHistory, match, RouterContext } from 'react-router';

import routes from './routes';

/**
 * We do this in order to avoid mounting the entire React app onto the body.
 */
function renderFullPage(html, initialState={}) {
  // TODO: use this.props.assets for style.css/bundle.js instead of hardcoding
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Opsee</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

/*
 * This rendering happens on the client-side
 */
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
    // TODO: pass locals.assets to RouterContext
    const context =  <RouterContext {...renderProps} />;

    const appHTML = React.renderToStaticMarkup(context);
    const fullHTML = renderFullPage(appHTML);

    callback(null, fullHTML);
  });
};