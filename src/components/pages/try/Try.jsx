import React, { PropTypes } from 'react';

import StaticHeader from '../../panels/StaticHeader';
import Panel from '../../panels/Panel';
import WizardPanel from '../../panels/WizardPanel';

export default React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  render() {
    console.log(this.props.router);

    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Try Out Opsee</h1>
            <h3>Catfish grouper lungfish flounder mudshark</h3>
          </div>
        </StaticHeader>

        <WizardPanel />
      </div>
    );
  }
});