import React, {PropTypes} from 'react';
import _ from 'lodash';
import cx from 'classnames';
import BaseSVG from '../images/BaseSVG';
import linkSVG from '../images/icons/material-link.svg';

import style from './heading.css';
import {Padding} from '../layout';

const Heading = React.createClass({
  propTypes: {
    children: PropTypes.node,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    style: PropTypes.object,
    noPadding: PropTypes.bool,
    className: PropTypes.string,
    permalink: PropTypes.string
  },

  getDefaultProps() {
    return {
      level: 1,
      style: {}
    };
  },

  getClass() {
    const string = `h${this.props.level}`;
    return [style.heading, style[string], this.props.className].join(' ');
  },

  getPadding(){
    let padding = this.props.level < 4 ? 2 : 1;
    if (this.props.noPadding){
      padding = 0;
    }
    return {
      b: padding
    };
  },

  renderPermalink() {
    return (
      <div className={style.permalink}>
        <a href={`#${this.props.permalink}`}>
          <BaseSVG svg={linkSVG} />
        </a>
      </div>
    );
  },

  render(){
    const string = `h${this.props.level}`;
    const className = cx([this.props.className, style[string]]);
    const props = _.assign({}, this.props, {className});

    return (
      <Padding {...this.getPadding()} className={this.getClass()}>
        {React.createElement(string, props, this.props.children)}

        { this.props.permalink ? this.renderPermalink() : null }
      </Padding>
    );
  }
});

export default Heading;