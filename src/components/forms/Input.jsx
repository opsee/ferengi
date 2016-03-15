import React, { PropTypes } from 'react';
import style from './input.css';

export default React.createClass({
  propTypes: {
    className: PropTypes.string
  },

  getClassName() {
    return [style.input, this.props.className].join(' ');
  },

  render() {
    return (
      <input {...this.props} className={this.getClassName()} />
    );
  }
});