import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { referrer, yeller } from '../modules';
import * as storage from '../modules/storage';
import Footer from './Footer.jsx';
import style from './app.css';
import Analytics from './global/Analytics';
import DocumentHead from './layout/DocumentHead';

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
    router: PropTypes.shape({
      location: PropTypes.object
    })
  },

  componentWillMount(){
    yeller.configure();
    const ref = referrer(this.props.router.location);
    storage.setItem('referrer', ref || document.referrer);
  },

  render() {
    return (
      <div className={style.app}>
        <main className={style.content}>
          {this.props.children}
        </main>

        <footer className={style.footer}>
          <Footer />
        </footer>

        <Analytics/>
        <DocumentHead path={this.props.router.location.pathname} />
      </div>
    );
  }
});

export default connect(
  // Use a selector to describe state
  state => ({
    router: state.router
  })
)(App);