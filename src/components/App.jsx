import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {yeller} from '../modules';
import Footer from './Footer.jsx';
import style from './app.css';
import Analytics from './global/Analytics';

const App = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  componentWillMount(){
    yeller.configure();
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