import React, { PropTypes } from 'react';
import cx from 'classnames';

import style from './input.css';

export default React.createClass({
  propTypes: {
    className: PropTypes.string
  },

  getClassName() {
    return cx([style.input, this.props.className]);
  },

  render() {
    return (
      <input {...this.props} className={this.getClassName()} />
    );
  }
});