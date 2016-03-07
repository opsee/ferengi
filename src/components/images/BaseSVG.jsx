import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    svg: PropTypes.string,
    style: PropTypes.object
  },

  render() {
    return (
      <img src={this.props.svg} alt="Opsee devices" style={this.props.style}/>
    );
  }
});