import React from 'react';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
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
        <script src="https://player.vimeo.com/api/player.js"></script>
        <script src="/bundle.js"></script>
        <script type="text/javascript">
          (function() {
            window._pa = window._pa || {};
            var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
            pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.marinsm.com/serve/575729bb999998c849000220.js";
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
          })();
        </script>
        <!-- Twitter universal website tag code -->
        <script>
          !function(e,n,u,a){e.twq||(a=e.twq=function(){a.exe?a.exe.apply(a,arguments):
          a.queue.push(arguments);},a.version='1',a.queue=[],t=n.createElement(u),
          t.async=!0,t.src='//static.ads-twitter.com/uwt.js',s=n.getElementsByTagName(u)[0],
          s.parentNode.insertBefore(t,s))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','nv6al');
          twq('track','PageView');
        </script>
      </body>
    </html>
  `;
}

const getMarkup = (path, store) => {
  const initialState = serialize(store.getState());

  const markup = ReactDOMServer.renderToStaticMarkup(
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