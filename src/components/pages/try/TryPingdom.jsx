
import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import Button from '../../forms/Button';
import BaseSVG from '../../images/BaseSVG';
import passingAssertionsSVG from '../../images/passing-assertions.svg';
import locMap from '../../images/location-map.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="A Better Alternative to Pingdom" splashClass={style.splashNagios}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding b={2}>
              <h2>Be sure your sites & services respond <span className="text-accent">the way you expect</span></h2>
              <h3>Verify response headers, bodies, and round-trip times – health is more than a status code.</h3>
            </Padding>

            <ul className="prose">
              <li>Parse the contents of any response - even check individual JSON keys</li>
              <li>Combine assertions for a more thorough view of health</li>
            </ul>

          </SplitPanel>

          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={passingAssertionsSVG} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <SplitContainer className={style.section}>
          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={locMap} />
          </SplitPanel>

          <SplitPanel className={style.prosePanel} >
            <Padding b={2}>
              <h2><span className="text-accent">Global</span> availability and performance checks</h2>
              <h3>Global coverage of your public sites and APIs. Every check runs from all 6 of our locations around the world, every 30 seconds</h3>
            </Padding>

            <ul className="prose">
              <li>Round-trip times measured from all 6 locations</li>
              <li>All DNS entries for URLs are tracked automatically</li>
            </ul>

            <Padding tb={2}>
              <Button to="/how" className={style.button} secondary chevron>
                How Opsee works
              </Button>
            </Padding>
          </SplitPanel>
        </SplitContainer>

        <SkewDivider />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote quote="pingdom" />
            </Col>
          </Row>
        </Panel>

        <SkewDivider />

        <Panel>
          <Padding b={2} className="text-center">
            <h2>Compare to <span className="text-accent">Pingdom</span></h2>
          </Padding>

          <Row className="prose">
            <Col sm={6}>
              <p><strong>Health checks</strong></p>
              <ul>
                <li>Health checks in Opsee include rich assertions. Pingdom only looks at availability</li>
                <li>Opsee includes round-trip time measurements on every check. Pingdom charges extra.</li>
              </ul>

              <p><strong>Notifications</strong></p>
              <ul>
                <li>Opsee has seamless integrations with Slack, Pagerduty, webhooks, and email. Try setting that up in Pingdom...</li>
                <li>Opsee has deep integration with AWS for health checks on your sites, APIs, and internal services</li>
              </ul>

              <p><strong>Price</strong></p>
              <ul>
                <li>Opsee has health checks that are both more powerful and less expensive than Pingdom checks</li>
              </ul>
            </Col>
            <Col sm={6}>
              <p><strong>Coverage</strong></p>
              <ul>
                <li>In Opsee, all checks from from all of our global locations by default. With Pingdom it can be difficult, and not always possible, to set up checks from multiple locations</li>
                <li>Opsee offers coverage that Pingdom can&rsquo;t. With our instance running in your AWS environment, we can cover not only your public sites and APIs, but internal services as well</li>
                <li>Opsee identifies and tests all of the DNS entries for your URLs automatically</li>
              </ul>

              <p><strong>Usability</strong></p>
              <ul>
                <li>Opsee has a mobile-friendly, responsive UI that you can use anywhere</li>
                <li>We include rich context in our notifications, showing you failing responses and where they came from</li>
              </ul>
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});