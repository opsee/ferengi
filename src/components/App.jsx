import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import style from './app.css';
/* eslint-disable no-unused-vars */
// need this to be in our bundle yo
import layout from './layout/layout.css';
/* eslint-enable no-unused-vars */

const App = React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div className={style.app}>
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
    );
  }
});

export default connect(
  // Use a selector to describe state
  state => ({
    routerState: state.router
  })
)(App);