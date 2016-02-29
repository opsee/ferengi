import React, { PropTypes } from 'react';
import style from './root.css';

import Footer from './Footer.jsx';
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
    return (
      <html>
        <head>
          <title>Opsee</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>

        <body>
          <div className={style.root}>
            <header className={style.header}>
              <Header />
            </header>

            <main className={style.content}>
              {this.props.children}
            </main>

            <footer className={style.footer}>
              <Footer />
            </footer>
          </div>

          {/* TODO: use this.props.assets.main */}
          <script src="bundle.js" />
        </body>
      </html>
    );
  }
});