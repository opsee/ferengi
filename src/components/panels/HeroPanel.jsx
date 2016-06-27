import React from 'react';

import Panel from './Panel.jsx';
import style from './heroPanel.css';
import Padding from '../layout/Padding';
import { Heading } from '../type';

import BaseSVG from '../images/BaseSVG';
import locMap from '../images/location-map.svg';
import illustAWS from '../images/illust_aws-01.svg';
import illustChecks from '../images/illust_checks-01.svg';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.heroPanel}>
          <div className={style.heroContent}>
            <div className={style.heading}>
              <Padding tb={1}>
                <Heading l={1}><span className="text-accent">Health checks</span> for microservices</Heading>
              </Padding>
              <div className={style.subHeader}>See the availability and performance of your sites, APIs and internal services in one place</div>
            </div>
          </div>

          <Padding t={2} lr={2}>
            <div className={style.grid}>
              <div className={style.col}>
                <div className={style.colSVG}>
                  <a href="/features"><BaseSVG svg={illustChecks} /></a>
                </div>
                <h3 className="text-center font-accent">Rich assertions</h3>
                <div className={style.colText}>
                  <p>Health is more than a status code. Check the headers, bodies, and round-trip times of your responses too.</p>
                </div>
              </div>

              <div className={style.col}>
                <div className={style.colSVG}>
                  <a href="/features"><BaseSVG svg={locMap} /></a>
                </div>
                <h3 className="text-center font-accent">Global Coverage</h3>
                <div className={style.colText}>
                  <p>Every check runs from all 6 of our locations around the world, every 30 seconds</p>
                </div>

              </div>

              <div className={style.col}>
                <div className={style.colSVG}>
                  <a href="/features"><BaseSVG svg={illustAWS} /></a>
                </div>
                <h3 className="text-center font-accent">AWS Coverage</h3>
                <div className={style.colText}>
                  <p>Just add our EC2 instance to your environment. We&rsquo;ll check your services and CloudWatch metrics with no agents to run.</p>
                </div>
              </div>
            </div>
          </Padding>
        </div>
      </Panel>
    );
  }
});