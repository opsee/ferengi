import React from 'react';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';
import StaticHeader from '../panels/StaticHeader';
import style from './how.css';
import Panel from '../panels/Panel';
import { Padding, Row, Col } from '../layout';
import { Heading } from '../type';
import SkewDivider from '../layout/SkewDivider';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';

import BaseSVG from '../images/BaseSVG';
import howMap from '../images/how-map.svg';
import awsSVG from '../images/logos/aws-01.svg';
import howBastion from '../images/how-bastion.svg';
import howChecks from '../images/how-checks.svg';
import howDiscovery from '../images/how-discovery.svg';
// import ec2SVG from '../images/logos/ec2-01.svg';
// import ecsSVG from '../images/logos/ecs-01.svg';
// import rdsSVG from '../images/logos/rds-01.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Take a look <span className="text-accent-static">under the hood</span></h1>
            <h3>Authenticate with your AWS credentials and Opsee will do the rest.</h3>
          </div>
        </StaticHeader>

        <div>
          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel} >
              <div className={style.heading}>
                <div className={style.stepNumber}>Global Checks</div>
                <h2 className={style.step}>Every check, 6 locations worldwide, every 30 seconds</h2>
              </div>
              <p className="prose">All you need is a URL to get started with our global checks. Tell us what URL or IP to watch, and we&rsquo;ll test it from all 6 locations around the world.</p>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={howMap} className={style.svg} />
            </SplitPanel>
          </SplitContainer>
        </div>

        <SkewDivider />

        <Panel>
          <Row>
            <Col sm={4} md={3}>
              <div className={style.logo}>
                <BaseSVG svg={awsSVG} />
              </div>
            </Col>
            <Col sm={8} md={9}>
              <div className="text-center-xs">
                <div className={style.stepNumber}>AWS Checks</div>
                <Heading level={2}>Complete coverage, <span className="text-accent">no agents</span></Heading>
              </div>
            </Col>
          </Row>

          <Padding t={4}>
            <Row>
              <Col smOffset={1} sm={7} className={style.prosePanel}>
                <div className={style.stepNumber}>Step 1</div>
                <h3>Add our EC2 Instance to your AWS environment</h3>
                <p className="no-space">First, add our Instance to your environment. It&rsquo;s responsible for health checking, discovery of your infrastructure, and incident response. Our instance is an Amazon AMI defined by a CloudFormation Template. It&rsquo;s a <a target="_blank" href="https://aws.amazon.com/ec2/pricing/">t2.micro and free-tier eligible</a>. Learn more about our EC2 Instance <a href="https://app.opsee.com/docs/checks" target="_blank">in our documentation</a>.</p>
              </Col>
              <Col sm={4} className={style.imagePanel}>
                <BaseSVG svg={howBastion} />
              </Col>
            </Row>
          </Padding>

          <Padding t={4}>
            <Row>
              <Col smOffset={1} sm={7} className={style.prosePanel}>
                <div className={style.stepNumber}>Step 2</div>
                <h3>Opsee Discovers Your Infrastructure</h3>
                <p className="no-space">Our EC2 instance uses <a href="https://app.opsee.com/docs/permissions" target="_blank">AWS APIs</a> to discover your instances and groups. It&rsquo;s always scanning, and detects changes to infrastructure automatically.</p>
              </Col>
              <Col sm={4} className={style.imagePanel}>
                <BaseSVG svg={howDiscovery} />
              </Col>
            </Row>
          </Padding>

          <Padding t={4}>
            <Row>
              <Col smOffset={1} sm={7} className={style.prosePanel}>
                <div className={style.stepNumber}>Step 3</div>
                <h3>Create Health Checks, but Don&rsquo;t Maintain Them</h3>
                <p className="no-space">Create health checks for Security Groups, Auto Scale Groups, ELBs, EC2 Instances, RDS Database Instances, ECS Services and more to come. Opsee tracks changes and targets these checks at the right instances for you.</p>
              </Col>
              <Col sm={4} className={style.imagePanel}>
                <BaseSVG svg={howChecks} />
              </Col>
            </Row>
          </Padding>
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
