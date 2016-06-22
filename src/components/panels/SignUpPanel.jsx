import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { getReferrer } from '../../modules/referrer';
import Panel from './Panel.jsx';
import Padding from '../layout/Padding';
import SignUpForm from '../global/SignUpForm';
import * as actions from '../../actions/user';
import style from './signUpPanel.css';

const SignUpPanel = React.createClass({
  propTypes: {
    location: PropTypes.object,
    actions: PropTypes.shape({
      signup: PropTypes.func.isRequired
    }),
    redux: PropTypes.shape({
      asyncActions: PropTypes.shape({
        signup: PropTypes.object
      })
    })
  },
  getInitialState() {
    return {
      data: null
    };
  },
  getStatus(){
    return this.props.redux.asyncActions.signup.status;
  },
  getReferrer(){
    return getReferrer(this.props.location);
  },
  onChange(data) {
    this.setState({ data });
  },
  onSubmit(data){
    this.setState({ data });
    return this.props.actions.signup(data);
  },
  renderTitle(){
    if (this.getReferrer() === 'betalist') {
      return (
        <h1 className={style.heading}>Welcome, <span className="text-accent">BetaList</span> community!</h1>
      );
    }

    return (
      <h1 className={style.heading}>Ready to <span className="text-accent">get Opsee?</span></h1>
    );
  },
  render() {
    return (
      <Panel>
        <div id="signup" className={style.panel}>
          <div className={style.container}>

            <Padding t={4} b={2} className="text-center">
              {this.renderTitle()}
              <div className={style.subheading}>Opsee is free during public beta. Join now by giving us your email address below, and we&rsquo;ll send you a link to your very own Opsee account.</div>
            </Padding>

            <SignUpForm successText="Redirecting you to Opsee..." status={this.getStatus()} onChange={this.onChange} onSubmit={this.onSubmit} />
          </div>
        </div>
      </Panel>
    );
  }
});

const mapStateToProps = (state) => ({
  redux: state,
  location: state.router.location
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPanel);