import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as actions from '../../actions/app';
import URLInput from './URLInput';
import CheckResponseSingle from './CheckResponseSingle';
import AssertionSelection from './AssertionSelection';
import {Padding} from '../layout';
import SignUpForm from '../global/SignUpForm';
import { trackEvent } from '../../modules/analytics';
import { TRY_CHECK, TRY_CHECK_URL } from '../../constants/analyticsConstants';

const TryCheck = React.createClass({
  propTypes: {
    actions: PropTypes.shape({
      checkURL: PropTypes.func.isRequired
    }),
    redux: PropTypes.shape({
      asyncActions: PropTypes.shape({
        checkUrl: PropTypes.object,
        signupWithCheck: PropTypes.object
      }),
      checks: PropTypes.shape({
        responses: PropTypes.array,
        error: PropTypes.object
      })
    }),
    children: PropTypes.node,
    url: PropTypes.string
  },

  getDefaultProps(){
    return {
      url: null
    };
  },

  getInitialState() {
    return {
      isLoading: false,
      assertions: [{
        key: 'code',
        relationship: 'equal',
        operand: '200'
      }],
      url: null
    };
  },

  getError() {
    return this.props.redux.checks.error;
  },

  getResponses() {
    const isSuccess = this.props.redux.asyncActions.checkUrl.status === 'success';
    const responses = this.props.redux.checks.responses;
    return isSuccess ? responses : null;
  },

  getFirstResponse(formatHeaders){
    const res = _.chain(this.getResponses()).head().get('http_response').value();
    if (res && res.headers){
      if (formatHeaders){
        let headers = {};
        res.headers.forEach(h => {
          headers[h.name] = h.values.join('; ');
        });
        return _.assign({}, res, {headers});
      }
      return res;
    }
    return null;
  },

  getStatus() {
    const { status } = this.props.redux.asyncActions.checkUrl;
    if (status && typeof status === 'string') {
      return status;
    }
    return 'error';
  },

  isLoading() {
    const requestStatus = this.props.redux.asyncActions.checkUrl.status;
    return requestStatus === 'pending';
  },

  handleSubmit(url) {
    trackEvent(TRY_CHECK, TRY_CHECK_URL, { url });
    this.setState({
      url,
      isLoading: true
    });
    this.props.actions.checkURL(url);
  },

  handleAssertionsChange(assertions){
    this.setState({ assertions });
  },

  handleSignUp(signUpData) {
    const { url, assertions } = this.state;
    const data = _.assign({ url, assertions}, signUpData);
    this.props.actions.signupWithCheck(data);
  },

  renderResponses() {
    const first = this.getFirstResponse(true);
    if (first){
      return (
        <div>
          <CheckResponseSingle {...first}/>
          {this.props.children}

          <AssertionSelection assertions={this.state.assertions} onChange={this.handleAssertionsChange}
            response={this.getFirstResponse()} responseFormatted={this.getFirstResponse(true)}/>

          <Padding t={4}>
            <h2>Get <span className="text-accent">notified</span> when stuff hits the fan</h2>
            <p>Sign up for Opsee to receive notifications when your health check fails.</p>
            <SignUpForm successText="Redirecting you to Opsee..." onSubmit={this.handleSignUp} status={this.props.redux.asyncActions.signupWithCheck.status} />
          </Padding>
        </div>
      );
    }
    return null;
  },

  render() {
    return (
      <div>
        <URLInput url={this.props.url} handleSubmit={this.handleSubmit}
          status={this.getStatus()} error={this.getError()} isLoading={this.isLoading()} />
        {this.renderResponses()}
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