import React from 'react';
import { Link } from 'react-router';

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
          <ul className={style.links}>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/how">How It Works</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          <div className={style.cta}>
            sign up
          </div>
        </div>
      </div>
    );
  }
});