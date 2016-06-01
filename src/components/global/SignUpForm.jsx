import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Input from '../forms/Input';
import Button from '../forms/Button';
import Padding from '../layout/Padding';
import style from './signUpForm.css';

const SignUpForm = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func,
    status: PropTypes.string,
    location: PropTypes.object
  },
  getInitialState() {
    return {
      email: undefined,
      referrer: this.getReferrer(),
      name: 'default',
      tos: false,
      validationError: undefined
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
    return this.props.status;
  },
  onInputChange(e){
    if (e && e.target){
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      let state = {
        [e.target.name]: value
      };
      if (e.target.name === 'tos' && value){
        state.validationError = undefined;
      }
      this.setState(state);
    }
  },
  onSubmit(e){
    e.preventDefault();
    if (!this.state.tos){
      return this.setState({
        validationError: 'You must accept the Terms of Service below.'
      });
    }
    return this.props.onSubmit(this.state);
  },
  renderAlert(){
    if (this.getStatus() && this.getStatus() !== 'pending'){
      let msg = 'Something went wrong.';
      if (typeof this.getStatus() === 'object'){
        msg = _.get(this.getStatus(), 'message') || msg;
      }
      return (
        <div className={style.alert}>{msg}</div>
      );
    }
    return null;
  },
  renderValidationError(){
    if (this.state.validationError){
      return (
        <div className={style.alert}>{this.state.validationError}</div>
      );
    }
    return null;
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Padding t={1} b={1}>
          {this.renderAlert()}
          {this.renderValidationError()}
        </Padding>

        <Padding t={2} b={1}>
          <Input className={style.input} name="email" placeholder="Your email" value={this.state.email} type="email" onChange={this.onInputChange}/>
        </Padding>

        <Padding b={1}>
          <Button className={style.button} type="submit" disabled={this.getStatus() === 'pending'}>
            {this.getStatus() === 'pending' ? 'Submitting...' : 'Sign up for Opsee'}
          </Button>
        </Padding>

        <Padding tb={1}>
          <div className={[style.tos, 'clearfix'].join(' ')}>
            <input id="js-tos" name="tos" value={this.state.tos} type="checkbox" onChange={this.onInputChange} required/>
            <label className={style.label} htmlFor="js-tos">I accept the <a href="/beta-tos" target="_blank">Opsee Terms of Service</a></label>
          </div>
        </Padding>
      </form>
    );
  }
});

const mapStateToProps = (state) => ({
  location: state.router.location
});

export default connect(mapStateToProps, null)(SignUpForm);