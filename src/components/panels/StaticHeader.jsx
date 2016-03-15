import React, { PropTypes } from 'react';
import style from './staticHeader.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div className={style.header}>
        {this.props.children}
      </div>
    );
  }
})