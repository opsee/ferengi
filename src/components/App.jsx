import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { yeller } from '../modules';
import { setReferrer } from '../modules/referrer';
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
    setReferrer();
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