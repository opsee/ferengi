import React, { PropTypes } from 'react';
import style from './root.css';

import Header from './Header.jsx';

/* eslint-disable no-unused-vars */
import reset from './layout/reset.css';
/* eslint-enable no-unused-vars */

module.exports = React.createClass({
  propTypes: {
    assets: PropTypes.shape({
      main: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.object
  },

  render() {
    console.log(this.props.children);

    return (
      <html>
        <head>
          <title>Opsee</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>

        <body>
          <Header />

          <div className={style.welcome}>
            Welcome to the filet zone.
          </div>

          <div>
            {this.props.children}
          </div>

          {/* TODO: use this.props.assets.main */}
          <script src="bundle.js" />
        </body>
      </html>
    );
  }
});