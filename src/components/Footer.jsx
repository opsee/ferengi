import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col} from './layout';

import BaseSVG from './images/BaseSVG';
import emailSVG from './images/icons/material-email.svg';
import logoSVG from './images/logos/opsee/opseelogo-screen-dark-one.svg';
import mediumSVG from './images/logos/medium.svg';
import twitterSVG from './images/logos/twitter-white.svg';
import style from './footer.css';

export default React.createClass({
  renderProduct() {
    return (
      <div>
        <div className={style.category}>Product</div>
        <ul className={style.nav}>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/integrations">Integrations</Link></li>
          <li><Link to="/how">How It Works</Link></li>
        </ul>
      </div>
    );
  },

  renderLearn(){
    return (
      <div>
        <div className={style.category}>Guides</div>
        <ul className={style.nav}>
          <li><Link to="/guides/nodechecks">node.js</Link></li>
          <li><Link to="/guides/gochecks">Go</Link></li>
          <li><Link to="/guides/awsmonitoring">AWS Monitoring</Link></li>
          <li><Link to="/guides/dropwizard">Dropwizard</Link></li>
          <li><Link to="https://app.opsee.com/help" target="_blank">Documentation</Link></li>
        </ul>
      </div>
    );
  },

  renderLegal(){
    return (
      <div>
        <div className={style.category}>Legal</div>
        <ul className={style.nav}>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/beta-tos">Terms of Service</Link></li>
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
        </ul>
      </div>
    );
  },

  renderLinks(){
    return (
      <div>
        <div className={style.category}>Links</div>
        <ul className={style.nav}>
          <li><Link to="https://app.opsee.com/create" target="_blank">Sign up</Link></li>
          <li><Link to="https://app.opsee.com/login" target="_blank">Log in</Link></li>
          <li><Link to="/about">About Opsee</Link></li>
          <li><Link to="https://opsee.statuspage.io" target="_blank">System Status</Link></li>
        </ul>
      </div>
    );
  },

  renderSocial(){
    return (
      <ul className={style.socialNav}>
        <li>
          <a href="mailto:support@opsee.co"><span className={style.hideSm}>support@opsee.co</span> <BaseSVG className={style.socialLogo} svg={emailSVG} /></a>
        </li>
        <li>
          <a href="https://twitter.com/GetOpsee" target="_blank"><span className={style.hideSm}>@GetOpsee</span> <BaseSVG className={style.socialLogo} svg={twitterSVG} /></a>
        </li>
        <li>
          <a href="https://blog.opsee.com/@opseeco" target="_blank"><span className={style.hideSm}>The Opsee Blog</span> <BaseSVG className={style.socialLogo} svg={mediumSVG} /></a>
        </li>
      </ul>
    );
  },

  render() {
    return (
      <div className={style.footer}>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <Grid fluid>
                <Row>
                  <Col xs={6} sm={3}>{this.renderProduct()}</Col>
                  <Col xs={6} sm={3}>{this.renderLearn()}</Col>
                  <Col xs={6} sm={3}>{this.renderLegal()}</Col>
                  <Col xs={6} sm={3}>{this.renderLinks()}</Col>
                </Row>
              </Grid>
            </Col>
            <Col xs={12} md={3}>
              <Grid className={style.socialColumn} fluid>
                <Row className="middle-xs">
                  <Col xs={4} md={12}>
                    <BaseSVG className={style.logo} svg={logoSVG} />
                  </Col>
                  <Col xs={8} md={12}>
                    {this.renderSocial()}
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});