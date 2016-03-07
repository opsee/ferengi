import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object
  },

  render() {
    const isEncoded = this.props.svg.substring(0, 10) === 'data:image';
    const src = isEncoded ? this.props.svg : `/${this.props.svg}`;

    return (
      <img src={src} alt={this.props.alt} style={this.props.style}/>
    );
  }
});