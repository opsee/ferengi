import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewDivider from '../layout/SkewDivider';
import { Padding, Row, Col } from '../layout';
// import { Heading, Permalink } from '../type';
import BaseSVG from '../images/BaseSVG';
import infinitySVG from '../images/infinity.svg';
import latencySVG from '../images/latency.svg';
import notificationLogosWhiteSVG from '../images/notification-logos-white.svg';
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
                <Padding t={1}>
                  <div className={style.priceNote}>free<br/>forever</div>
                </Padding>
              </div>

              <Padding lr={1} b={2}>
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
                <Padding t={1}>
                  <div className={style.priceNote}>per check<br/>per month</div>
                </Padding>
              </div>

              <Padding lr={1} b={2}>
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
                <Padding t={1}>
                  <div className={style.priceNote}>per check<br/>per month</div>
                </Padding>
              </div>

              <Padding lr={1} b={2}>
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

        <SkewDivider />

        <Panel>
          <Padding b={2} className="text-center">
            <h2>Powerful features <span className="text-accent">for everyone</span></h2>
            <h3>The best parts of Opsee are available to everyone.</h3>
          </Padding>

          <Row className="text-center">
            <Col xs={6} sm={2}>
              <div className={style.freeFeature}>
                <BaseSVG svg={infinitySVG} className={style.freeSVG} />
                <span>Unlimited<br/>Assertions</span>
              </div>
            </Col>
            <Col xs={6} sm={2}>
              <div className={style.freeFeature}>
                <BaseSVG svg={notificationLogosWhiteSVG} className={style.freeSVG} />
                <span>Rich<br/>Notifications</span>
              </div>
            </Col>
            <Col xs={6} sm={2}>
              <div className={style.freeFeature}>
                <BaseSVG svg={latencySVG} className={style.freeSVG} />
                <span>Latency<br/>Measurement</span>
              </div>
            </Col>
          </Row>
        </Panel>

        <SkewDivider />

        <Panel>
          <Padding b={2} className="text-center">
            <h2>Frequently Asked <span className="text-accent">Questions</span></h2>
          </Padding>

          <Row>
            <Col sm={6}>
              <p><strong>How do AWS checks work?</strong></p>
              <p>The most important thing to know is that we don&rsquo;t count instances/hosts. When you target a check at a Security Group, for example, we track and check all of its instances automatically, whether there are 2 or 200</p>

              <p><strong>How am I billed for checks?</strong></p>
              <p>A check does not count unless it has been running for at least a week.</p>
            </Col>
            <Col sm={6}>
              <p><strong>How do CloudWatch checks work?</strong></p>
              <p>We capture the available metrics from CloudWatch and let you create checks for multiple metrics for a given target. So if you have a RDS Database Instance and want to track CPU utilization, free memory, and database connections, you can add all of those metrics to a single check. In fact, we will create that check for you automatically, for each RDS DB instance we detect, when you add our instance.</p>
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