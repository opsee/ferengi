import React from 'react';

import Header from '../Header';
import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import { Padding, Row, Col } from '../layout';
import Button from '../forms/Button';
import SkewDivider from '../layout/SkewDivider';
import Quote from '../global/Quote';
import Panel from '../panels/Panel';
import WizardPanel from '../panels/WizardPanel';

import BaseSVG from '../images/BaseSVG';
import locMap from '../images/location-map.svg';
import illustAWS from '../images/illust_aws-01.svg';
import illustChecks from '../images/illust_checks-01.svg';
import logoAutodesk from '../images/logos/logo-autodesk.svg';
import logoLivewatch from '../images/logos/logo-livewatch.png';
import logoAzavea from '../images/logos/logo-azavea.png';
import logoYieldbot from '../images/logos/logo-yieldbot.png';
import logoRealself from '../images/logos/logo-realself.png';

/*eslint-disable no-unused-vars*/
import style from './index.css';
import styleConstants from '../../constants/styleConstants';
/*eslint-enable no-unused-vars*/

export default React.createClass({
  render() {
    return (
      <div>
        <Header theme="dark"/>

        <HeroPanel />

        <SkewDivider />

        <WizardPanel />

        <SkewDivider />

        <div className="text-center">
          <Padding tb={2}>
            <h3>Featured Customers</h3>
          </Padding>
          <Padding tb={2}>
            <div className="flex-vertical-align justify-content-center flex-wrap">
              <Padding a={1}>
                <a target="_blank" href="http://www.autodesk.com/"><BaseSVG svg={logoAutodesk} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="https://www.livewatch.com"><BaseSVG svg={logoLivewatch} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="https://www.yieldbot.com/"><BaseSVG svg={logoYieldbot} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="http://www.azavea.com/"><BaseSVG svg={logoAzavea} className={style.customerLogo} /></a>
              </Padding>
              <Padding a={1}>
                <a target="_blank" href="https://www.realself.com/"><BaseSVG svg={logoRealself} className={style.customerLogo} /></a>
              </Padding>
            </div>
          </Padding>
        </div>

        <SkewDivider />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote quote="autodeskChecks" />
            </Col>
          </Row>
        </Panel>

        <SkewPanel backgroundColor="#303030" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
