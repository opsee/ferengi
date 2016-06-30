import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import StaticHeader from '../../panels/StaticHeader';
import Panel from '../../panels/Panel';
import WizardPanel from '../../panels/WizardPanel';

const Try = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Try Out Opsee</h1>
            <h3>Catfish grouper lungfish flounder mudshark</h3>
          </div>
        </StaticHeader>

        <WizardPanel query={this.props.query} loadOnMount />
      </div>
    );
  }
});


const mapStateToProps = (state) => ({
  query: state.router.location.query
});

export default connect(mapStateToProps, null)(Try);