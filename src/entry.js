import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { createMemoryHistory } from 'history';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';
import serialize from 'serialize-javascript';

import reducer from './reducers/app';
import routes from './routes';

/**
 * We do this in order to avoid mounting the entire React app onto the body.
 */
function renderFullPage(html, initialState = {}) {
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
        <script>
          window.__initialState = ${initialState};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

const getMarkup = (store) => {
  const initialState = serialize(store.getState());

  const markup = React.renderToStaticMarkup(
    <Provider store={store} key="provider">
      <ReduxRouter/>
    </Provider>
  );

  return renderFullPage(markup, initialState);
};

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
  const store = reduxReactRouter({
    routes,
    createHistory: createMemoryHistory
  })(createStore)(reducer);

  store.dispatch(match(locals.path, (error, redirectLocation, routerState) => {
    if (error) {
      console.error('AN ERROR OCCURRED!', error);
      callback(error);
    } else if (redirectLocation) {
      console.log('TODO: redirect');
    } else if (!routerState) {
      console.log('404 not found');
    } else {
      callback(null, getMarkup(store));
    }
  }));
};