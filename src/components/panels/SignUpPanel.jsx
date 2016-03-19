import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import Panel from './Panel.jsx';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Padding from '../layout/Padding';
import * as actions from '../../actions/user';
import style from './signUpPanel.css';

const SignUpPanel = React.createClass({
  propTypes: {
    location: PropTypes.object,
    actions: PropTypes.shape({
      signup: PropTypes.func.isRequired
    }),
  },
  getInitialState() {
    return {
      email: undefined,
      referrer: this.getReferrer(),
      name: 'default',
      tos: false
    };
  },
  getReferrer(){
    let ref = this.props.location.query.referrer;
    if (!ref && typeof window !== 'undefined'){
      ref = window.localStorage.getItem('referrer');
    }
    return ref;
  },
  getStatus(){
    return this.props.redux.asyncActions.signup.status;
  },
  handleInputChange(e, data){
    if (e && e.target){
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  },
  handleSubmit(e){
    e.preventDefault();
    this.props.actions.signup(this.state);
  },
  renderAlert(){
    if (this.getStatus() && this.getStatus() !== 'pending'){
      let msg = 'Something went wrong.';
      if (typeof this.getStatus() === 'object'){
        msg = _.get(this.getStatus(), 'message') || msg;
      }
      return (
        <Padding t={1} b={1}>
          {msg}
        </Padding>
      );
    }
    return null;
  },
  renderForm(){
    if (this.getStatus() === 'success'){
      return (
        <Padding t={2} b={1}>
          We&rsquo;ve got your info! Check your email to get started.
        </Padding>
      )
    }
    return (
      <div>
        <Padding t={2} b={1}>
          <Input className={style.input} name="email" placeholder="Your email" value={this.state.email} type="email" onChange={this.handleInputChange}/>
          <div>
            <a href="/beta-tos" target="_blank">Terms of Service</a><br/>
            <label>I accept the Terms of Service referenced above
              <input name="tos" value={this.state.tos} type="checkbox" onChange={this.handleInputChange} required/>
            </label>
          </div>
        </Padding>
        {this.renderAlert()}
        <Padding t={1} b={2}>
          <Button className={style.button} type="submit" disabled={this.getStatus() === 'pending'}>
            {this.getStatus() === 'pending' ? 'Submitting...' : 'Sign up for Opsee'}
          </Button>
        </Padding>
      </div>
    )
  },
  render() {
    return (
      <Panel>
        <div className={style.panel}>
          <div className={style.container}>
            <div className="text-center">
              <h1 className={style.heading}>Ready to <span className="text-accent">get Opsee?</span></h1>
              <div className={['prose-darkbg', style.prose].join(' ')}>Opsee is free during public beta. Join now by giving us your email address below, and we&rsquo;ll send you a link to your very own Opsee account.</div>
             </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderForm()}
            </form>
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