import _ from 'lodash';
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import StaticHeader from '../../panels/StaticHeader';
import WizardPanel from '../../panels/WizardPanel';

const Try = React.createClass({
  propTypes: {
    query: PropTypes.shape({
      url: PropTypes.string,
      assertions: PropTypes.string, // since it's stringified
      email: PropTypes.string
    })
  },

  getQuery() {
    const parsedQuery = _.assign({}, this.props.query, {
      assertions: JSON.parse(_.get(this.props.query, 'assertions', null))
    });
    return _.pickBy(parsedQuery, d => {
      return !_.isEmpty(d); // Let the Wizard use the default params
    });
  },

  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Try Out Opsee</h1>
            <h3>Catfish grouper lungfish flounder mudshark</h3>
          </div>
        </StaticHeader>

        <WizardPanel query={this.getQuery()} loadOnMount />
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  query: state.router.location.query
});

export default connect(mapStateToProps, null)(Try);