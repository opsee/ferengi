import React from 'react';

import Button from '../forms/Button';
import Container from '../layout/Container';
import Panel from './Panel.jsx';
import style from './summaryPanels.css';
import BaseSVG from '../images/BaseSVG';
import awsGridSVG from '../images/aws_grid.svg';
import deviceGroupSVG from '../images/device_group.svg';
import {Grid, Row, Col, Padding} from '../layout';

export default React.createClass({
  render() {
    return (
      <div className={style.summaryPanels}>
        <Panel>
          <Container>
            <Grid>
              <div className={style.panel}>
                <Row className="flex-vertical-align-sm">
                  <Col xs={12} sm={6} className="align-self-start flex-order-2-sm">
                    <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Your team loves AWS. <span className="text-accent">So do we.</span></h2>
                      </div>
                      <p className="prose">
                        We auto scale with your AWS infrastructure & services, and
                        there are no agents to install or shell scripts to cURL.
                        Just give us a set of AWS keys and we&rsquo;ll take care of the
                        rest. Wave goodbye to false alarms and blind spots.
                      </p>

                      <Button className={style.button} secondary chevron>
                        Learn more about AWS
                      </Button>
                    </Padding>
                  </Col>

                  <Col xs={12} sm={6} className="align-self-start flex-order-1-sm">
                    <Padding a={2}>
                      <BaseSVG svg={awsGridSVG} style={{maxWidth: '100%'}} />
                    </Padding>
                  </Col>
                </Row>
              </div>

              <div className={style.panel}>
                <Row className="flex-vertical-align-sm">

                  <Col xs={12} sm={6} className="align-self-start flex-order-1-sm">
                    <Padding a={2}>
                      <BaseSVG svg={deviceGroupSVG} style={{maxWidth: '100%'}} />
                    </Padding>
                  </Col>
                  <Col xs={12} sm={6} className="align-self-start flex-order-2-sm">
                    <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Finally, monitoring <span className="text-accent">designed</span> for the developer on call.</h2>
                      </div>
                      <p className="prose">
                        You moved to the cloud and broke up the monolith, and
                        you’re even trying out devs in your on-call rotation.
                        Opsee has your back, with tools to resolve incidents from
                        anywhere. Time to go on call?  It&apos;s time to get Opsee.
                      </p>

                      <Button className={style.button} secondary chevron>
                        Get Opsee
                      </Button>
                    </Padding>
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