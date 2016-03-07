import React, { PropTypes } from 'react';
import style from './grid.css';

export const BlockGroup = React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div className={style.blockGroup}>
        {this.props.children}
      </div>
    );
  }
});

export const Block = React.createClass({
  propTypes: {
    children: PropTypes.node,
    width: PropTypes.number
  },

  render() {
    return (
      <div className={style.block} style={{width: `${this.props.width}%`}}>
        {this.props.children}
      </div>
    );
  }
});