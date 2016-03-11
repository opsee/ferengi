import React, { PropTypes } from 'react';

import {Grid, Row, Col} from 'emissary/src/js/modules/bootstrap';
import Container from '../layout/Container';
import Panel from './Panel.jsx';
import TryCheck from '../check/TryCheck';


export default React.createClass({
  render() {
    return (
      <Panel>
        <Container>
          <Grid>
            <Row>
              <h2>Health checks are more than just a status code</h2>
              <p>Your services can return a 200 status code even if they’re broken
              or misconfigured. Assertions let you dig deep into the response and
              ensure that everything is working exactly as expected. Pull out
              headers and parse some JSON. Go on, it's fun.</p>
            </Row>
            <Row>
              <TryCheck />
            </Row>
          </Grid>
        </Container>
      </Panel>
    );
  }
});