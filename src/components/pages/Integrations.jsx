import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewDivider from '../layout/SkewDivider';
import { Padding } from '../layout';
import { Heading, Permalink } from '../type';
import BaseSVG from '../images/BaseSVG';
import awsSVG from '../images/aws-01.svg';
import slackSVG from '../images/slack-01.svg';
import ec2SVG from '../images/aws/ec2-01.svg';
import ecsSVG from '../images/aws/ecs-01.svg';
import rdsSVG from '../images/aws/rds-01.svg';

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
            <div className="col center-xs col-xs-12 col-sm-4 col-md-3 first-xs">
              <div className={style.logo}>
                <BaseSVG svg={awsSVG} />
              </div>
            </div>

            <div className="col col-xs-12 col-sm-8 col-md-9 last-xs">
              <div className={style.prosePanel}>
                <div className="text-center-xs">
                  <Heading permalink="aws" level={2}>Opsee + <span className="text-accent">AWS</span> = &hearts;</Heading>
                </div>

                <p>With public cloud services like AWS, monitoring can be effortless. Opsee automatically updates health checks on your services and systems, even when your environment scales. You get full coverage of your AWS ecosystem with nothing to maintain.</p>
                <p>Read more about how Opsee works with AWS on the <a href="https://blog.opsee.com/monitoring-built-for-aws-49c989c6a2c" target="_blank">Opsee blog</a>.</p>

                <Padding tb={2} r={4}>
                  <Padding tb={1}>
                    <div className="row">
                      <div className="col col-xs-4 col-sm-3 text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={ec2SVG} />
                          <Padding tb={1}>
                            <Heading level={3}>EC2</Heading>
                            <Permalink link="aws-ec2" className={style.awsPermalink} />
                          </Padding>
                        </div>
                      </div>

                      <div className="col col-xs-8 col-sm-9">
                        <p className="no-space"><a href="https://aws.amazon.com/ec2/" target="_blank">Amazon Elastic Compute Cloud</a> (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. Opsee supports health checks for Security Groups, Auto Scale Groups, Elastic Load Balancers and individual EC2 instances, and support is available by default as part of our AWS integration.</p>
                      </div>
                    </div>
                  </Padding>

                  <Padding tb={1}>
                    <div className="row">
                      <div className="col col-xs-4 col-sm-3 text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={rdsSVG} />
                          <Padding tb={1}>
                            <Heading level={3}>RDS</Heading>
                            <Permalink link="aws-rds" className={style.awsPermalink} />
                          </Padding>
                        </div>
                      </div>

                      <div className="col col-xs-8 col-sm-9">
                        <p className="no-space"><a href="https://aws.amazon.com/rds/" target="_blank">Amazon Relational Database Service</a> (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. Opsee supports health checks for RDS Database Instances, and support is available by default as part of our AWS integration.</p>
                      </div>
                    </div>
                  </Padding>

                  <Padding tb={1}>
                    <div id="aws-ecs" className="row">
                      <div className="col col-xs-4 col-sm-3 text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={ecsSVG} />
                          <Padding tb={1}>
                            <Heading level={3}>ECS</Heading>
                            <Permalink link="aws-ecs" className={style.awsPermalink}/>
                          </Padding>
                        </div>
                      </div>

                      <div className="col col-xs-8 col-sm-9">
                        <p className="no-space"><a href="https://aws.amazon.com/ecs/" target="_blank">Amazon EC2 Container Service</a> (Amazon ECS) is a container management service that lets you run applications from Docker containers on clusters of EC2 instances. Opsee supports health checks for ECS Services, and support is available by default as part of our AWS integration.</p>
                      </div>
                    </div>
                  </Padding>
                </Padding>
              </div>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-4 col-md-3 first-xs">
              <div className={style.logo}>
                <BaseSVG svg={slackSVG} />
              </div>
            </div>

            <div className="col col-xs-12 col-sm-8 col-md-9 last-xs">
              <div className={style.prosePanel}>
                <div className="text-center-xs">
                  <Heading permalink="slack" level={2}>Rich Notifications with <span className="text-accent">Slack</span></Heading>
                </div>

                <p><a href="https://slack.com/" target="_blank">Slack</a> is a messaging app for teams. Opsee can send notifications to Slack channels. Just connect Opsee to Slack in your profile, and choose a Slack channel to send notifications to when you create health checks.</p>
                </div>
            </div>
          </div>
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});