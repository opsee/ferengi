import React from 'react';
import style from './header.css';

module.exports = React.createClass({
  render() {
    return (
      <div className={style.header}>
        I'm a header
      </div>
    );
  }
});