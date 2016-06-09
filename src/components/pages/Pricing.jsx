import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
// import SkewDivider from '../layout/SkewDivider';
import { Padding, Row, Col } from '../layout';
// import { Heading, Permalink } from '../type';
// import BaseSVG from '../images/BaseSVG';
// import infinitySVG from '../images/infinity.svg';
// import notificationLogosWhiteSVG from '../images/notification-logos-white.svg';
// import awsSVG from '../images/logos/aws-01.svg';
// import slackSVG from '../images/logos/slack-01.svg';
// import pagerdutySVG from '../images/logos/pagerduty.svg';
// import ec2SVG from '../images/logos/ec2-01.svg';
// import ecsSVG from '../images/logos/ecs-01.svg';
// import rdsSVG from '../images/logos/rds-01.svg';

import style from './pricing.css';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Only pay for <span className="text-accent-static">what you use</span></h1>
            <h3>Coming soon. We&rsquo;re still in beta, but here is what you can expect</h3>
          </div>
        </StaticHeader>

        <Panel>
          <Padding b={3} className="text-center">
            <h2>Free to get started. No credit card required.</h2>
            <p>Try Opsee for free, for as long as you want, with up to 5 health checks on public URLs or APIs.</p>
          </Padding>

          <Row>
            <Col xs={12} sm={4}>
              <h3 className={style.pricingTableTHFree}>Free</h3>
              <div className={style.priceFree}>
                <span className={style.priceDol}>$</span><span className={style.priceNum}>0</span>
                <div className={style.priceNote}>free<br/>forever</div>
              </div>

              <Padding lr={1}>
                <h3>Features</h3>
                <ul className="prose">
                  <li>Up to 5 Global Checks</li>
                  <li>5-minute check frequency</li>
                  <li>Run from 1 of our global locations</li>
                </ul>
              </Padding>
            </Col>
            <Col xs={12} sm={4}>
              <h3 className={style.pricingTableTH}>Global Checks</h3>

              <div className={style.price}>
                <span className={style.priceDol}>$</span><span className={style.priceNum}>1</span>
                <div className={style.priceNote}>per check<br/>per month</div>
              </div>

              <Padding lr={1}>
                <h3>Features</h3>
                <ul className="prose">
                  <li>30-second check frequency</li>
                  <li>Run from all 6 of our global locations</li>
                </ul>
              </Padding>
            </Col>
            <Col xs={12} sm={4}>
              <h3 className={style.pricingTableTH}>AWS Checks</h3>

              <div className={style.price}>
                <span className={style.priceDol}>$</span><span className={style.priceNum}>5</span>
                <div className={style.priceNote}>per check<br/>per month</div>
              </div>

              <Padding lr={1}>
                <h3>Features</h3>
                <ul className="prose">
                  <li>30-second check frequency</li>
                  <li>Run from <a href="/how">our EC2 Instance</a></li>
                  <li>Unlimited hosts</li>
                  <li>CloudWatch integration with unlimited metrics per check</li>
                </ul>
              </Padding>
            </Col>
          </Row>
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});