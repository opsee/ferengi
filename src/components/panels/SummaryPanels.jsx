import React from 'react';
import Button from '../forms/Button';
import Container from '../layout/Container';
import Panel from './Panel.jsx';
import {Grid, Row, Col, Padding} from '../layout';
import SkewPanel from '../panels/SkewPanel';

import style from './summaryPanels.css';

import BaseSVG from '../images/BaseSVG';
import awsGridSVG from '../images/aws_grid.svg';
import deviceGroupSVG from '../images/device_group.svg';
import installStepsSVG from '../images/install-steps2.svg';
import integrationLogosSVG from '../images/integration-logos.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <SkewPanel backgroundColor='white'>
          <Container>
            <Grid>
              <div className={style.panel}>
                <Row className="flex-vertical-align-sm">
                  <Col xs={12} sm={6} className="align-self-start flex-order-2-sm">
                    <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Complete coverage, <span className="text-accent">right now</span></h2>
                      </div>
                      <p className="prose">
                        No software to install, no shell scripts to cURL
                      </p>

                      <Padding tb={2}>
                        <Button className={style.button} secondary chevron>
                          Learn more about how Opsee works
                        </Button>
                      </Padding>
                    </Padding>
                  </Col>

                  <Col xs={12} sm={6} className="align-self-start flex-order-1-sm">
                    <Padding a={2}>
                      <BaseSVG svg={installStepsSVG} style={{maxWidth: '100%'}} />
                    </Padding>
                  </Col>
                </Row>
              </div>
            </Grid>
          </Container>
        </SkewPanel>

        <SkewPanel backgroundColor='white'>
          <Container>
            <Grid>
              <div className={style.panel}>
                 <Row className="flex-vertical-align-sm">

                  <Col xs={12} sm={6} className="align-self-start flex-order-1-sm">
                    <Padding a={2}>
                      <BaseSVG svg={installStepsSVG} style={{maxWidth: '100%'}} />
                    </Padding>
                  </Col>
                  <Col xs={12} sm={6} className="align-self-start flex-order-2-sm">
                    <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Be sure your services respond <span className="text-accent">the way you expect them to</span></h2>
                      </div>
                      <p className="prose">
                        Verify every part of the response – health is more than
                        just a status code.
                      </p>

                      <Padding tb={2}>
                        <Button className={style.button} secondary chevron>
                          Learn more about assertions
                        </Button>
                      </Padding>
                    </Padding>
                  </Col>
                </Row>
              </div>
            </Grid>
          </Container>
        </SkewPanel>


        <SkewPanel backgroundColor='white'>
          <Container>
            <Grid>
              <div className={style.panel}>
                <Row className="flex-vertical-align-sm">
                  <Col xs={12} sm={6} className="align-self-start flex-order-2-sm">
                    <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Built for your <span className="text-accent">AWS ecosystem</span></h2>
                      </div>
                      <p className="prose">
                        Designed to work with your favorite tools.
                      </p>

                      <Padding tb={2}>
                        <Button className={style.button} secondary chevron>
                          Learn more about AWS integration
                        </Button>
                      </Padding>
                    </Padding>
                  </Col>

                  <Col xs={12} sm={6} className="align-self-start flex-order-1-sm">
                    <Padding a={2}>
                      <BaseSVG svg={integrationLogosSVG} style={{maxWidth: '100%'}} />
                    </Padding>
                  </Col>
                </Row>
              </div>
            </Grid>
          </Container>
        </SkewPanel>
      </div>
    );
  }
});