import React, { PropTypes } from 'react';
import Button from '../forms/Button';
import style from './urlInput.css';

export default React.createClass({
  propTypes: {
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
  },

  getInitialState() {
    return {
      url: 'http://jsonplaceholder.typicode.com:80/users'
    };
  },

  handleChange(e) {
    this.setState({ url: e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.url);
  },

  renderButton() {
    const text = this.props.isLoading ? 'Loading...' : 'Monitor this!';
    return (
      <Button className={style.button} onClick={this.handleSubmit} disabled={this.props.isLoading}>
        {text}
      </Button>
    );
  },

  render() {
    return (
      <div className={style.urlInput}>
        <form onSubmit={this.handleSubmit}>

          <div className={style.wrapInput}>
            <input className={style.input} type="text" value={this.state.url}
              onChange={this.handleChange} />
          </div>

          <div className={style.wrapButton}>
            {this.renderButton()}
          </div>

          <div style={{clear: 'both'}} />
        </form>
      </div>
    );
  }
});