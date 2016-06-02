import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import referrer from '../../modules/referrer';
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
      validationError: undefined
    };
  },
  getReferrer(){
    return referrer(this.props.location);
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
      this.setState(state);
    }
  },
  onSubmit(e){
    e.preventDefault();
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
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Padding t={1} b={1}>
          {this.renderAlert()}
        </Padding>

        <Padding b={1}>
          <Input className={style.input} name="email" placeholder="Your email" value={this.state.email} type="email" onChange={this.onInputChange}/>
        </Padding>

        <Padding b={1}>
          <Button className={style.button} type="submit" disabled={this.getStatus() === 'pending'}>
            {this.getStatus() === 'pending' ? 'Submitting...' : 'Sign up for Opsee'}
          </Button>
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