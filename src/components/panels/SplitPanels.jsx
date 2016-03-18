import classnames from 'classnames';
import React, { PropTypes } from 'react';
import style from './splitPanels.css';
import BaseSVG from '../images/BaseSVG';

export const SplitContainer = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string
  },

  getClass() {
    return [
      style.splitContainer,
      this.props.className
    ].join(' ');
  },

  render() {
    return (
      <div className={this.getClass()}>
        {this.props.children}
      </div>
    );
  }
});

export const SplitPanel = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    align: PropTypes.oneOf(['top', 'center', 'bottom'])
  },

  getDefaultProps() {
    return {
      align: null,
    };
  },

  getClass() {
    return classnames(
      style.splitPanel,
      this.props.className,
      {
        'align-self-start': this.props.align === 'top',
        'align-self-end': this.props.align === 'bottom',
    });
  },

  render() {
    return (
      <div className={this.getClass()}>
        {this.props.children}
      </div>
    );
  }
});
