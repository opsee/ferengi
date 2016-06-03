import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as checkActions from '../../actions/checks';
import * as userActions from '../../actions/user';
import URLInput from './URLInput';
import style from './tryCheck.css';
import CheckResponseSingle from './CheckResponseSingle';
import AssertionSelection from './AssertionSelection';
import {Padding} from '../layout';
import SignUpForm from '../global/SignUpForm';
import { trackEvent } from '../../modules/analytics';
import { TRY_CHECK, TRY_CHECK_URL } from '../../constants/analyticsConstants';

const TryCheck = React.createClass({
  propTypes: {
    checkActions: PropTypes.shape({
      checkURL: PropTypes.func.isRequired
    }),
    userActions: PropTypes.shape({
      signupWithCheck: PropTypes.func.isRequired
    }),
    redux: PropTypes.shape({
      asyncActions: PropTypes.shape({
        checkUrl: PropTypes.object,
        signupWithCheck: PropTypes.object
      }),
      checks: PropTypes.shape({
        catfish: PropTypes.shape({
          responses: PropTypes.array,
          error: PropTypes.object
        })
      })
    }),
    url: PropTypes.string
  },

  getDefaultProps(){
    return {
      url: 'https://try.opsee.com'
    };
  },

  // FIXME remove this
  componentDidMount(){
    this.handleSubmit('https://try.opsee.com');
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
    return this.props.redux.checks.catfish.error;
  },

  getResponses() {
    const isSuccess = this.props.redux.asyncActions.checkUrl.status === 'success';
    const responses = this.props.redux.checks.catfish.responses;
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

  getInputClass() {
    const hasResponse = !!this.getResponses();
    return hasResponse ? style.urlInputExpanded : style.urlInput;
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
    this.props.checkActions.checkURL(url);
  },

  handleAssertionsChange(assertions){
    this.setState({ assertions });
  },

  handleSignUp(signUpData) {
    const { url, assertions } = this.state;
    const data = _.assign({ url, assertions}, signUpData);
    this.props.userActions.signupWithCheck(data);
  },

  renderResponses() {
    const first = this.getFirstResponse(true);
    if (first){
      return (
        <div>
          <div className={style.response}>
            <CheckResponseSingle {...first}/>
          </div>

          <div className={style.prose}>
            <h2>Health checks are <span className="text-accent">more</span> than just a status code</h2>
            <p>Lots of webservers will happily return a status code of 200 even if the underlying service is broken or misconfigured. Assertions let you dig deep into the health check response to ensure that everything is working exactly how you expect. Pull out headers and parse some JSON. Go on, it's fun.</p>
          </div>

          <form ref="form">
            <AssertionSelection assertions={this.state.assertions} onChange={this.handleAssertionsChange}
              response={this.getFirstResponse()} responseFormatted={this.getFirstResponse(true)}/>
          </form>

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
      <div className={style.container}>
        <URLInput url={this.props.url} className={this.getInputClass()} handleSubmit={this.handleSubmit}
          error={this.getError()} isLoading={this.isLoading()} />

        <div className={style.response}>
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
  checkActions: bindActionCreators(checkActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TryCheck);