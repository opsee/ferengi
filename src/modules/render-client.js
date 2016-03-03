import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import { promiseMiddleware } from 'emissary/src/js/modules/promiseMiddleware';

import reducer from '../reducers/app';
import routes from '../routes';

export default () => {
  const initialState = window.__initialState;

  const store = compose(
    applyMiddleware( thunk, promiseMiddleware ),
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
};