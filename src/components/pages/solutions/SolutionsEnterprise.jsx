import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './solutions.css';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewDivider from '../../layout/SkewDivider';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Quote from '../../global/Quote';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';
import notificationsSVG from '../../images/product-notifications.svg';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import notificationLogosSVG from '../../images/notification-logos.svg';
import howBastion from '../../images/how-bastion.svg';
import checkEntities from '../../images/check-type-entities.svg';
import checkCloudwatch from '../../images/check-type-cloudwatch.svg';
import checkURL from '../../images/check-type-url.svg';

const SolutionsEnterprise = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>DevOps for <span className="text-accent-static">Dev Teams</span></h1>
            <h3>Opsee is made for enterprise teams who need to monitor their services effortlessly</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={10} xsOffset={1} className="text-center">
                <h3>Your team feels like <span className="text-accent">a startup</span></h3>
                <p>Running in AWS makes your team more independent, and you can move faster</p>

                <h3>But IT Ops is only equipped to deal with <span className="text-accent">legacy infrastructure</span></h3>
                <p>You&rsquo;re on your own for ensuring the reliability of your software in production, and legacy monitoring tools don&rsquo;t cut it in the cloud.</p>
                <h3>Opsee is here to help</h3>
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Health checks</span> have you covered</h2>
              </Padding>
              <p>Continuously test your your services to be sure they’re working as expected</p>
              <ul>
                <li><span className="prose">Failing health checks tell you exactly what’s wrong</span></li>
                <li><span className="prose">Find problems without watching dashboards</span></li>
                <li><span className="prose">Respond to incidents from any device</span></li>
                <li><span className="prose">Checks are automatically created for common services and infrastructure</span></li>
              </ul>
            </SplitPanel>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={cleanSimpleSVG} className={style.screenshotSVG} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <Padding b={1}>
            <h2 className="text-center">Our health checks</h2>
          </Padding>

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

          <SkewDivider />

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
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={awsIntegrationsSVG} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={notificationsSVG} className={style.screenshotSVG} />
            </SplitPanel>
            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2>Rich, actionable <span className="text-accent">notifications</span></h2>
              </Padding>
              <ul>
                <li><span className="prose">See failing responses with rich context</span></li>
                <li><span className="prose">Get notified anywhere: email, Slack, webhooks, or PagerDuty</span></li>
                <li><span className="prose">Take action on problem instances (restart, stop, or terminate)</span></li>
              </ul>
              <Padding t={3}>
                <BaseSVG svg={notificationLogosSVG} className={style.screenshotSVG} />
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding b={1}>
                <h2>Just add <span className="text-accent">our instance</span></h2>
              </Padding>
              <ul>
                <li><span className="prose">Our instance is a t2.micro and <a target="_blank" href="https://aws.amazon.com/ec2/pricing/">free-tier eligible</a></span></li>
                <li><span className="prose">It uses AWS APIs to discover your environment, detecting changes to infrastructure automatically</span></li>
                <li><span className="prose">No agents to run on your systems</span></li>
              </ul>
            </SplitPanel>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={howBastion} className={style.svg} />
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

        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default SolutionsEnterprise;