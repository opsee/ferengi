import React, { PropTypes } from 'react';
import style from './baseSVG.css';

export default React.createClass({
  propTypes: {
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object
  },

  render() {
    // FIXME this is pretty gross; investigate a better way that works on both
    // client and server.
    const isEncoded = this.props.svg.substring(0, 10) === 'data:image';
    const src = isEncoded ? this.props.svg : `/${this.props.svg}`;

    return (
      <img className={style.svg} src={src} alt={this.props.alt} style={this.props.style}/>
    );
  }
});