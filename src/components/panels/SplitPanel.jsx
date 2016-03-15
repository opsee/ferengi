import React from 'react';
import Container from '../layout/Container';
import {Grid, Row, Col} from 'emissary/src/js/modules/bootstrap';
import style from './splitPanel.css';

export default React.createClass({
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