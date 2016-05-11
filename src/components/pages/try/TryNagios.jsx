import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import Button from '../../forms/Button';
import BaseSVG from '../../images/BaseSVG';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import checkEntities from '../../images/check-type-entities.svg';
import checkCloudwatch from '../../images/check-type-cloudwatch.svg';
import checkURL from '../../images/check-type-url.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="A Simpler Alternative to Nagios" splashClass={style.splashNagios}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.screenshotProsePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Health Checks</span> for your AWS infrastructure and services</h2>
              <h3>Zero maintenance.</h3>
            </Padding>

            <p>Create health checks for your AWS infrastructure & services with no agents to install or shell scripts to cURL. Opsee is seamlessly integrated into your environment and built to auto scale with you.</p>

            <Padding t={1}>
              <Button to="/features" className={style.button} secondary chevron>
                Learn more
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.svg} />
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