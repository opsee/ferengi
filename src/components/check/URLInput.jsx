import _ from 'lodash';
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import validUrl from 'valid-url';

import Button from '../forms/Button';
import LoadingDots from '../loaders/LoadingDots';
import style from './urlInput.css';

const URLInput = React.createClass({
  propTypes: {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    status: PropTypes.oneOf([null, 'pending', 'success', 'error']),
    error: PropTypes.object,
    url: PropTypes.string,
    placeholder: PropTypes.string
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ inputState: nextProps.status });
  },

  getDefaultProps() {
    return {
      placeholder: 'https://try.opsee.com'
    };
  },

  getInitialState() {
    return {
      debouncedSubmit: _.debounce(this.handleSubmit, 1000),
      inputState: null,
      isActive: false,
      url: this.props.url || ''
    };
  },

  getInputClass(){
    const styleName = `input${_.capitalize(this.state.inputState)}`;
    return style[styleName];
  },

  getFormattedURL(url) {
    // Prepend http if protocol missing
    if (!url.match(/^https?:\/\//)) {
      return `http://${url}`;
    }
    return url;
  },

  handleChange(e) {
    const url = e.target.value;
    this.setState({
      url,
      inputState: url ? 'pending' : null
    });
    this.state.debouncedSubmit(url);
  },

  handleSubmit(url) {
    const formattedURL = this.getFormattedURL(url);
    if (validUrl.isWebUri(formattedURL)) {
      this.props.handleSubmit(formattedURL);
    } else {
      const inputState = formattedURL ? 'error' : null;
      this.setState({ inputState });
    }
  },

  handleFormSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    // Set placeholder as URL if input is empty
    const url = this.state.url || this.props.placeholder;
    this.setState({ url });
    this.handleSubmit(url);
  },

  renderError(){
    if (!this.props.error || this.state.inputState === 'pending') {
      return null;
    }
    return (
      <div className={style.alert}>
        Something went wrong... try again.
      </div>
    );
  },

  renderInput() {
    const styleName = _.capitalize(this.state.inputState);
    const inputClass = style[`input${styleName}`];

    let innerButton = 'Show Me';
    if (this.state.inputState === 'pending') {
      innerButton = <LoadingDots />;
    }

    return (
      <div className={style.inputGroup}>
        <input value={this.state.url} type="text" aria-label="Try a URL"
          placeholder={this.props.placeholder} className={inputClass}
          onChange={this.handleChange} />

        <div className={style.buttonWrapper}>
          <Button type="submit" className={style.button}>
            {innerButton}
          </Button>
        </div>
      </div>
    );
  },

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleFormSubmit}>
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