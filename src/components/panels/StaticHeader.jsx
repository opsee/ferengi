import React, { PropTypes } from 'react';
import Header from '../Header';
import style from './staticHeader.css';

const StaticHeader = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  render() {
    return (
      <div className={[this.props.className, style.header].join(' ')}>
        <Header theme='light' />

        <div className={style.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default StaticHeader;