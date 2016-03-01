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
      <div id="app">
        <App children={this.props.children} />
      </div>
    );
  }
});