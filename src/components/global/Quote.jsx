import cx from 'classnames';
import React, { PropTypes } from 'react';
import { Padding } from '../layout';
import BaseSVG from '../images/BaseSVG';
import style from './quote.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node.isRequired, // The quote itself
    author: PropTypes.string.isRequired,
    company: PropTypes.string,
    position: PropTypes.string,
    logo: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string
  },

  getClass() {
    return cx(style.quote, this.props.className);
  },

  render() {
    return (
      <div className={this.getClass()}>
        { this.props.logo ?
          <Padding tb={1}>
            <a href={this.props.url} target="_blank">
              <BaseSVG svg={this.props.logo} className={style.logo} />
            </a>
          </Padding>
        : null }

        <Padding tb={1}>
          <blockquote>{this.props.children}</blockquote>
        </Padding>

        <Padding tb={1}>
          <div className={style.author}><strong>{this.props.author}</strong></div>
          <div className={style.meta}>{this.props.position}, {this.props.company}</div>
        </Padding>
      </div>
    );
  }
});