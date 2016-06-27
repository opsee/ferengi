import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { getReferrer } from '../../modules/referrer';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Padding from '../layout/Padding';
import style from './signUpForm.css';

const SignUpForm = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    buttonText: PropTypes.string,
    pendingText: PropTypes.string,
    successText: PropTypes.string,
    location: PropTypes.object
  },
  getDefaultProps(){
    return {
      buttonText: 'Sign up for Opsee',
      pendingText: 'Signing up...',
      successText: 'Welcome to Opsee!'
    };
  },
  getInitialState() {
    return {
      data: {
        email: null,
        referrer: this.getReferrer()
      },
      validationError: null
    };
  },
  getReferrer(){
    return getReferrer(this.props.location);
  },
  getStatus(){
    return this.props.status;
  },
  getErrorMessage(){
    if (!this.state.data.email) {
      return 'Email address is required';
    }
    return null;
  },
  getButtonText(){
    switch (this.props.status) {
    case 'pending':
      return this.props.pendingText;
    case 'success':
      return this.props.successText;
    default:
      return this.props.buttonText;
    }
  },
  isDisabled(){
    return this.props.status === 'pending';
  },
  onInputChange(e){
    if (e && e.target){
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      const data = _.assign(this.state.data, {
        [e.target.name]: value
      });
      this.setState({
        data,
        validationError: null
      });
    }
  },
  onSubmit(e){
    e.preventDefault();
    if (!this.isDisabled()) {
      const validationError = this.getErrorMessage();
      if (validationError) {
        this.setState({ validationError });
      } else {
        this.setState({ validationError: null });
        this.props.onSubmit(this.state.data);
      }
    }
  },
  renderAlert(){
    if (this.state.validationError) {
      return (
        <div className={style.alert}>{this.state.validationError}</div>
      );
    }
    const status = this.getStatus();
    if (status && typeof status === 'object'){
      const msg = _.get(status, 'message') || 'Something went wrong.';
      return (
        <div className={style.alert}>{msg}</div>
      );
    }
    return null;
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Padding t={1} b={1}>
          {this.renderAlert()}
        </Padding>

        <Padding b={1}>
          <Input className={style.input} name="email" placeholder="address@domain.com" value={this.state.data.email} type="email" onChange={this.onInputChange}/>
        </Padding>

        <Padding b={1}>
          <Button className={style.button} type="submit" disabled={this.isDisabled()}>{this.getButtonText()}</Button>
        </Padding>

        <p className="small text-center">By proceeding to create your Opsee account, you are agreeing to Opsee's <a href="/beta-tos" target="_blank">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
      </form>
    );
  }
});

const mapStateToProps = (state) => ({
  location: state.router.location
});

export default connect(mapStateToProps, null)(SignUpForm);