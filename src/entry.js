import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory, createHistory } from 'history';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import serialize from 'serialize-javascript';

import reducer from './reducers/app';
import routes from './routes';
import renderServer from './modules/render-server';

/*
 * This rendering happens on the client-side
 */
if (typeof document !== 'undefined') {
  const initialState = window.__initialState;
  const store = compose(
    reduxReactRouter({ createHistory })
  )(createStore)(reducer, initialState);

  const rootComponent = (
    <Provider store={store}>
      <ReduxRouter routes={routes} />
    </Provider>
  );

  ReactDOM.render(
    rootComponent,
    document.getElementById('root')
  );
}

/*
 * This is the render function used by the static site generator plugin.
 * It will get called once per route, generating the corresponding static
 * HTML for that route (e.g., /about will generate about.html).
 */
module.exports = (locals, callback) => renderServer(locals, callback);