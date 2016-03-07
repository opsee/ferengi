import React from 'react';

import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';

export default React.createClass({
  render() {
    return (
      <div>
        <HeroPanel />
        <SummaryPanels />
        <SignUpPanel />
      </div>
    );
  }
});
