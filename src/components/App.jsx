import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { yeller } from '../modules';
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
    let ref = this.props.router.location.query.referrer;
    if (typeof window !== 'undefined'){
      ref = ref || document.referrer;
      storage.setItem('referrer', ref);
    }
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