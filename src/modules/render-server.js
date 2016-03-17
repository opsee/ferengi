import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';
import serialize from 'serialize-javascript';

import reducer from '../reducers';
import routes from '../routes';

import iconLarge from '../components/images/favicon/icon_256x256@2x.png';
import favicon from '../components/images/favicon/icon.ico';

function faviconMeta(){
  return `
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="${iconLarge}" />
    <link rel="shortcut icon" href="${favicon}" type="image/x-icon" />
    <meta name="application-name" content="Opsee"/>
    <meta name="msapplication-TileColor" content="#00589B" />
    <meta name="msapplication-TileImage" content="/public/img/favicon/mstile-144x144.png" />
  `;
}

/**
 * We do this in order to avoid mounting the entire React app onto the body.
 */
function renderFullPage(html, initialState = {}) {
  // TODO: use this.props.assets for style.css/bundle.js instead of hardcoding
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width">
        <meta name="copyright" content="Copyright ${new Date().getUTCFullYear()} Opsee, Inc. All rights reserved." />
        <meta name="description" content="" />
        <meta name="title" content="Opsee" />
        ${faviconMeta()}
        <meta content="Opsee - Effortless Monitoring" property="og:site_name">
        <meta content="Health Checks Have You Covered" property="og:title">
        <meta content="website" property="og:type">
        <meta content="Health and performance checks for your services with no software to install" property="og:description">
        <meta content="https://opsee.com" property="og:url">
        <meta content="https://s3-us-west-1.amazonaws.com/opsee-public-images/opsee_logo_blue_400px.png" property="og:image">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@opseeco">
        <meta name="twitter:title" content="Health Checks Have You Covered">
        <meta name="twitter:description" content="Health and performance checks for your services with no software to install">
        <meta name="twitter:url" content="https://opsee.com">
        <meta name="twitter:creator" content="@opseeco">
        <meta content="https://s3-us-west-1.amazonaws.com/opsee-public-images/opsee_logo_blue_400px.png" property="twitter:image">
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

module.exports = function renderServer(locals, callback) {
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