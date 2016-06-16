import _ from 'lodash';
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import validUrl from 'valid-url';
import {plain as seed} from 'seedling';

import style from './urlInput.css';

const URLInput = React.createClass({
  propTypes: {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    url: PropTypes.string
  },

  getInitialState() {
    return {
      debouncedSubmit: _.debounce(this.handleSubmit, 500),
      inputState: null,
      isActive: false,
      url: this.props.url || null
    };
  },

  getInputClass(){
    const styleName = `input${_.capitalize(this.state.inputState)}`;
    console.log(styleName);
    console.log(style);
    return style[styleName];
  },

  handleChange(e) {
    this.setState({ url: e.target.value, inputState: 'pending' });
    this.state.debouncedSubmit();
  },

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    const url = this.state.url;
    if (validUrl.isWebUri(url)) {
      console.log(`VALID ${url}`)
      this.props.handleSubmit(this.state.url);
    } else {
      this.setState({ inputState: 'error' });
      console.log(`INVALID ${url}`)
    }
  },

  renderError(){
    if (!this.props.isLoading && this.props.error){
      return (
        <div className={style.alert}>
          Something went wrong... try again.
        </div>
      );
    }
    return null;
  },

  renderInput() {
    console.log(this.getInputClass());
    return (
      <div className={style.inputGroup}>
        <input value={this.state.url} type="text" aria-label="Try a URL"
          className={this.getInputClass()} onChange={this.handleChange} />

      </div>
    );
  },

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput()}
        </form>
        {this.renderError()}
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  redux: state
});

export default connect(mapStateToProps)(URLInput);