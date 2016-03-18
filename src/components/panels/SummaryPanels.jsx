import React from 'react';
import Button from '../forms/Button';
import { Padding } from '../layout';
import SkewPanel from '../panels/SkewPanel';
import SplitPanel from '../panels/SplitPanel';
import SplitColumn from '../panels/SplitColumn';
import style from './summaryPanels.css';

import BaseSVG from '../images/BaseSVG';
import installStepsSVG from '../images/install-steps2.svg';
import integrationLogosSVG from '../images/integration-logos.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <SkewPanel backgroundColor="white">
          <SplitPanel>
            <SplitColumn order={1}>
              <Padding a={2}>
                <div className={style.heading}>
                  <h2>Complete AWS coverage, <span className="text-accent">right now</span></h2>
                </div>
                <p className="prose">
                  No software to install, no shell scripts to cURL
                </p>

                <Padding tb={2}>
                  <Button className={style.button} secondary chevron>
                    Learn more about how Opsee works
                  </Button>
                </Padding>
              </Padding>
            </SplitColumn>

            <SplitColumn order={2}>
              <Padding a={2}>
                <BaseSVG svg={installStepsSVG} style={{maxWidth: '100%'}} />
              </Padding>
            </SplitColumn>
          </SplitPanel>
        </SkewPanel>

        <SkewPanel backgroundColor="white">
          <SplitPanel>
            <SplitColumn order={1}>                    <Padding a={2}>
                      <BaseSVG svg={installStepsSVG} style={{maxWidth: '100%'}} />
                    </Padding>
            </SplitColumn>

            <SplitColumn order={1}>
             <Padding a={2}>
                      <div className={style.heading}>
                        <h2>Be sure your services respond <span className="text-accent">the way you coded them</span></h2>
                      </div>
                      <p className="prose">
                        Verify every part of the response – health is more than
                        just a status code.
                      </p>

                      <Padding tb={2}>
                        <Button className={style.button} secondary chevron>
                          Learn more about assertions
                        </Button>
                      </Padding>
                    </Padding>
            </SplitColumn>
          </SplitPanel>
        </SkewPanel>

        <SkewPanel backgroundColor="white">
          <SplitPanel>
            <SplitColumn order={1}>
              <Padding a={2}>
                <div className={style.heading}>
                  <h2>Part of <span className="text-accent">Your Stack</span></h2>
                </div>
                <p className="prose">
                  Designed to work with your favorite tools.
                </p>

                <Padding tb={2}>
                  <Button className={style.button} secondary chevron>
                    Learn more about AWS integration
                  </Button>
                </Padding>
              </Padding>
            </SplitColumn>

            <SplitColumn order={2}>
              <Padding a={2}>
                <BaseSVG svg={integrationLogosSVG} style={{maxWidth: '100%'}} />
              </Padding>
            </SplitColumn>
          </SplitPanel>
        </SkewPanel>
      </div>
    );
  }
});