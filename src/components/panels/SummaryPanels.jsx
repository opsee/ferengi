import React from 'react';
import Button from '../forms/Button';
import { Padding } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import style from './summaryPanels.css';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';
import BaseSVG from '../images/BaseSVG';
import passingAssertionsSVG from '../images/passing-assertions.svg';
import integrationsSVG from '../images/integrations.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.imagePanel}>
            <BaseSVG className={style.assertionsSVG} svg={passingAssertionsSVG} />
          </SplitPanel>

          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Be sure your services respond the way you <span className="text-accent">coded</span> them</h2>
            </div>

            <h3>Verify every part of the response – health is more than just a status code.</h3>

            <Padding tb={2}>
              <Button to="/features#checkTypes" target="_blank" className={style.button} secondary chevron>
                  Learn more about health checks
              </Button>
            </Padding>
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Built for <span className="text-accent">your stack</span></h2>
            </div>

            <h3>Designed to work with your favorite tools.</h3>

            <Padding tb={2}>
              <Button to="/how" className={style.button} secondary chevron>
                How Opsee works
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={integrationsSVG} />
          </SplitPanel>
        </SplitContainer>
      </div>
    );
  }
});