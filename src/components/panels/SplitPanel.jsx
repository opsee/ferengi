import React, {PropTypes} from 'react';
import {Grid, Row} from 'emissary/src/js/modules/bootstrap';
import style from './splitPanel.css';

export default React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  render() {
    return (
      <Grid>
        <div className={style.panel}>
          <Row className="flex-vertical-align-sm">
            {this.props.children}
          </Row>
        </div>
      </Grid>
    );
  }
});