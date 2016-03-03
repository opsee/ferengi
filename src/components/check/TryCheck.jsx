import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/checks';
import URLInput from './URLInput';

const TryCheck = React.createClass({
  propTypes: {
    actions: PropTypes.shape({
      checkURL: PropTypes.func.isRequired
    })
  },

  getInitialState() {
    return {
      isLoading: false
    };
  },

  handleSubmit(url) {
    this.setState({ isLoading: true });
    this.props.actions.checkURL(url);
  },

  render() {
    return (
      <div>
        <URLInput handleSubmit={this.handleSubmit} isLoading={this.state.isLoading} />
      </div>
    );
  }
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(TryCheck);