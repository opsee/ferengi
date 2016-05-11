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
import checkDiagramSVG from '../images/product-checks.svg';
import notificationsSVG from '../images/product-notifications.svg';
import awsIntegrationsSVG from '../images/integrations-aws.svg';
// import passingAssertionsSVG from '../images/passing-assertions.svg';
import notificationLogosSVG from '../images/notification-logos.svg';
import securitySVG from '../images/security.svg';
import cleanSimpleSVG from '../images/clean-simple.svg';
import checkEntities from '../images/check-type-entities.svg';
import checkCloudwatch from '../images/check-type-cloudwatch.svg';
import checkURL from '../images/check-type-url.svg';

const Features = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Great monitoring doesn&rsquo;t need to be <span className="text-accent-static">complicated</span></h1>
            <h3>Opsee is designed for busy teams who want to get back to doing what they love.</h3>
          </div>
        </StaticHeader>

        <div>
          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding tb={1}>
                <h2>Deep integration with <span className="text-accent">AWS</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">Just add our instance to your AWS environment</span></li>
                <li><span className="prose">We automatically and continuously discover your environment</span></li>
                <li><span className="prose">No configurations to manage</span></li>
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
                <Quote quote="coffee" />
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <Padding b={1}>
            <h2 className="text-center">Our health checks</h2>
            <Padding tb={2} className="text-center">
              <Button to="https://app.opsee.com/docs/checks" target="_blank" className={style.button} secondary chevron>
                Check documentation
              </Button>
            </Padding>
          </Padding>

          <div id="checkTypes">
            <SplitContainer className={style.section}>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">AWS Resources</h3></Padding>
                <BaseSVG svg={checkEntities} className={style.screenshotSVG} />
                <p>Our checks auto scale with your environment, tracking your Security Groups, Auto Scale Groups, and ELBs automatically. Easily verify the headers, JSON keys, and round-trip times of your check responses with no maintenance.</p>
              </SplitPanel>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">CloudWatch Metrics</h3></Padding>
                <BaseSVG svg={checkCloudwatch} className={style.screenshotSVG} />
                <p>Set thresholds on all of your important CloudWatch metrics. We even create automatic checks for you when you sign up.</p>
              </SplitPanel>
              <SplitPanel className={style.imagePanelThirds}>
                <Padding b={2}><h3 className="text-center">URLs</h3></Padding>
                <BaseSVG svg={checkURL} className={style.screenshotSVG} />
                <p>If you have external dependencies, websites, and CDNs that need coverage, Opsee will track all DNS entries for a URL automatically.</p>
              </SplitPanel>
            </SplitContainer>
          </div>

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
                <li><span className="prose">Take action on problem instances (restart, stop, or terminate)</span></li>
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
              <Padding a={4}>
                <BaseSVG svg={checkDiagramSVG} />
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Zero</span> maintenance</h2>
              </Padding>

              <ul>
                <li><span className="prose">Easy install with just AWS keys</span></li>
                <li><span className="prose">Your health checks dynamically adjust to your environment</span></li>
                <li><span className="prose">Clean uninstall via Cloudformation</span></li>
              </ul>

              <Padding tb={2}>
                <Button to="https://app.opsee.com/docs/bastion" target="_blank" className={style.button} secondary chevron>
                  Learn more about our AWS instance
                </Button>
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <Panel>
            <Row>
              <Col xs={10} xsOffset={1}>
                <Quote quote="alarms" />
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

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Security</span>-minded</h2>
              </Padding>

              <ul>
                <li><span className="prose">Our CloudFormation templates and IAM roles give you total transparency</span></li>
                <li><span className="prose">No third party software on your systems</span></li>
                <li><span className="prose">Secure communication between Opsee & our instance</span></li>
              </ul>

              <Padding tb={2}>
                <Button to="https://app.opsee.com/docs/permissions" target="_blank" className={style.button} secondary chevron>
                  Learn more about our IAM roles
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <Padding a={4}>
                <BaseSVG svg={securitySVG} className={style.svg} />
              </Padding>
            </SplitPanel>
          </SplitContainer>
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default Features;