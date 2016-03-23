import React from 'react';
import style from './try.css';
import { Padding } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <div className={style.splashAWS}>
          <Padding tb={2} lr={4}>
            <h1>Monitoring for Microservices</h1>
          </Padding>
        </div>

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Health checks</span> cut through the noise</h2>
              <h3>Opsee is made for microservice architectures.</h3>
            </Padding>

            <p> Health checks tell you if your services are working as expected, and rich notifications along with deep AWS integration help you find and fix problems effortlessly.</p>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={awsIntegrationsSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>
      </div>
    );
  }
});