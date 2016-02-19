import React from 'react';
import css from './header.css';
import style from './header.css.json';

module.exports = React.createClass({
  render() {
    return (
      <div className={style.header}>
        I'm a header
      </div>
    );
  }
});