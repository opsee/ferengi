import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';
import azaveaLogo from '../../images/logos/azavea-logo.png';

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
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={awsIntegrationsSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

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