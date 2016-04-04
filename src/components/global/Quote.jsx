import cx from 'classnames';
import React, { PropTypes } from 'react';
import { Padding } from '../layout';
import BaseSVG from '../images/BaseSVG';
import style from './quote.css';

export default React.createClass({
  propTypes: {
    // The quote itself
    children: PropTypes.node.isRequired,
    // The name of the person being quoted
    author: PropTypes.string.isRequired,
    // The quote author's current position at the given company
    position: PropTypes.string,
    // Optional. A company logo or similar
    logo: PropTypes.string,
    // Optional. A company URL
    url: PropTypes.string,
    className: PropTypes.string,
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
          <div className={style.meta}><em>{this.props.position}</em></div>
        </Padding>
      </div>
    );
  }
});