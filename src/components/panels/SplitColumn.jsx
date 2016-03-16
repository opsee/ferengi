import React, { PropTypes }  from 'react';
import {Grid, Row, Col} from 'emissary/src/js/modules/bootstrap';
import style from './splitPanel.css';

export default React.createClass({
  propTypes: {
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