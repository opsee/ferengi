import React, { PropTypes }  from 'react';
import { Col } from 'emissary/src/js/modules/bootstrap';

export default React.createClass({
  propTypes: {
    children: PropTypes.node,
    order: PropTypes.number
  },

  getDefaultProps() {
    return {
      order: 1
    };
  },

  render() {
    return (
      <Col xs={12} sm={6} className={`align-self-start flex-order-${this.props.order}-sm`}>
        {this.props.children}
      </Col>
    );
  }
});