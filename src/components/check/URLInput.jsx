import React, { PropTypes } from 'react';
import style from './urlInput.css';

export default React.createClass({
  getInitialState() {
    return {
      url: 'https://pepe.therarest.com:8420'
    }
  },

  handleChange(e) {
    this.setState({ url: e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();
    alert('i dare one more motherfucker 2 aks me that');
  },

  render() {
    return(
      <div className={style.urlInput}>
        <form onSubmit={this.handleSubmit}>
          <div className={style.wrapInput}>
            <input className={style.input} type="text" value={this.state.url}
              onChange={this.handleChange} />
          </div>

          <div className={style.wrapButton}>
            <button className={style.button} onClick={this.handleSubmit}>Monitor this!</button>
          </div>
        </form>
      </div>
    );
  }
})