import React from 'react';
import style from './footer.css';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className={style.footer}>
        <ul className={style.nav}>
          <li><Link className={style.navLink} to="/features">Features</Link></li>
          <li><Link className={style.navLink} to="/solutions">Solutions</Link></li>
          <li><Link className={style.navLink} to="/how">How It Works</Link></li>
          <li><Link className={style.navLink} to="/about">About</Link></li>
          <li><Link className={style.navLink} to="/integrations">Integrations</Link></li>
          <li><Link className={style.navLink} to="/guides">Guides</Link></li>
          <li><Link className={style.navLink} to="https://app.opsee.com/help" target="_blank">Documentation</Link></li>
          <li><Link className={style.navLink} to="http://blog.opsee.com/" target="_blank">Blog</Link></li>
          <li><Link className={style.navLink} to="https://app.opsee.com/login" target="_blank">Log in</Link></li>
        </ul>

        <div className={style.logoGroup}>
          <p className={style.prose}>Made with &hearts; by Opsee Co.</p>
          <p className={style.prose}>325 9th St &bull; San Francisco, CA</p>
          <p className={style.prose}><a href="https://twitter.com/GetOpsee" target="_blank">Follow @GetOpsee</a></p>
        </div>
      </div>
    );
  }
});