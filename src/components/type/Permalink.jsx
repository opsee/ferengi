import React, {PropTypes} from 'react';
import BaseSVG from '../images/BaseSVG';
import linkSVG from '../images/icons/material-link.svg';
import style from './permalink.css';

export default React.createClass({
  propTypes: {
    link: PropTypes.string.isRequired,
    className: PropTypes.string
  },

  getClass() {
    return [style.permalink, this.props.className].join(' ');
  },

  render() {
    return (
      <div className={this.getClass()}>
        <a href={`#${this.props.link}`}>
          <BaseSVG svg={linkSVG} />
        </a>
      </div>
    );
  }
});