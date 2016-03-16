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
