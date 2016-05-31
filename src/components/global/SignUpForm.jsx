import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {Padding} from '../layout';
import {Input, Button} from '../forms';
import style from './signUpForm.css';

const SignUpForm = React.createClass({
  propTypes: {
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    location: PropTypes.shape({
      query: PropTypes.shape({
        referrer: PropTypes.string
      })
    }),
  },
  getDefaultProps(){
    return {
      buttonText: 'Sign up'
    };
  },
  getInitialState() {
    return {
      checkboxID: _.uniqueId(),
      data: {
        email: null,
        name: null,
        tos: false,
        referrer: this.getReferrer()
      },
      validationError: null
    };
  },
  getReferrer(){
    let ref = this.props.location.query.referrer;
    if (!ref && typeof window !== 'undefined'){
      ref = window.localStorage.getItem('referrer');
    }
    return ref;
  },
  isValid() {
    return !this.state.data.email || !this.state.data.name || !this.state.data.tos;
  },
  onChange(e) {
    if (e && e.target){
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      const data = _.assign(this.state.data, {
        [e.target.name]: value
      });
      const state = { data };
      if (e.target.name === 'tos' && value){
        state.validationError = undefined;
      }
      this.setState(state);
    }
  },
  onSubmit(e) {
    e.preventDefault();
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.data);
    }
  },
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <Padding tb={1}>
          <Input name="name" value={this.state.data.name} placeholder="Your Name" className={style.input} onChange={this.onChange} />
        </Padding>
        <Padding tb={1}>
          <Input name="email" value={this.state.data.email} placeholder="address@domain.com" className={style.input} onChange={this.onChange} />
        </Padding>
        <Padding tb={1}>
          <input name="tos" value={this.state.data.tos} type="checkbox" onChange={this.onChange} id={this.state.checkboxID} required />
          <label className={style.label} htmlFor={this.state.checkboxID}>I accept the <a href="/beta-tos" target="_blank">Opsee Terms of Service</a></label>
        </Padding>
        <Padding t={1}>
          <Button type="submit">{this.props.buttonText}</Button>
        </Padding>
      </form>
    );
  }
});

const mapStateToProps = (state) => ({
  location: state.router.location
});

export default connect(mapStateToProps, null)(SignUpForm);