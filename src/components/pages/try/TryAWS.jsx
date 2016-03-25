import React from 'react';
import style from './try.css';
import { Padding } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';
import TryCampaign from './TryCampaign';

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
      </TryCampaign>
    );
  }
});