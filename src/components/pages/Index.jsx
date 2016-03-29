import React from 'react';

import Header from '../Header';
import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';
import { Padding } from '../layout';
import Button from '../forms/Button';
import SkewDivider from '../layout/SkewDivider';

import BaseSVG from '../images/BaseSVG';
import illustAWSKey from '../images/illust_aws_key-01.svg';
import illustBrowser from '../images/illust_browsers-01.svg';
import illustChecks from '../images/illust_checks-01.svg';

/*eslint-disable no-unused-vars*/
import style from './index.css';
import styleConstants from '../../constants/styleConstants';
/*eslint-enable no-unused-vars*/

export default React.createClass({
  render() {
    return (
      <div>
        <SkewPanel backgroundColor="white" skewTop={false}>
          <Header theme="dark"/>

          <HeroPanel />
        </SkewPanel>

        <SkewDivider />

        <Padding t={2} lr={2}>
          <div className="text-center">
            <Padding t={2}>
              <h2>Complete AWS coverage, <span className="text-accent">right now</span></h2>
              <h3>No software to install, no shell scripts to cURL</h3>

              <Padding t={2}>
                <Button to="/features" className={style.button} secondary chevron>
                  Learn more about Opsee
                </Button>
              </Padding>
            </Padding>
          </div>

          <div className={style.grid}>
            <div className={style.col}>
              <div className={style.colSVG}>
                <BaseSVG svg={illustAWSKey} />
              </div>
              <div className={style.colText}>
                <div>Add Opsee to your AWS environment</div>
              </div>
            </div>

            <div className={style.col}>
              <div className={style.colSVG}>
                <BaseSVG svg={illustBrowser} />
              </div>
              <div className={style.colText}>
                <div>Opsee discovers your infrastructure</div>
              </div>
            </div>

            <div className={style.col}>
              <div className={style.colSVG}>
                <BaseSVG svg={illustChecks} />
              </div>
              <div className={style.colText}>
                <div>Get coverage instantly with nothing to maintain</div>
              </div>
            </div>
          </div>
        </Padding>

        <div>
          <SummaryPanels />
        </div>

        <SkewPanel backgroundColor="#303030" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
