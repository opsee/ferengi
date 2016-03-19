import React from 'react';
import {Grid, Row, Col} from '../layout';

import Container from '../layout/Container';
import BaseSVG from '../images/BaseSVG';
import howBastion from '../images/how-bastion.svg';
import howChecks from '../images/how-checks.svg';
import howDiscovery from '../images/how-discovery.svg';
import StaticHeader from '../panels/StaticHeader';
import style from './how.css';
import SkewDivider from '../layout/SkewDivider';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Take a look under the hood</h1>
            <h3>Authenticate with your AWS credentials and Opsee will do the rest.</h3>
          </div>
        </StaticHeader>

        <Container>
          <Grid>
            <div className={style.panel}>
              <Row>
                <Col xs={12} sm={6}>
                  <div className={style.heading}>
                    <h2 className="text-accent">Step 1</h2>
                    <h2>Add Opsee to your AWS environment</h2>
                  </div>
                  <p className="prose">The first thing we do is add the Bastion Instance to your AWS environment. It&rsquo;s resonsible for all health checking, incident response, and discovery of your infrastructure.</p>
                  <p className="prose">The Bastion Instance is an Amazon AMI defined by a CloudFormation Template. Learn more about the Bastion Instance in our docs.</p>
                </Col>
                <Col xs={12} sm={6}>
                  <BaseSVG svg={howBastion} style={{maxWidth: '100%', maxHeight: 350}} />
                </Col>
              </Row>
            </div>

            <SkewDivider />

            <div className={style.panel}>
              <Row>
                <Col xs={12} sm={6}>
                  <BaseSVG svg={howDiscovery} style={{maxWidth: '100%', maxHeight: 350}} />
                </Col>
                <Col xs={12} sm={6}>
                 <div className={style.heading}>
                    <h2 className="text-accent">Step 2</h2>
                    <h2>Opsee Discovers Your Infrastructure</h2>
                  </div>
                  <p className="prose">The Bastion Instance uses AWS APIs to discover your instances and groups. It&rsquo;s always scanning, and detects changes to infrastructure automatically.</p>
                </Col>
              </Row>
            </div>

            <SkewDivider />

            <div className={style.panel}>
              <Row>
                <Col xs={12} sm={6}>
                  <div className={style.heading}>
                  <h2 className="text-accent">Step 3</h2>
                    <h2>Create Health Checks, but Don&rsquo;t Maintain Them</h2>
                  </div>
                  <p className="prose">In Opsee you can create health checks for AWS Security Groups, ELBs, and soon other entities like EC2 Tags, Regions, or Availability Zones. Opsee applies these checks to the right instances for you, and knows when new instances come online.</p>
                </Col>
                <Col xs={12} sm={6}>
                  <BaseSVG svg={howChecks} style={{maxWidth: '100%', maxHeight: 350}} />
                </Col>
              </Row>
            </div>
          </Grid>
        </Container>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
