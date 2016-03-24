import _ from 'lodash';
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

const DEFAULT_META = {
  title: 'Opsee',
  excerpt: 'Continuously test your services and deploy with confidence',
  cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/opsee_logo_blue_400px.png',
  twitter: '@GetOpsee'
};

const ROUTE_META = {
  '/about': {
    title: 'Opsee / About',
  },

  '/beta-tos': {
    title: 'Opsee / Beta TOS',
  },

  '/features': {
    title: 'Opsee / Features',
  },

  '/how': {
    title: 'Opsee / How It Works',
  },

  '/try/aws': {
    title: 'Opsee / Get Monitoring Built for AWS',
    excerpt: 'Integrate and auto-scale seamlessly with your infrastructure. No agents to install or shell scripts to cURL.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-aws.jpg',
  },

  '/try/checks': {
    title: 'Opsee / Health Checks: Your First Line of Defense',
    excerpt: 'Monitor your AWS infrastructure and services using checks that auto-scale with you.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg',
  },

  '/try/dev': {
    title: 'Opsee / Monitoring for On-Call Dev Teams',
    excerpt: 'Effortless health checks for your services so you can get back to coding.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg',
  },

  '/try/icinga': {
    title: 'Opsee / Try a Simpler Alternative to Icinga',
    excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg',
  },

  '/try/microservices': {
    title: 'Opsee / Monitoring for Microservices',
    excerpt: 'Health checks cut through the noise.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg',
  },

  '/try/nagios': {
    title: 'Opsee / Try a Simpler Alternative to Nagios',
    excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg',
  },

  '/try/sensu': {
    title: 'Opsee / Try a Simpler Alternative to Sensu',
    excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg',
  },

  '/try/ux': {
    title: 'Opsee / Monitoring You Can Use Anywhere',
    excerpt: 'Powerful health checks, rich notifications, and deep AWS integration to take action anywhere.',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-ux.jpg',
  },
};

function getMeta(path) {
  const routeMeta = _.assign({}, DEFAULT_META, ROUTE_META[path]);
  console.log(path, routeMeta);

  return `
    <meta name="copyright" content="Copyright ${new Date().getUTCFullYear()} Opsee, Inc. All rights reserved." />

    <meta name="description" content="${routeMeta.excerpt}" />
    <meta name="title" content="${routeMeta.title}" />

    <meta content="${routeMeta.title}" property="og:site_name">
    <meta content="${routeMeta.title}" property="og:title">
    <meta content="website" property="og:type">
    <meta content="${routeMeta.excerpt}" property="og:description">
    <meta content="https://opsee.com" property="og:url">
    <meta content="${routeMeta.cover}" property="og:image">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="${routeMeta.twitter}">
    <meta name="twitter:title" content="${routeMeta.title}">
    <meta name="twitter:description" content="${routeMeta.excerpt}">
    <meta name="twitter:url" content="https://opsee.com${path}">
    <meta name="twitter:creator" content="${routeMeta.twitter}">
    <meta content="${routeMeta.cover}" property="twitter:image">

    <title>${routeMeta.title}</title>
  `;
}

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
function renderFullPage(path, html, initialState = {}) {
  // TODO: use this.props.assets for style.css/bundle.js instead of hardcoding
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="/style.css" />

        ${faviconMeta()}
        ${getMeta(path)}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__initialState = ${initialState};
        </script>
        <script src="//js-yellerapp.a.ssl.fastly.net/yeller.js"></script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-59205908-3', 'auto');
          ga('send', 'pageview');
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

const getMarkup = (path, store) => {
  const initialState = serialize(store.getState());

  const markup = React.renderToStaticMarkup(
    <Provider store={store} key="provider">
      <ReduxRouter/>
    </Provider>
  );

  return renderFullPage(path, markup, initialState);
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
      callback(null, getMarkup(locals.path, store));
    }
  }));
};