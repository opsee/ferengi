import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';
import strathcomLogo from '../../images/logos/strathcom.png';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="Monitoring for the On-call Developer" splashClass={style.splashDev}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Effortless</span> Health Checks for Your Services</h2>
              <h3>So you can get back to coding.</h3>
            </Padding>

            <p>Opsee discovers your AWS infrastructure and services, instantly reacts to changes in your environment, and creates health checks for you so you can get back to writing code.</p>
          </SplitPanel>

          <SplitPanel className={style.screenshotPanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider className={style.offsetDivider} />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote author="Brian Livingston" position="SysAdmin" company="Strathcom Media" url="http://www.strathcom.ca/" logo={strathcomLogo}>
                <p>"I love that Opsee's on-boarding process consists mostly of waiting for my coffee to brew. I got almost 60 health checks created for me, and almost 50% of my EC2 instances covered, with zero effort."</p>
              </Quote>
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});