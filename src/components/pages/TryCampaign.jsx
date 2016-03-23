import React, { PropTypes } from 'react';
import Header from '../Header';

const TryCampaign = React.createClass({
  propTypes: {
    children: PropTypes.node
  },

  render() {
    return (
      <div>
        <Header theme="dark" />

        <main>
          hello

          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = TryCampaign;
