import React from 'react';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';

import reducer from '../reducers';
import routes from '../routes';
import iconLarge from '../components/images/favicon/icon_256x256@2x.png';
import favicon from '../components/images/favicon/icon.ico';

function pathMeta() {
  // @see https://github.com/nfl/react-helmet#server-usage
  let head = Helmet.rewind();

  return `
    ${head.title.toString()}
    ${head.meta.toString()}
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
        ${pathMeta(path)}
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
        <script type="text/javascript"> adroll_adv_id = "6UOEGB6IDJESBCHCZ25UBY"; adroll_pix_id = "FYS2LVQ5BBEORBU5VR6CKA"; (function () { var _onload = function(){ if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return} if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return} var scr = document.createElement("script"); var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com"); scr.setAttribute('async', 'true'); scr.type = "text/javascript"; scr.src = host + "/j/roundtrip.js"; ((document.getElementsByTagName('head') || [null])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(scr); }; if (window.addEventListener) {window.addEventListener('load', _onload, false);} else {window.attachEvent('onload', _onload)} }()); </script>
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