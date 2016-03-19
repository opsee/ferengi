import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Button from './forms/Button';
import Container from './layout/Container';
import BaseSVG from './images/BaseSVG';
import logoDark from './images/logos/opseelogo-screen-light-full.svg';
import logoLight from './images/logos/opseelogo-screen-dark-one.svg';

import style from './header.css';

module.exports = React.createClass({
  propTypes: {
    theme: PropTypes.oneOf(['light', 'dark'])
  },

  getDefaultProps() {
    return {
      theme: 'light'
    };
  },

  render() {
    const logoSVG = this.props.theme === 'dark' ? logoDark : logoLight;

    return (
      <header>
        <div className={style[this.props.theme]}>
          <Link to="/">
            <BaseSVG className={style.logo} svg={logoSVG} style={{height: 80}} />
          </Link>

          <div className={style.nav}>
            <ul className={style.navLinks}>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/how">How It Works</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>

            <ul className={style.authLinks}>
              <li><Link to="https://app.opsee.com/login">Log In</Link></li>
              <li>
                <Button className={style.cta}>
                  Get Opsee
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
});