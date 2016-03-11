import React, { PropTypes } from 'react';
import style from './button.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  getDefaultProps() {
    return {
      className: '',
    };
  },

  getClass() {
    return [this.props.className, style.button].join(' ');
  },

  render() {
    return (
      <button className={this.getClass()}>
        {this.props.children}
      </button>
    );
  }
});