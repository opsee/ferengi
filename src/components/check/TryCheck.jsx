import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as actions from '../../actions/checks';
import URLInput from './URLInput';
import style from './tryCheck.css';
import CheckResponseSingle from './CheckResponseSingle';
import AssertionSelection from './AssertionSelection';
import smoothScroll from 'smoothscroll';

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
      isLoading: false,
      assertions: []
    };
  },

  componentWillReceiveProps(nextProps) {
    const isCurrentSuccess = this.props.redux.asyncActions.checkUrl.status === 'success';
    const isNowSuccess = nextProps.redux.asyncActions.checkUrl.status === 'success';
    if (!isCurrentSuccess && isNowSuccess) {
      const target = document.querySelector('#scrollAnchor');
      smoothScroll(target);
    }
  },

  getResponses() {
    const isSuccess = this.props.redux.asyncActions.checkUrl.status === 'success';
    const responses = this.props.redux.checks.catfish.responses;
    return isSuccess ? responses : null;
  },

  getFirstResponse(){
    const res = _.chain(this.getResponses()).head().get('http_response').value();
    if (res && res.headers){
      let headers = {};
      res.headers.forEach(h => {
        headers[h.name] = h.values.join('; ');
      });
      return _.assign({}, res, {headers});
    }
    return null;
  },

  isLoading() {
    const requestStatus = this.props.redux.asyncActions.checkUrl.status;
    return requestStatus === 'pending';
  },

  handleSubmit(url) {
    this.setState({ isLoading: true });
    this.props.actions.checkURL(url);
  },

  handleAssertionsChange(){
    return true;
  },

  renderResponses() {
    const first = this.getFirstResponse();
    if (first){
      return (
        <div>
          <div className={style.response}>
            <CheckResponseSingle {...first}/>
          </div>

          <div className={style.prose}>
            <h2>Health checks are <span className='text-accent'>more</span> than just a status code</h2>
            <p>Lots of webservers will happily return a status code of 200 even if the underlying service is broken or misconfigured. Assertions let you dig deep into the health check response to ensure that everything is working exactly how you expect. Pull out headers and parse some JSON. Go on, it's fun.</p>
          </div>

          <form ref="form">
            <AssertionSelection assertions={this.state.assertions} onChange={this.handleAssertionsChange}
              response={this.getFirstResponse()} responseFormatted={this.getFirstResponse()}/>
          </form>
        </div>
      );
    }
    return null;
  },

  render() {
    return (
      <div id="scrollAnchor" className={style.container}>
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