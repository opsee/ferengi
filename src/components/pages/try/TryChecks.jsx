import React from 'react';
import style from './try.css';
import { Padding } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import cleanSimpleSVG from '../../images/clean-simple.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <div className={style.splash} style={{backgroundImage: 'url(https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg)'}}>
          <Padding tb={2} lr={4}>
            <h1>Health Checks: Your First Line of Defense</h1>
          </Padding>
        </div>

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2><span className="text-accent">Monitor</span> your AWS infrastructure &amp; services</h2>
              <h3>Health checks that auto-scale with you.</h3>
            </Padding>

            <p>Opsee discovers your AWS infrastructure and services, instantly reacts to changes in your environment, and creates health checks for you. You know your services are working as you expect, whether you have one instance our thousands.</p>
          </SplitPanel>

          <SplitPanel className={style.screenshotPanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>
      </div>
    );
  }
});