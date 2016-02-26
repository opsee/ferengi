import React, { PropTypes } from 'react';
import style from './root.css';

import Header from './Header.jsx';
import LogoColor from 'emissary/src/js/components/global/LogoColor.jsx';

/* eslint-disable no-unused-vars */
import grid from './layout/grid.css';
/* eslint-enable no-unused-vars */

module.exports = React.createClass({
  propTypes: {
    assets: PropTypes.shape({
      main: PropTypes.string.isRequired
    }).isRequired
  },

  render() {
    return (
      <html>
        <head>
          <title>Opsee</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>

        <body>
          <LogoColor />
          <Header />

          <div className={style.welcome}>
            Welcome to the filet zone.
          </div>

          <script src={this.props.assets.main} />
        </body>
      </html>
    );
  }
});