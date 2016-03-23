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
            <h1>Monitoring for On-call Dev Teams</h1>
          </Padding>
        </div>

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
      </div>
    );
  }
});