import React from 'react';

import Button from '../forms/Button';
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
                    <p className='prose'>
                      We auto scale with your AWS infrastructure & services, and
                      there are no agents to install or shell scripts to cURL.
                      Just give us a set of AWS keys and we'll take care of the
                      rest. Wave goodbye to false alarms and blind spots.
                    </p>

                    <Button className={style.button} secondary={true} chevron={true}>
                      Learn more about AWS
                    </Button>
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
                      <h2>Finally, monitoring designed for the developer on call.</h2>
                    </div>
                    <p className='prose'>
                      You moved to the cloud and broke up the monolith, and
                      you’re even trying out devs in your on-call rotation.
                      Opsee has your back, with tools to resolve incidents from
                      anywhere. Time to go on call?  It's time to get Opsee.
                    </p>

                    <Button className={style.button} secondary={true} chevron={true}>
                      Get Opsee
                    </Button>
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