import React, { PropTypes } from 'react';
import style from './grid.css';

export const BlockGroup = React.createClass({
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.number
  },

  getStyle() {
    if (!this.props.gutter) {
      return {};
    }

    return {
      margin: `-${this.props.gutter}px 0 0 -${this.props.gutter}px`
    };
  },

  render() {
    return (
      <div className={style.blockGroup} style={this.getStyle()}>
        {this.props.children}
      </div>
    );
  }
});

export const Block = React.createClass({
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.number,
    width: PropTypes.number
  },

  getStyle() {
    const styleSpec = {width: `${this.props.width}%`};
    if (this.props.gutter) {
      styleSpec.padding = `${this.props.gutter}px 0 0 ${this.props.gutter}px`;
    }
    return styleSpec;
  },

  render() {
    return (
      <div className={style.block} style={this.getStyle()}>
        {this.props.children}
      </div>
    );
  }
});