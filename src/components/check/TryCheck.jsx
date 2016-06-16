import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as actions from '../../actions/checks';
import URLInput from './URLInput';
import style from './tryCheck.css';
import CheckResponseSingle from './CheckResponseSingle';
import AssertionSelection from './AssertionSelection';
import { trackEvent } from '../../modules/analytics';
import { TRY_CHECK, TRY_CHECK_URL } from '../../constants/analyticsConstants';

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
          responses: PropTypes.array,
          error: PropTypes.object
        })
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
      assertions: []
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

  getStatus() {
    const { status } = this.props.redux.asyncActions.checkUrl;
    if (status && typeof status === 'string') {
      return status;
    } else {
      return 'error';
    }
  },

  isLoading() {
    const requestStatus = this.props.redux.asyncActions.checkUrl.status;
    return requestStatus === 'pending';
  },

  handleSubmit(url) {
    trackEvent(TRY_CHECK, TRY_CHECK_URL, { url });
    this.setState({ isLoading: true });
    this.props.actions.checkURL(url);
  },

  handleAssertionsChange(){
    return true;
  },

  renderResponses() {
    const first = this.getFirstResponse(true);
    if (first){
      return (
        <div>
          <div className={style.response}>
            <CheckResponseSingle {...first}/>
          </div>

          {this.props.children}

          <form ref="form">
            <AssertionSelection assertions={this.state.assertions} onChange={this.handleAssertionsChange}
              response={this.getFirstResponse()} responseFormatted={this.getFirstResponse(true)}/>
          </form>
        </div>
      );
    }
    return null;
  },

  render() {
    return (
      <div className={style.container}>
        <URLInput url={this.props.url} className={this.getInputClass()} handleSubmit={this.handleSubmit}
          status={this.getStatus()} error={this.getError()} isLoading={this.isLoading()} />

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
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TryCheck);