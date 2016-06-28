import React from 'react';
import Button from '../forms/Button';
import { Padding } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import style from './summaryPanels.css';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';
import BaseSVG from '../images/BaseSVG';
import locMap from '../images/location-map.svg';
import passingAssertionsSVG from '../images/passing-assertions.svg';
import integrationsSVG from '../images/integrations.svg';

export default React.createClass({
  render() {
    return (
      <div>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Coverage <span className="text-accent">everywhere</span></h2>
            </div>

            <h3>Global coverage of your sites and APIs. Every check runs from all 6 of our locations around the world, every 30 seconds</h3>

            <Padding tb={2}>
              <Button to="/how" className={style.button} secondary chevron>
                How Opsee works
              </Button>
            </Padding>
          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={locMap} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.imagePanel}>
            <BaseSVG className={style.assertionsSVG} svg={passingAssertionsSVG} />
          </SplitPanel>

          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Be sure your sites & services respond <span className="text-accent">the way you expect</span></h2>
            </div>

            <h3>Verify response headers, bodies, and round-trip times – health is more than a status code.</h3>

            <Padding tb={2}>
              <Button to="/features#checkTypes" className={style.button} secondary chevron>
                  Opsee features
              </Button>
            </Padding>
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <div className={style.heading}>
              <h2>Keep <span className="text-accent">your whole team</span> in the loop</h2>
            </div>

            <h3>Send notifications to Slack, Pagerduty, email, and webhooks. Our one-click integrations make conencting effortless</h3>

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