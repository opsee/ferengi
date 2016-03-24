import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {yeller} from '../modules';
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
    const ref = this.props.router.location.query.referrer;
    if (ref && typeof window !== 'undefined'){
      window.localStorage.setItem('referrer', ref);
    }
  },

  getPath() {
    const pathname = this.props.router.location.pathname;
    if (pathname.substr(-1) === '/') {
      return pathname.substr(0, pathname.length - 1);
    }
    return pathname;
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
         <DocumentHead path={this.getPath()} />
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