import React from 'react';

export default React.createClass({
  propTypes: {

  },

  render() {
    return (
      <img src={this.props.svg} alt="Opsee devices" style={{height: 80}}/>
    );
  }
});