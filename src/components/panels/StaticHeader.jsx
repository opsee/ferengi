import React, { PropTypes } from 'react';
import style from './staticHeader.css';

const StaticHeader = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  render() {
    return (
      <div className={[this.props.className, style.header].join(' ')}>
        {this.props.children}
      </div>
    );
  }
});

export default StaticHeader;