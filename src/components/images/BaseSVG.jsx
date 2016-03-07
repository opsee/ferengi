import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    svg: PropTypes.string
  },

  render() {
    return (
      <img src={this.props.svg} alt="Opsee devices" style={{height: 80}}/>
    );
  }
});