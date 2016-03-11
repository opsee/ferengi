import React from 'react';

import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';
import AssertionsPanel from '../panels/AssertionsPanel';

import styleConstants from '../../constants/styleConstants';

export default React.createClass({
  render() {
    return (
      <div>
        <div>
          <HeroPanel />
        </div>

        <SkewPanel backgroundColor={styleConstants.plain.color.neutral2}>
          <AssertionsPanel/>
        </SkewPanel>

        <div>
          <SummaryPanels />
        </div>

        <SkewPanel backgroundColor={styleConstants.plain.color.accent} skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
