import React from 'react';
import style from './container.css';

export default React.createClass({
  render() {
    return(
      <div className={style.container}>
        {this.props.children}
      </div>
    );
  }
});