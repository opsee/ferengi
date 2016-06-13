import React, {PropTypes} from 'react';
import {Link, History} from 'react-router';
import _ from 'lodash';

import {ChevronRight} from 'emissary/src/js/components/icons';
import {plain as seed} from 'seedling';
import cx from 'classnames';
import style from './button.css';

const Button = React.createClass({
  mixins: [History],
  propTypes: {
    secondary: PropTypes.bool,
    color: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    target: PropTypes.string,
    to: PropTypes.string,
    chevron: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
  },
  getDefaultProps(){
    return {
      color: 'default',
      type: 'button',
      fill: true
    };
  },
  getClass(){
    let arr = [style.btn];
    for (const prop in this.props){
      if (this.props[prop]){
        const selector = prop.match('color|text') ? this.props[prop] : prop;
        const styleName = `btn${ _.startCase(selector).split(' ').join('')}`;
        arr.push(style[styleName]);
      }
    }
    arr.push(this.props.className);
    return cx(arr);
  },
  handleClick(e){
    if (!this.props.disabled && typeof this.props.onClick === 'function'){
      e.preventDefault();
      this.props.onClick();
    }
  },
  handleLinkClick(e){
    if (!this.props.disabled && this.props.target && this.props.target === '_blank'){
      e.preventDefault();
      e.stopPropagation();
      window.open(this.history.createHref(this.props.to));
    }
  },
  renderChevron(){
    if (this.props.chevron){
      let fill = seed.color.text;
      if (this.props.disabled){
        fill = seed.color.text2;
      }
      return <ChevronRight inline fill={fill}/>;
    }
    return null;
  },
  renderInner(){
    return (
      <span>
        {this.props.children}
        {this.renderChevron()}
      </span>
    );
  },
  render(){
    if (this.props.to){
      return (
        <Link {...this.props} className={this.getClass()} onClick={this.handleLinkClick} title={this.props.title}>
          {this.renderInner()}
        </Link>
      );
    } else if (this.props.href){
      return (
        <a className={this.getClass()} onClick={this.props.onClick} href={this.props.href} target={this.props.target} title={this.props.title} style={this.props.style}>
          {this.renderInner()}
        </a>
      );
    }
    return (
      <button className={this.getClass()} type={this.props.type} onClick={this.handleClick} disabled={this.props.disabled} title={this.props.title} style={this.props.style}>
        {this.renderInner()}
      </button>
    );
  }
});

export default Button;