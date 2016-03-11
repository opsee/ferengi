import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/checks';
import URLInput from './URLInput';
import style from './tryCheck.css';

const TryCheck = React.createClass({
  propTypes: {
    actions: PropTypes.shape({
      checkURL: PropTypes.func.isRequired
    }),
    redux: PropTypes.shape({
      asyncActions: PropTypes.shape({
        checkUrl: PropTypes.object
      }),
      checks: PropTypes.shape({
        catfish: PropTypes.shape({
          responses: PropTypes.array
        })
      })
    })
  },

  getInitialState() {
    return {
      isLoading: false
    };
  },

  getResponses() {
    const isSuccess = this.props.redux.asyncActions.checkUrl.status === 'success';
    const responses = this.props.redux.checks.catfish.responses;
    return isSuccess ? responses : null;
  },

  isLoading() {
    const requestStatus = this.props.redux.asyncActions.checkUrl.status;
    return requestStatus === 'pending';
  },

  handleSubmit(url) {
    this.setState({ isLoading: true });
    this.props.actions.checkURL(url);
  },

  renderResponses() {
    const responses = this.getResponses();
    if (!responses) {
      return null;
    }

    return (
      <div className={style.response}>
        <pre>{JSON.stringify(responses)}</pre>
      </div>
    );
  },

  render() {
    return (
      <div className='width-full'>
        <div>
          <URLInput handleSubmit={this.handleSubmit} isLoading={this.isLoading()} />
        </div>
        <div>
          { this.renderResponses() }
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  redux: state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TryCheck);