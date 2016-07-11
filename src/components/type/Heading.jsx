import React, {PropTypes} from 'react';
import _ from 'lodash';
import cx from 'classnames';
import Permalink from './Permalink';
import BaseSVG from '../images/BaseSVG';
import linkSVG from '../images/icons/material-link.svg';
import style from './heading.css';

const Heading = React.createClass({
  propTypes: {
    children: PropTypes.node,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    style: PropTypes.object,
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
    let props = _.assign({}, this.props, {className});
    props = _.omit(props, ['permalink', 'level', 'l']);

    return (
      <div id={this.props.permalink || ''} className={this.getClass()}>
        {React.createElement(string, props, this.props.children)}

        { this.props.permalink ?
          <Permalink link={this.props.permalink} className={style.permalink} />
        : null }
      </div>
    );
  }
});

export default Heading;