import React from 'react';
import style from './footer.css';

import BaseSVG from './images/BaseSVG';
import logoSVG from './images/logos/opseelogo-screen-dark-one.svg';

export default React.createClass({
  render() {
    return (
      <div className={style.footer}>
        <div className={style.nav}>

        </div>

        <div className={style.logoGroup}>
          <BaseSVG className={style.logo} svg={logoSVG} />

          <p className={style.prose}>Made with &hearts; by Opsee Co.</p>
          <p className={style.prose}>123 9th Street &bull; San Francisco, CA</p>
        </div>
      </div>
    );
  }
});