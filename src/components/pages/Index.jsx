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

        <Padding t={2} lr={2}>
          <div className={style.grid}>
            <div className={style.col}>
              <h3 className="text-center font-accent">Rich assertions</h3>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={illustChecks} /></a>
              </div>
              <div className={style.colText}>
                <p>Health is more than a status code. Check the headers, bodies, and round-trip times of your responses too.</p>
              </div>
            </div>

            <div className={style.col}>
              <h3 className="text-center font-accent">Global Coverage</h3>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={locMap} /></a>
              </div>
              <div className={style.colText}>
                <p>Every check runs from all 6 of our locations around the world, every 30 seconds</p>
              </div>
            </div>

            <div className={style.col}>
              <h3 className="text-center font-accent">AWS Coverage</h3>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={illustAWS} /></a>
              </div>
              <div className={style.colText}>
                <p>Just add our EC2 instance to your environment. We&rsquo;ll check your services and CloudWatch metrics with no agents to run.</p>
              </div>
            </div>
          </div>
        </Padding>

        <Padding className="text-center" tb={2}>
          <Button to="/features" className={style.button} secondary chevron>
            Learn more about Opsee
          </Button>
        </Padding>

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
