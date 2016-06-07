import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import style from './features.css';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';

import { Padding, Row, Col } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import Button from '../forms/Button';
import Quote from '../global/Quote';
import Panel from '../panels/Panel';

import BaseSVG from '../images/BaseSVG';
// import checkDiagramSVG from '../images/product-checks.svg';
import notificationsSVG from '../images/product-notifications.svg';
import awsIntegrationsSVG from '../images/integrations-aws.svg';
// import passingAssertionsSVG from '../images/passing-assertions.svg';
import notificationLogosSVG from '../images/notification-logos.svg';
// import securitySVG from '../images/security.svg';
import cleanSimpleSVG from '../images/clean-simple.svg';
import checkEntities from '../images/check-type-entities.svg';
import checkCloudwatch from '../images/check-type-cloudwatch.svg';
import checkURL from '../images/check-type-url.svg';
import locMap from '../images/location-map.svg';
import passingAssertionsSVG from '../images/passing-assertions.svg';

const Features = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Uptime and performance monitoring <span className="text-accent-static">made easy</span></h1>
            <h3>Be sure your sites & services are responding the way you expect</h3>
          </div>
        </StaticHeader>

        <div>

          <Padding t={3} b={1}>
            <h2 className="text-center">Our health checks</h2>
          </Padding>

          <div id="checkTypes">
            <SplitContainer className={style.section}>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">Public & Private URLs</h3></Padding>
                <BaseSVG svg={checkURL} className={style.screenshotSVG} />
                <p>Check any public URL or IP. Opsee monitors all DNS entries for a URL automatically. Check private URLs in AWS by adding our instance.</p>
              </SplitPanel>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">AWS Services</h3></Padding>
                <BaseSVG svg={checkEntities} className={style.screenshotSVG} />
                <p>When your groups and services change your checks update automatically, with no configurations to manage.</p>
              </SplitPanel>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">CloudWatch Metrics</h3></Padding>
                <BaseSVG svg={checkCloudwatch} className={style.screenshotSVG} />
                <p>Set thresholds on all of your important CloudWatch metrics. We even create some automatic checks for you.</p>
              </SplitPanel>
            </SplitContainer>
          </div>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel} >
              <div className={style.heading}>
                <h2><span className="text-accent">Global</span> availability and performance checks</h2>
              </div>

              <h3>Global coverage of your public sites and APIs. Every check runs from all 6 of our locations around the world, every 30 seconds</h3>

              <Padding tb={2}>
                <Button to="/how" className={style.button} secondary chevron>
                  How Opsee works
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={locMap} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={passingAssertionsSVG} />
            </SplitPanel>

            <SplitPanel className={style.prosePanel} >
              <div className={style.heading}>
                <h2>Be sure your sites & services respond <span className="text-accent">the way you expect</span></h2>
              </div>

              <h3>Verify response headers, bodies, and round-trip times – health is more than a status code.</h3>

            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <Panel>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Quote quote="autochecks" />
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding tb={1}>
                <h2>Deep integration with <span className="text-accent">AWS</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">Just add our instance to your AWS environment</span></li>
                <li><span className="prose">We automatically discover your AWS services and infrastructure</span></li>
                <li><span className="prose">We create automatic health checks for common services, and help you create checks for everything else</span></li>
                <li><span className="prose">No agents to run or configurations to manage</span></li>
              </ul>

              <Padding tb={2}>
                <Button to="/how" className={style.button} secondary chevron>
                  How it works
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={awsIntegrationsSVG} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <Panel>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Quote quote="autodeskTeam" />
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.screenshotPanel}>
              <BaseSVG svg={notificationsSVG} className={style.svg} />
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2>Rich, actionable <span className="text-accent">notifications</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">See failing responses in context</span></li>
                <li><span className="prose">Get notified anywhere: email, Slack, webhooks, or PagerDuty</span></li>
              </ul>

              <Padding tb={2}>
                <BaseSVG svg={notificationLogosSVG} className={style.screenshotSVG} />
              </Padding>

              <Padding tb={2}>
                <Button to="https://app.opsee.com/docs/notifications" target="_blank" className={style.button} secondary chevron>
                  Learn more about notifications
                </Button>
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <Panel className={style.offsetPanel}>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Quote quote="pingdom" />
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={cleanSimpleSVG} className={style.screenshotSVG} />
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2>Clean & <span className="text-accent">simple</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">Failing health checks tell you exactly what’s wrong</span></li>
                <li><span className="prose">Find problems without staring at graphs</span></li>
                <li><span className="prose">Responsive UI works on any device</span></li>
              </ul>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <Panel className={style.offsetPanel}>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Quote quote="alarms" />
              </Col>
            </Row>
          </Panel>

        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default Features;