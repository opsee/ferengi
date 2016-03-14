import _ from 'lodash';
import React, { PropTypes } from 'react';
import style from './input.css';

export default React.createClass({
  propTypes: {

  },

  getClassName() {
    return [this.props.className, style.input].join(' ');
  },

  render() {
    return (
      <input {...this.props} className={this.getClassName()} />
    );
  }
});