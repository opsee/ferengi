import _ from 'lodash';
import cx from 'classnames';
import React, { PropTypes } from 'react';
import { Padding } from '../layout';
import BaseSVG from '../images/BaseSVG';
import style from './quote.css';
import quotes from '../../data/quotes';

export default React.createClass({
  propTypes: {
    quote: PropTypes.oneOf(_.keys(quotes)),
    className: PropTypes.string
  },

  getClass() {
    return cx(style.quote, this.props.className);
  },

  render() {
    const quote = _.get(quotes, this.props.quote);
    console.log(this.props.quote);

    return (
      <div className={this.getClass()}>
        { _.has(quote, 'logo') ?
          <Padding tb={1}>
            <a href={_.get(quote, 'url')} target="_blank">
              <BaseSVG svg={_.get(quote, 'logo')} className={style.logo} />
            </a>
          </Padding>
        : null }

        <Padding tb={1}>
          <blockquote><p>&ldquo;{_.get(quote, 'quote')}&rdquo;</p></blockquote>
        </Padding>

        <Padding tb={1}>
          <div className={style.author}><strong>{_.get(quote, 'author')}</strong></div>
          <div className={style.meta}>{_.get(quote, 'position')}, {_.get(quote, 'company')}</div>
        </Padding>
      </div>
    );
  }
});