import React from 'react';
import { Button } from '../forms';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewDivider from '../layout/SkewDivider';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';
import { Padding } from '../layout';
import BaseSVG from '../images/BaseSVG';
import awsIntegrationsSVG from '../images/integrations-aws.svg';
import awsSVG from '../images/aws-01.svg';
import slackSVG from '../images/slack-01.svg';
import pagerdutySVG from '../images/pagerduty-01.svg';
import ec2SVG from '../images/aws/ec2-01.svg';
import ecsSVG from '../images/aws/ecs-01.svg';
import rdsSVG from '../images/aws/rds-01.svg'
import installationSVG from '../images/install-steps2.svg';

import style from './integrations.css';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Built for <span className="text-accent-static">your stack</span></h1>
            <h3>Get more out of Opsee with integrations</h3>
          </div>
        </StaticHeader>

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3 first-xs">
              <Padding a={2}>
                <BaseSVG svg={awsSVG} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9 last-xs">
              <div>
                <h2 id="ec2">Opsee + AWS = <span className="text-accent">&hearts;</span></h2>
                <a href="#ec2"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>


              <Padding tb={2} r={4}>
                <Padding tb={2}>
                <div className="row">
                  <div className="col col-xs-2 text-center">
                    <BaseSVG className={style.awsServiceSVG} svg={ecsSVG} />
                  </div>

                  <div className="col col-xs-10">
                    <h3>ECS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
                  </div>
                </div>
                </Padding>

                <Padding tb={2}>
                 <div className="row">
                  <div className="col col-xs-2 text-center">
                    <BaseSVG className={style.awsServiceSVG} svg={rdsSVG} />
                  </div>

                  <div className="col col-xs-10">
                    <h3>RDS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
                  </div>
                </div>
                </Padding>

                <Padding tb={2}>
                 <div className="row">
                  <div className="col col-xs-2 text-center">
                    <BaseSVG className={style.awsServiceSVG} svg={ec2SVG} />
                  </div>

                  <div className="col col-xs-10">
                    <h3>EC2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
                  </div>
                </div>
                </Padding>
              </Padding>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3 first-xs">
              <Padding a={2}>
                <BaseSVG svg={slackSVG} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9 last-xs">
              <div>
                <h2 id="ec2">Rich Notifications with <span className="text-accent">Slack</span></h2>
                <a href="#ec2"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3 first-xs">
              <Padding a={2}>
                <BaseSVG svg={pagerdutySVG} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9 last-xs">
              <div>
                <h2 id="ec2">Incidence Response with <span className="text-accent">PagerDuty</span></h2>
                <a href="#ec2"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
            </div>
          </div>
        </Panel>
      </div>
    );
  }
});