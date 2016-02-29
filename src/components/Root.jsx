import React, { PropTypes } from 'react';

import App from './App.jsx';
import style from './root.css';

module.exports = React.createClass({
  propTypes: {
    assets: PropTypes.shape({
      main: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.object
  },

  render() {
    return (
      <html>
        <head>
          <title>Opsee</title>
          <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>

        <body>
          <div id="app">
            <App children={this.props.children} />
          </div>

          {/* TODO: use this.props.assets.main */}
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});