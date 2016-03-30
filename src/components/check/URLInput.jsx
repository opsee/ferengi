import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import style from './urlInput.css';
import ButtonInput from '../forms/ButtonInput';

const URLInput = React.createClass({
  propTypes: {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object
  },

  getInitialState() {
    return {
      url: 'https://try.opsee.com'
    };
  },

  handleChange(e) {
    this.setState({ url: e.target.value });
  },

  handleSubmit(e) {
    if (e){
      e.preventDefault();
    }
    this.props.handleSubmit(this.state.url);
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
  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <ButtonInput onChange={this.handleChange} type="text" value={this.state.url}
            buttonText="Show me" onClick={this.handleSubmit} isLoading={this.props.isLoading} />
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