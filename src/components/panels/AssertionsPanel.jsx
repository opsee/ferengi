import React from 'react';

import {Grid, Row} from 'emissary/src/js/modules/bootstrap';
import Container from '../layout/Container';
import Panel from './Panel.jsx';
import TryCheck from '../check/TryCheck';

import style from './assertionsPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <Container>
          <Grid>
            <Row>
              <div className={style.container}>
                <h2>Health checks are more than just a status code</h2>
                <p className="prose">Your services can return a 200 status code even if they&rsquo;re broken
                or misconfigured. Assertions let you dig deep into the response and
                ensure that everything is working exactly as expected. Pull out
                headers and parse some JSON. Go on, it&rsquo;s fun.</p>
              </div>
            </Row>

            <Row>
              <div className={style.container}>
                <TryCheck />
              </div>
            </Row>
          </Grid>
        </Container>
      </Panel>
    );
  }
});