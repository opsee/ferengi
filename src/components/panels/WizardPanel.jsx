import _ from 'lodash';
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
        <Padding t={3} b={1} className={style.iconHeading}>{i}. {heading}</Padding>
        <p>{text}</p>
      </div>
    );
  },

  render() {
    console.log(this.props.redux.checks);
    return (
      <Panel>
        <Padding b={4} className="text-center">
          <Heading level={2}>Create a Health Check</Heading>
          <div>Try it out in just three steps.</div>
        </Padding>

        <Grid fluid>
          <Row className="between-xs">
            <Col xs={12} sm={3}>
              {this.renderStep(1)}
            </Col>
            <Col xs={12} sm={8}>
              <div className={style.iconGroup}>
                <div className={style.urlInputWrapper}>
                  <URLInput url={this.props.redux.checks.url}
                    handleSubmit={this.props.actions.checkURL} />
                  <CheckResponseSingle {...this.getResponse(true)} />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="between-xs">
            <Col xs={12} sm={3}>
              {this.renderStep(2)}
            </Col>
            <Col xs={12} sm={8}>
              do a thing
            </Col>
          </Row>

          <Row className="middle-xs between-xs">
            <Col xs={12} sm={3}>
              {this.renderStep(3)}
            </Col>
            <Col xs={12} sm={8}>
              do a thing
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