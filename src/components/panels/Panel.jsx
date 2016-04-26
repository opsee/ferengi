import cx from 'classnames';
import React, { PropTypes } from 'react';
import style from './panel.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
  },

  render() {
    return (
      <div className={cx(style.panel, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
});