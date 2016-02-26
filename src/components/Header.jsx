import React from 'react';
import LogoColor from 'emissary/src/js/components/global/LogoColor.jsx';
import style from './header.css';

module.exports = React.createClass({
  render() {
    return (
      <div className={style.header}>
        <div className={style.logo}>
          <LogoColor />
        </div>

        <div className={style.nav}>
          <div className={style.links}>
            filet o' the fish
          </div>

          <div className={style.cta}>
            sign up
          </div>
        </div>
      </div>
    );
  }
});