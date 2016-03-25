import React from 'react';
import style from './try.css';
import { Padding } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import TryCampaign from './TryCampaign';

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
      </TryCampaign>
    );
  }
});