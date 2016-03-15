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

        <SkewPanel backgroundColor={styleConstants.plain.color.neutral2}>
          <div className={style.assertionsPanel}>
            <AssertionsPanel/>
          </div>
        </SkewPanel>

        <div>
          <SummaryPanels />
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
