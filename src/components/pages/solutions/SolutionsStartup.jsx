import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './solutions.css';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewDivider from '../../layout/SkewDivider';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
// import Button from '../../forms/Button';
// import Quote from '../../global/Quote';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
// import checkDiagramSVG from '../../images/product-checks.svg';
import notificationsSVG from '../../images/product-notifications.svg';
// import awsIntegrationsSVG from '../../images/integrations-aws.svg';
// import passingAssertionsSVG from '../../images/passing-assertions.svg';
// import securitySVG from '../../images/security.svg';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import notificationLogosSVG from '../../images/notification-logos.svg';
import howBastion from '../../images/how-bastion.svg';
import checkEntities from '../../images/check-type-entities.svg';
import checkCloudwatch from '../../images/check-type-cloudwatch.svg';
import checkURL from '../../images/check-type-url.svg';

const SolutionsStartup = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}><span className="text-accent-static">Bootstrap</span> your devops team</h1>
            <h3>Opsee is made for startups who want to get back to doing what they love: shipping product</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={10} xsOffset={1}>
                <p><strong>The good news:</strong> AWS lets startup engineering teams ship code faster than ever before.</p>
                <p><strong>The bad news:</strong> You need to hire DevOps to manage the complexity of legacy monitoring tools.</p>
                <p><strong>Opsee is here to help.</strong></p>
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
              <p>Our checks auto scale with your environment, tracking membership in Security Groups, Auto Scale Groups, and ELBs automatically. Verify the headers, JSON keys, and round-trip times of your check responses.</p>
            </SplitPanel>
            <SplitPanel className={style.imagePanelThirds}>
              <Padding b={2}><h3 className="text-center">CloudWatch Metrics</h3></Padding>
              <BaseSVG svg={checkCloudwatch} className={style.screenshotSVG} />
              <p>Set thresholds on all of your important CloudWatch metrics.</p>
            </SplitPanel>
            <SplitPanel className={style.imagePanelThirds}>
              <Padding b={2}><h3 className="text-center">URLs</h3></Padding>
              <BaseSVG svg={checkURL} className={style.screenshotSVG} />
              <p>If you have external dependencies, websites, and CDNs that need coverage, Opsee will track all DNS entries for a URL automatically and notify you of failures.</p>
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
                <li><span className="prose">See failing responses in context</span></li>
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

        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default SolutionsStartup;