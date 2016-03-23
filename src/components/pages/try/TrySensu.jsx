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
        <div className={style.splashNagios}>
          <Padding tb={2} lr={4}>
            <h1>A Simpler Alternative to Sensu</h1>
          </Padding>
        </div>

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
      </div>
    );
  }
});