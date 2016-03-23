import React, { PropTypes } from 'react';
import Header from '../Header';
import SignUpPanel from '../panels/SignUpPanel';
import SkewPanel from '../panels/SkewPanel';

const TryCampaign = React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div>
        <Header theme="dark" />

        <main>
          {this.props.children}

          <SkewPanel backgroundColor="#333" skewBottom={false}>
            <SignUpPanel />
          </SkewPanel>
        </main>
      </div>
    );
  }
});

module.exports = TryCampaign;
