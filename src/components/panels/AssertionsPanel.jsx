import React from 'react';

import {Grid, Row} from '../layout';
import Panel from './Panel.jsx';
import TryCheck from '../check/TryCheck';

import style from './assertionsPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <Grid>
          <Row>
            <div className={style.container}>
              <h2>See for yourself what health checks can do.</h2>
            </div>
          </Row>

          <Row>
            <div className={style.container}>
              <TryCheck />
            </div>
          </Row>
        </Grid>
      </Panel>
    );
  }
});