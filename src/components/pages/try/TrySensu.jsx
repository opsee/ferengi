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
import azaveaLogo from '../../images/logos/azavea-logo.png';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="A Simpler Alternative to Sensu" splashClass={style.splashNagios}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Health Checks</span> for your AWS infrastructure and services</h2>
              <h3>Zero maintenance.</h3>
            </Padding>

            <p>Create health checks for your AWS infrastructure & services with no agents to install or shell scripts to cURL. Opsee is seamlessly integrated into your environment and built to auto scale with you.</p>
          </SplitPanel>

          <SplitPanel className={style.screenshotPanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider className={style.offsetDivider} />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote author="Hector Castro" position="Operations Engineer" company="Azavea" url="http://www.azavea.com/" logo={azaveaLogo}>
                <p>"Integrating Opsee into our existing AWS environment was elegant and seamless. Within a handful of minutes, we had fully functional instance and load balancer level assertions against our existing service health checks."</p>
              </Quote>
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});