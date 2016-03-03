import React from 'react';

import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';

export default React.createClass({
  render() {
    return (
      <div>
        <HeroPanel />
        <SignUpPanel />
      </div>
    );
  }
});
