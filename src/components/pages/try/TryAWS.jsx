import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import Button from '../../forms/Button';
import BaseSVG from '../../images/BaseSVG';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import checkEntities from '../../images/check-type-entities.svg';
import checkCloudwatch from '../../images/check-type-cloudwatch.svg';
import checkURL from '../../images/check-type-url.svg';
import howBastion from '../../images/how-bastion.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="Monitoring Built for AWS" splashClass={style.splashAWS}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2>Complete AWS Coverage, <span className="text-accent">Right Now</span></h2>
              <h3>No agents to install or shell scripts to cURL.</h3>
            </Padding>

            <p>Seamlessly integrated into your environment and built to auto scale with you – you create health checks for your services and Opsee tracks changes for you.</p>

            <Padding t={1}>
              <Button to="/features" className={style.button} secondary chevron>
                Learn more
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={awsIntegrationsSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

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
            <Padding b={1}>
              <h2>Just add <span className="text-accent">our instance</span></h2>
            </Padding>
            <ul>
              <li><span className="prose">Our instance is a t2.micro and <a target="_blank" href="https://aws.amazon.com/ec2/pricing/">free-tier eligible</a></span></li>
              <li><span className="prose">It uses AWS APIs to discover your environment, detecting changes to infrastructure automatically</span></li>
              <li><span className="prose">No agents to run on your systems</span></li>
            </ul>

            <Padding t={2}>
              <Button to="/how" className={style.button} secondary chevron>
                How it works
              </Button>
            </Padding>
          </SplitPanel>
          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={howBastion} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote quote="assertions" />
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});