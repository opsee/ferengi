import React from 'react';

import Header from '../Header';
import SkewPanel from '../panels/SkewPanel';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
// import SummaryPanels from '../panels/SummaryPanels';
import { Padding, Row, Col } from '../layout';
import Button from '../forms/Button';
import SkewDivider from '../layout/SkewDivider';
import Quote from '../global/Quote';
import Panel from '../panels/Panel';

import BaseSVG from '../images/BaseSVG';
// import illustAWSKey from '../images/illust_aws_key-01.svg';
import locMap from '../images/location-map.svg';
// import illustBrowser from '../images/illust_browsers-01.svg';
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
        <SkewPanel backgroundColor="white" skewTop={false}>
          <Header theme="dark"/>

          <HeroPanel />
        </SkewPanel>

        <SkewDivider />

        <Padding t={2} lr={2}>
          <div className={style.grid}>
            <div className={style.col}>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={illustChecks} /></a>
              </div>
              <div className={style.colText}>
                <p>Health is more than a status code. Check the headers, bodies, and round-trip times of your responses too.</p>
              </div>
            </div>

            <div className={style.col}>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={locMap} /></a>
              </div>
              <div className={style.colText}>
                <p>Global coverage of your sites and APIs. Every check runs from all 6 of our locations around the world, every 30 seconds, with nothing to install.</p>
              </div>
            </div>

            <div className={style.col}>
              <div className={style.colSVG}>
                <a href="/features"><BaseSVG svg={illustAWS} /></a>
              </div>
              <div className={style.colText}>
                <p>Complete AWS coverage when you add our EC2 instance to your environment. Check your services and CloudWatch metrics with no agents to run.</p>
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

        <Padding className="text-center" t={2}>
          <h3>Featured Customers</h3>
          <Padding t={2}>
            <a target="_blank" href="http://www.autodesk.com/"><BaseSVG svg={logoAutodesk} className={style.customerLogo} /></a>
            <a target="_blank" href="https://www.livewatch.com"><BaseSVG svg={logoLivewatch} className={style.customerLogo} /></a>
            <a target="_blank" href="https://www.yieldbot.com/"><BaseSVG svg={logoYieldbot} className={style.customerLogo} /></a>
            <a target="_blank" href="http://www.azavea.com/"><BaseSVG svg={logoAzavea} className={style.customerLogo} /></a>
            <a target="_blank" href="https://www.realself.com/"><BaseSVG svg={logoRealself} className={style.customerLogo} /></a>
          </Padding>
        </Padding>

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
