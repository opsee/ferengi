import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import BaseSVG from './images/BaseSVG';
import logoDark from './images/logos/opsee/opseelogo-screen-light-full.svg';
import logoLight from './images/logos/opsee/opseelogo-screen-dark-one.svg';
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
            <BaseSVG className={style.logo} svg={logoSVG} />
          </Link>

          <div className={style.nav}>
            <ul className={style.navLinks}>
              <li><Link to="/features" activeClassName={style.activeLink}>Features</Link></li>
              <li><Link to="/integrations" activeClassName={style.activeLink}>Integrations</Link></li>
              <li><Link to="/how" activeClassName={style.activeLink}>How It Works</Link></li>
              <li><Link to="/about" activeClassName={style.activeLink}>About</Link></li>
              <li><Link to="http://blog.opsee.com/" target="_blank">Blog</Link></li>
            </ul>

            <ul className={style.authLinks}>
              <li className={style.hideSm}><a href="https://app.opsee.com/login">Log In</a></li>
              <li>
                <a href="#signup" className={style.cta}>
                  Get Opsee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
});