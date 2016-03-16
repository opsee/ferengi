import React, { PropTypes } from 'react';
import style from './skewDivider.css';

export default React.createClass({
  propTypes: {
    className: PropTypes.string
  },
  render() {
    return (
      <div className={[style.divider, this.props.className].join(' ')} />
    );
  }
})