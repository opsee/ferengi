import React from 'react';

import { Padding } from '../layout';
import Panel from './Panel';

import style from './featuredCustomers.css';
import BaseSVG from '../images/BaseSVG';
import logoLivewatch from '../images/logos/logo-livewatch.png';
import logoAzavea from '../images/logos/logo-azavea.png';
import logoYieldbot from '../images/logos/logo-yieldbot.png';
import logoRealself from '../images/logos/logo-realself.png';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className="text-center">
          <h3>Featured Customers</h3>
          <Padding tb={2}>
            <div className="flex-vertical-align justify-content-center flex-wrap">
              <Padding a={1}>
                <a target="_blank" href="https://www.livewatch.com"><BaseSVG svg={logoLivewatch} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="https://www.yieldbot.com/"><BaseSVG svg={logoYieldbot} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="http://www.azavea.com/"><BaseSVG svg={logoAzavea} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="https://www.realself.com/"><BaseSVG svg={logoRealself} className={style.customerLogo} /></a>
              </Padding>
            </div>
          </Padding>
        </div>
      </Panel>
    );
  }
});