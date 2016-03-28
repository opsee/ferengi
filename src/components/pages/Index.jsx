import React from 'react';

import Header from '../Header';
import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SummaryPanels from '../panels/SummaryPanels';

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
        <SkewPanel backgroundColor="#303030" skewTop={false}>
          <Header theme="light"/>

          <HeroPanel />
        </SkewPanel>

        <div className={style.grid}>
          <div className={style.col}>
            <BaseSVG svg={illustAWSKey} />
            <div>
              step 01
            </div>
          </div>

          <div className={style.col}>
            <BaseSVG svg={illustBrowser} />
          </div>

          <div className={style.col}>
            <BaseSVG svg={illustChecks} />
          </div>
        </div>


        <div>
          <SummaryPanels />
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
