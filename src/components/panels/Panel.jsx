import React, { PropTypes } from 'react';
import style from './panel.css';

export default React.createClass({
  render() {
    return (
      <div className={style.panel}>
        {this.props.children}
      </div>
    );
  }
})