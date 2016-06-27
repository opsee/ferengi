import _ from 'lodash';
import cx from 'classnames';
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/app';

import {Grid, Row, Col} from '../layout';
import { Heading } from '../type';
import BaseSVG from '../images/BaseSVG';
import Panel from './Panel.jsx';
import Padding from '../layout/Padding';
import URLInput from '../check/URLInput';
import TryCheck from '../check/TryCheck';
import CheckResponseSingle from '../check/CheckResponseSingle';
import AssertionSelection from '../check/AssertionSelection';
import { Button, Input } from '../forms';
import SignUpForm from '../global/SignUpForm';

import style from './wizardPanel.css';
import mailSVG from '../images/icons/mail';
import targetSVG from '../images/icons/target';
import taskSVG from '../images/icons/task';

const WizardPanel = React.createClass({
  propTypes: {
    actions: PropTypes.shape({
      checkURL: PropTypes.func.isRequired
    })
  },

  componentDidMount() {
    this.handleURLSubmit('https://try.opsee.com');
  },

  getInitialState() {
    return {
      url: '',
      assertions: [{
        key: 'code',
        relationship: 'equal',
        operand: '200'
      }],
      email: '',
      referrer: null
    }
  },

  getResponse(formatHeaders) {
    const res = _.chain(this.props.redux.checks.responses).head().get('http_response').value();
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
    return this.props.redux.asyncActions.signupWithCheck.status;
  },

  handleAssertionChange(assertions) {
    this.setState({ assertions });
  },

  handleURLSubmit(url) {
    this.setState({ url });
    this.props.actions.checkURL(url);
  },

  handleSignUp(signupData) {
    const data = _.assign({}, this.state, signupData);
    this.props.actions.signupWithCheck(data);
    this.setState(data);
  },

  renderStep(i) {
    let icon, text, heading, inner;
    switch (i) {
      case 1:
        icon = targetSVG;
        heading = 'Choose your target';
        text = 'A target can be a URL, such as an API endpoint, or an internal service, such as an AWS EC2 instance.';
        break;
      case 2:
        icon = taskSVG;
        heading = 'Define your assertions';
        text = 'A target can be a URL, such as an API endpoint, or an internal service, such as an AWS EC2 instance.';
        break;
      case 3:
        icon = mailSVG;
        heading = 'Set up notifications';
        text = 'A target can be a URL, such as an API endpoint, or an internal service, such as an AWS EC2 instance.';
        break;
    }
    return (
      <div className={style.iconGroup}>
        <div className={style.icon}>
          <BaseSVG svg={icon} />
        </div>
        <Padding t={2} className={cx(style.iconHeading, 'text-center')}>
          <div className="text-accent">Step {i}</div>
          {heading}
        </Padding>
        <p>{text}</p>
      </div>
    );
  },

  renderResponse() {
    const response = this.getResponse(true);
    if (!response) {
      return null;
    }
    return (
      <CheckResponseSingle {...this.getResponse(true)} />
    );
  },

  render() {
    return (
      <Panel>
        <Padding b={4} className="text-center">
          <Heading level={2}>Create a Health Check</Heading>
          <div>Try it out in just three steps.</div>
        </Padding>

        <Grid fluid>
          <Row className={cx(style.row, "between-xs")}>
            <Col xs={12} sm={3}>
              {this.renderStep(1)}
            </Col>
            <Col xs={12} sm={8}>
              <div className={style.iconGroup}>
                <div className={style.urlInputWrapper}>
                  <URLInput url={this.props.redux.checks.url || 'https://try.opsee.com'}
                    status={this.props.redux.asyncActions.checkUrl.status} handleSubmit={this.handleURLSubmit} />
                  {this.renderResponse()}
                </div>
              </div>
            </Col>
          </Row>

          <Row className={cx(style.row, "between-xs")}>
            <Col xs={12} sm={3}>
              {this.renderStep(2)}
            </Col>
            <Col xs={12} sm={8}>
              <AssertionSelection assertions={this.state.assertions}
                onChange={this.handleAssertionChange}
                response={this.getResponse(false)}
                responseFormatted={this.getResponse(true)} />
            </Col>
          </Row>

          <Row className={cx(style.row, 'between-xs')}>
            <Col xs={12} sm={3}>
              {this.renderStep(3)}
            </Col>
            <Col xs={12} sm={8}>
              <p>Sign up with just your email address. We'll create your free Opsee account, create your first health check, and send you notifications whenever it fails.</p>
              <SignUpForm status={this.getStatus()} onSubmit={this.handleSignUp} />
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  },
});

const mapStateToProps = (state) => ({
  redux: state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardPanel);