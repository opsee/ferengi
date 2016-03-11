import React from 'react';

import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';
import AssertionsPanel from '../panels/AssertionsPanel';

import style from './index.css';
import styleConstants from '../../constants/styleConstants';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <HeroPanel />
        </div>

        <SkewPanel backgroundColor={styleConstants.plain.color.accent}>
          <AssertionsPanel/>
        </SkewPanel>

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
