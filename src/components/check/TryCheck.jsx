import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as actions from '../../actions/checks';
import URLInput from './URLInput';
import style from './tryCheck.css';
import CheckResponseSingle from './CheckResponseSingle';
import AssertionSelection from './AssertionSelection';

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
    const first = this.getFirstResponse(true);
    if (first){
      return (
        <div>
          <div className={style.response}>
            <CheckResponseSingle {...first}/>
          </div>
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