import cx from 'classnames';
import React from 'react';

import { Padding, Grid, Row, Col } from '../layout';
import { Button } from '../forms';
import { Quote } from '../global';
import SkewDivider from '../layout/SkewDivider';

import FeaturedCustomers from '../panels/FeaturedCustomers';
import Panel from '../panels/Panel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewPanel from '../panels/SkewPanel';
import StaticHeader from '../panels/StaticHeader';

import style from './pricing.css';
import BaseSVG from '../images/BaseSVG';
import infinitySVG from '../images/infinity.svg';
import latencySVG from '../images/latency.svg';
import notificationLogosWhiteSVG from '../images/notification-logos-white.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Only pay for <span className="text-accent-static">what you use</span></h1>
            <h3>Coming soon. We&rsquo;re still in beta, but here is what you can expect.</h3>
          </div>
        </StaticHeader>

        <Panel>
          <Padding b={3} className="text-center">
            <h2>Free to get started. No credit card required.</h2>
            <p>Try Opsee for free, for as long as you want, with up to 5 health checks on public URLs or APIs.</p>
          </Padding>

          <Grid fluid>
            <Row className="center-xs">
              <Col xs={8} sm={5} className="flex">
                <div className={style.tier}>
                  <div className={style.pricing}>
                    <Padding tb={1}>
                      <h3 className={style.tierName}>Free</h3>
                    </Padding>
                    <Padding tb={1}>
                      <div className={style.price}><span className={style.dollarSign}>$</span><span className={style.priceValue}>0</span></div>
                      forever
                    </Padding>
                  </div>
                  <ul className={style.features}>
                    <li>Up to 5 global checks</li>
                    <li>5-minute check frequency</li>
                    <li>Checks run from 1 of our global locations</li>
                    <li className={style.featureDisabled}>AWS coverage with our EC2 Instance</li>
                    <li className={style.featureDisabled}>CloudWatch integration with unlimited metrics per check</li>
                  </ul>
                  <div className="text-center">
                    <Button className={style.button} block>Sign Up</Button>
                  </div>
                </div>
              </Col>

              <Col xs={8} sm={5} className="flex">
                <div className={style.tier}>
                  <div className={style.pricing}>
                    <Padding tb={1}>
                      <h3 className={style.tierName}>Developer</h3>
                    </Padding>
                    <Padding tb={1}>
                    <div className={style.price}><span className={style.dollarSign}>$</span><span className={style.priceValue}>5</span></div>
                      per check, per month
                    </Padding>
                  </div>
                  <ul className={style.features}>
                    <li>Unlimited global checks</li>
                    <li>30-second check frequency</li>
                    <li>Unlimited hosts</li>
                    <li>AWS coverage with <a href="/how">our EC2 Instance</a></li>
                    <li>CloudWatch integration with unlimited metrics per check</li>
                  </ul>
                  <div className="text-center">
                    <Button className={style.button} secondary disabled block>Coming in July!</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <SkewDivider />
        <FeaturedCustomers />
        <SkewDivider />

        <Panel>
          <Padding b={2} className="text-center">
            <h2>Powerful features <span className="text-accent">for everyone</span></h2>
            <h3>The best parts of Opsee are available to everyone.</h3>
          </Padding>

          <Grid fluid>
            <Row className="center-xs">
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
              <Col xs={6} sm={2}>
                <div className={style.freeFeature}>
                  <BaseSVG svg={latencySVG} className={style.freeSVG} />
                  <span>Responsive<br/>Design</span>
                </div>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <SkewDivider />
        <Panel>
          <Quote quote="autodeskChecks" />
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});