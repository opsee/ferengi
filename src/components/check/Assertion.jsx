import cx from 'classnames';
import React, { PropTypes } from 'react';
import style from './assertion.css';

export default React.createClass({
  propTypes: {
    status: PropTypes.oneOf(['passing', 'failing', null])
  },

  getClass() {
    return cx(style.assertion, {
      [style.assertionPassing]: this.props.status === 'passing',
      [style.assertionFailing]: !this.props.status === 'failing',
    })
  },

  renderCode(){
    // const assertion = this.state.assertions[assertionIndex];
        // {this.renderTitle(assertionIndex, 'Response Code')}

    return (
      <div>

      </div>
    );
  },

  renderInner() {
    const key = this.props.assertion.key || 'code';
    switch (key) {
    default:
      return this.renderCode();
    }
  },

  render() {
    console.log(this.props.assertion);

    return (
      <div className={this.getClass()}>
        {this.renderInner()}
      </div>
    );
  }
});