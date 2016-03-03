import React, { PropTypes } from 'react';
import style from './tryCheck.css';

export default React.createClass({
  render() {
    return (
      <div>
        <input className={style.input} type="text" placeholder="https://pepe.therarest.com:8420" />
      </div>
    );
  }
});