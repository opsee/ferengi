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
import taskSVG from '../images/icons/task.svg';
import stopwatchSVG from '../images/icons/stopwatch.svg';
import mailSVG from '../images/icons/mail.svg';
import worldwideSVG from '../images/icons/worldwide.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Free to get started. <span className="text-accent-static">No credit card required</span></h1>
            <h3>We&rsquo;re wrapping up our beta, and here is what you can expect soon.</h3>
          </div>
        </StaticHeader>

        <Panel>
          <Grid fluid>
            <Row className="center-xs">
              <Col xs={10} sm={4} className="flex">
                <div className={style.tier}>
                  <div className={style.pricing}>
                    <Padding tb={1}>
                      <h3 className={style.tierName}>FREE</h3>
                    </Padding>
                    <Padding tb={1}>
                      <div className={style.price}><span className={style.dollarSign}>&nbsp;&nbsp;&nbsp;</span><span className={style.priceValue}>1</span></div>
                      Check
                    </Padding>
                  </div>
                  <Padding tb={1}>
                    <p><em>One check, zero limits</em></p>
                    <ul className={style.features}>
                      <li>Global coverage from our 6 PoPs</li>
                      <li>AWS coverage with our EC2 Instance</li>
                      <li>Muli-user access</li>
                      <li>Historical data</li>
                      <li>Uptime & performance reports</li>
                    </ul>
                  </Padding>
                  <Padding tb={1} className="text-center">
                    <Button href="#signup" className={style.button} block>Try Opsee for FREE</Button>
                  </Padding>
                </div>
              </Col>

              <Col xs={10} sm={4} className="flex">
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
                  <Padding tb={1}>
                    <p><em>Coverage everywhere</em></p>
                    <ul className={style.features}>
                      <li>Global coverage from our 6 PoPs</li>
                      <li>AWS coverage with <a href="/how">our EC2 Instance</a></li>
                      <li className={style.featureDisabled}>Muli-user access</li>
                      <li className={style.featureDisabled}>Historical data</li>
                      <li className={style.featureDisabled}>Uptime & performance reports</li>
                    </ul>
                  </Padding>
                  <Padding tb={1} className="text-center">
                    <Button className={style.button} secondary disabled block>Coming in July</Button>
                  </Padding>
                </div>
              </Col>

              <Col xs={10} sm={4} className="flex">
                <div className={style.tier}>
                  <div className={style.pricing}>
                    <Padding tb={1}>
                      <h3 className={style.tierName}>Team</h3>
                    </Padding>
                    <Padding tb={1}>
                    <div className={style.price}><span className={style.dollarSign}>$</span><span className={style.priceValue}>10</span></div>
                      per check, per month
                    </Padding>
                  </div>
                  <Padding tb={1}>
                    <p><em>Made for teams</em></p>
                    <ul className={style.features}>
                      <li>Global coverage from our 6 PoPs</li>
                      <li>AWS coverage with <a href="/how">our EC2 Instance</a></li>
                      <li>Muli-user access</li>
                      <li>Historical data</li>
                      <li>Uptime & performance reports</li>
                    </ul>
                  </Padding>
                  <Padding tb={1} className="text-center">
                    <Button className={style.button} secondary disabled block>Coming in September</Button>
                  </Padding>
                </div>
              </Col>
            </Row>
            <Row className="center-xs">
              <Col xs={12} sm={8}>
                <Padding tb={2} className="text-center">
                  <h3>Interested in Enterprise-scale monitoring?</h3>
                  <Padding t={1} b={2}><p className="no-space">If you&rsquo;re looking for an annual contract, SLA, and invoicing we&rsquo;d love to hear from you. Just contact our sales team.</p></Padding>
                  <Button href="mailto:sales@opsee.com?subject=Enterprise Opsee" className={style.button} secondary>Contact us</Button>
                </Padding>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <SkewDivider />

        <Panel>
          <Padding b={4} className="text-center">
            <h2>Powerful features <span className="text-accent">for everyone</span></h2>
            <h3>The best parts of Opsee are available to everyone.</h3>
          </Padding>

          <Grid fluid>
            <Row className="center-xs">
              <Col xs={6} sm={2}>
                <div className={style.freeFeature}>
                  <BaseSVG svg={taskSVG} className={style.freeSVG} />
                  <span>Unlimited<br/>Assertions</span>
                </div>
              </Col>
              <Col xs={6} sm={2}>
                <div className={style.freeFeature}>
                  <BaseSVG svg={mailSVG} className={style.freeSVG} />
                  <span>Rich<br/>Notifications</span>
                </div>
              </Col>
              <Col xs={6} sm={2}>
                <div className={style.freeFeature}>
                  <BaseSVG svg={stopwatchSVG} className={style.freeSVG} />
                  <span>Latency<br/>Measurement</span>
                </div>
              </Col>
              <Col xs={6} sm={2}>
                <div className={style.freeFeature}>
                  <BaseSVG svg={worldwideSVG} className={style.freeSVG} />
                  <span>Global<br/>Coverage</span>
                </div>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <SkewDivider />
        <FeaturedCustomers />

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