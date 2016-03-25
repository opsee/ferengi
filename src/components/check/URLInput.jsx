import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import style from './urlInput.css';
import ButtonInput from '../forms/ButtonInput';

const URLInput = React.createClass({
  propTypes: {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    redux: PropTypes.shape({
      checks: PropTypes.shape({
        catfish: PropTypes.object
      })
    }).isRequired
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
    if (this.props.redux.checks.catfish.error){
      const msg = 'Something went wrong... try again';
      return (
        <div className={style.alert}>{msg}</div>
      );
    }
    return null;
  },
  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <ButtonInput onChange={this.handleChange} type="text" value={this.state.url}
            buttonText="Show me" onClick={this.handleSubmit} isLoading={this.props.isLoading}
            chevron={!this.props.isLoading} />
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