import React, { PropTypes } from 'react';
import style from './urlInput.css';
import ButtonInput from '../forms/ButtonInput';

export default React.createClass({
  propTypes: {
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
  },

  getInitialState() {
    return {
      url: 'http://jsonplaceholder.typicode.com/users/1'
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

  render() {
    return (
      <div className={style.urlInput}>
        <form onSubmit={this.handleSubmit}>
          <ButtonInput onChange={this.handleChange} type="text" value={this.state.url}
            buttonText="Show me" onClick={this.handleSubmit} isLoading={this.props.isLoading}
            chevron={!this.props.isLoading} />
        </form>
      </div>
    );
  }
});