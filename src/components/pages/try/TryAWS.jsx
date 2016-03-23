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
        <div className={style.splash} style={{backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-aws.jpg)'}}>
          <Padding tb={2} lr={4}>
            <h1>Get Monitoring Built for AWS</h1>
          </Padding>
        </div>

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <h2>Integrate and auto-scale <span className="text-accent">seamlessly</span></h2>
            <p>Opsee is built to work with your infrastructure and services. There are no agents to install or shell scripts to cURL.</p>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={awsIntegrationsSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>
      </div>
    );
  }
});