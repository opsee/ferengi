import React from 'react';
import Button from '../forms/Button';
import { Padding } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import style from './summaryPanels.css';

import BaseSVG from '../images/BaseSVG';
import integrationLogosSVG from '../images/integration-logos.svg';
import onboardingSVG from '../images/onboarding.svg';
import passingAssertionsSVG from '../images/passing-assertions.svg';

import { SplitContainer, SplitPanel } from '../panels/SplitPanels';

export default React.createClass({
  render() {
    return (
      <div>
        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Complete AWS coverage, <span className="text-accent block-sm">right now</span></h2>
            </div>

            <h3>No software to install, no shell scripts to cURL</h3>

            <Padding tb={2}>
              <Button className={style.button} secondary chevron>
                Learn more about how Opsee works
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <Padding l={4}>
              <BaseSVG svg={onboardingSVG} />
            </Padding>
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.imagePanel}>
            <Padding a={4}>
              <BaseSVG className={style.assertionsSVG} svg={passingAssertionsSVG} />
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Be sure your services respond the way you <span className="text-accent">coded</span> them</h2>
            </div>

            <h3>Verify every part of the response – health is more than just a status code.</h3>

            <Padding tb={2}>
              <Button className={style.button} secondary chevron>
                Learn more about assertions
              </Button>
            </Padding>
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Built for your <span className="text-accent">your stack</span></h2>
            </div>

            <h3>Designed to work with your favorite tools.</h3>

            <Padding tb={2}>
              <Button className={style.button} secondary chevron>
                Learn more about AWS integration
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={integrationLogosSVG} />
          </SplitPanel>
        </SplitContainer>
      </div>
    );
  }
});