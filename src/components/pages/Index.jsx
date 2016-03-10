import React from 'react';

import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';

import style from './index.css';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <HeroPanel />
        </div>

        <div className={style.panel}>
          <div className={style.skewLight}>
            <div className={style.panelContent}>
              skew light
            </div>
          </div>
        </div>

        <div>
          <SummaryPanels />
        </div>

        <div className={style.panel}>
          <div className={style.skewAccent}>
            <div className={style.panelContent}>
              <SignUpPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
