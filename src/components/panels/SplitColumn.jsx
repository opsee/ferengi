import React, { PropTypes }  from 'react';
import {Col} from 'emissary/src/js/modules/bootstrap';
/*eslint-disable no-unused-vars*/
import style from './splitPanel.css';
/*eslint-enable no-unused-vars*/

export default React.createClass({
  propTypes: {
    order: PropTypes.number,
    children: PropTypes.node
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