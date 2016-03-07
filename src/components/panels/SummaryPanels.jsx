import React from 'react';

import Container from '../layout/Container';
import Panel from './Panel.jsx';
import style from './summaryPanels.css';
import BaseSVG from '../images/BaseSVG';
import awsGridSVG from '../images/aws_grid.svg';
import deviceGroupSVG from '../images/device_group.svg';
import {Grid, Row, Col} from 'emissary/src/js/modules/bootstrap';

export default React.createClass({
  render() {
    return (
      <div className={style.summaryPanels}>
        <Panel>
          <Container>
            <Grid>
              <div className={style.panel}>
                <Row>
                  <Col xs={12} sm={6}>
                    <div className={style.heading}>
                      <h2>Your team loves AWS. So do we.</h2>
                    </div>
                    <p className={style.prose}>We seamlessly integrate with AWS to do all the hard work for you.
                    There's no software to install, no shell scripts to cURL and no
                    configuration management to run. Just give us a set of AWS keys
                    and we'll take care of the rest. As EC2 instances come and go we'll
                    automatically manage the targets of your health checks, so you can
                    wave goodbye to false alarms and blind spots.</p>
                  </Col>
                  <Col xs={12} sm={6}>
                    <BaseSVG svg={awsGridSVG} style={{maxWidth: '100%'}} />
                  </Col>
                </Row>
              </div>
              <div className={style.panel}>
                <Row>
                  <Col xs={12} sm={6}>
                    <BaseSVG svg={deviceGroupSVG} style={{maxWidth: '100%'}} />
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className={style.heading}>
                      <h2>1999 called, and they want their monitoring system back.</h2>
                    </div>
                    <p className={style.prose}>You've adopted the cloud, you've embraced devops and your team
                    is continously delivering software. So why are you using monitoring
                    software that's old enough to drive a car? Ditch the perl scripts and...</p>
                  </Col>
                </Row>
              </div>
            </Grid>
          </Container>
        </Panel>
      </div>
    );
  }
});