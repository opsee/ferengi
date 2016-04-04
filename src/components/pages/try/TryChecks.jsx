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
      <TryCampaign title="Health Checks Cut Through the Noise" splashClass={style.splashDev}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Continuously</span> Test Your Services and Deploy with Confidence</h2>
              <h3>Be sure your services respond the way you coded them.</h3>
            </Padding>

            <p>Verify every part of the response – health is more than just a status code. Assertions on headers, response bodies, and JSON keys assure your services work the way you coded them.</p>
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