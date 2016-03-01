import React, { PropTypes } from 'react';
import style from './container.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div className={style.container}>
        {this.props.children}
      </div>
    );
  }
});