import React from 'react';
import style from './loadingDots.css';

export default React.createClass({
  render() {
    return (
      <div className={style.dots}>
        <div className={style.dotWrapper}>
          <div className={style.dot}></div>
        </div>
        <div className={style.dotWrapper}>
          <div className={style.dot}></div>
        </div>
        <div className={style.dotWrapper}>
          <div className={style.dot}></div>
        </div>
      </div>
    );
  }
});