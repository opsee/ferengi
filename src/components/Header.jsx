import React from 'react';
import { Link } from 'react-router';

import Container from './layout/Container.jsx';
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
      </Container>
    );
  }
});