import React from 'react';
import { Link } from 'react-router';

import Button from './forms/Button';
import Container from './layout/Container';
import BaseSVG from './images/BaseSVG';
import logoLight from './images/logos/opseelogo-screen-light-full.svg';
import style from './header.css';

module.exports = React.createClass({
  render() {
    return (
      <Container>
        <div className={style.header}>
          <div className={style.logo}>
            <Link to="/">
              <BaseSVG svg={logoLight} style={{height: 80}} />
            </Link>
          </div>

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
      </Container>
    );
  }
});