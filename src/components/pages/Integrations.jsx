import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewDivider from '../layout/SkewDivider';
import { Padding } from '../layout';
import { Heading, Permalink } from '../type';
import { Col, Row } from 'emissary/src/js/modules/bootstrap';

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
          <Row>
            <Col xs={12} sm={4} md={3} className="center-xs first-xs">
              <div className={style.logo}>
                <BaseSVG svg={awsSVG} />
              </div>
            </Col>

            <Col xs={12} sm={8} md={9} className="last-xs">
              <div className={style.prosePanel}>
                <div className="text-center-xs">
                  <Heading permalink="aws" level={2}>Opsee + <span className="text-accent">AWS</span> = &hearts;</Heading>
                </div>

                <p>With public cloud services like AWS, monitoring can be effortless. Opsee automatically updates health checks on your services and systems, even when your environment scales. You get full coverage of your AWS ecosystem with nothing to maintain.</p>
                <p>Read more about how Opsee works with AWS on the <a href="https://blog.opsee.com/monitoring-built-for-aws-49c989c6a2c" target="_blank">Opsee blog</a>.</p>

                <Padding tb={2} r={4}>
                  <Padding tb={1}>
                    <Row>
                      <Col xs={4} sm={3} className="text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={ec2SVG} />
                          <Padding tb={1}>
                            <Heading level={3}>EC2</Heading>
                            <Permalink link="aws-ec2" className={style.awsPermalink} />
                          </Padding>
                        </div>
                      </Col>

                      <Col xs={8} sm={9}>
                        <p className="no-space"><a href="https://aws.amazon.com/ec2/" target="_blank">Amazon Elastic Compute Cloud</a> (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. Opsee supports health checks for Security Groups, Auto Scale Groups, Elastic Load Balancers and individual EC2 instances, and support is available by default as part of our AWS integration.</p>
                      </Col>
                    </Row>
                  </Padding>

                  <Padding tb={1}>
                    <Row id="aws-rds">
                      <Col xs={4} sm={3} className="text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={rdsSVG} />
                          <Padding tb={1}>
                            <Heading level={3}>RDS</Heading>
                            <Permalink link="aws-rds" className={style.awsPermalink} />
                          </Padding>
                        </div>
                      </Col>

                      <Col xs={8} sm={9}>
                        <p className="no-space"><a href="https://aws.amazon.com/rds/" target="_blank">Amazon Relational Database Service</a> (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. Opsee supports health checks for RDS Database Instances, and support is available by default as part of our AWS integration.</p>
                      </Col>
                    </Row>
                  </Padding>

                  <Padding tb={1}>
                    <Row id="aws-ecs">
                      <Col xs={4} sm={3} className="text-center">
                        <div className={style.awsHeading}>
                          <BaseSVG svg={ecsSVG} />
                          <Padding tb={1}>
                            <Heading level={3}>ECS</Heading>
                            <Permalink link="aws-ecs" className={style.awsPermalink}/>
                          </Padding>
                        </div>
                      </Col>

                      <Col xs={8} sm={9}>
                        <p className="no-space"><a href="https://aws.amazon.com/ecs/" target="_blank">Amazon EC2 Container Service</a> (Amazon ECS) is a container management service that lets you run applications from Docker containers on clusters of EC2 instances. Opsee supports health checks for ECS Services, and support is available by default as part of our AWS integration.</p>
                      </Col>
                    </Row>
                  </Padding>
                </Padding>
              </div>
            </Col>
          </Row>
        </Panel>

        <SkewDivider />

        <Panel>
          <Row>
            <Col xs={12} sm={4} md={3} className="center-xs first-xs">
              <div className={style.logo}>
                <BaseSVG svg={slackSVG} />
              </div>
            </Col>

            <Col xs={12} sm={8} md={9} className="last-xs">
              <div className={style.prosePanel}>
                <div className="text-center-xs">
                  <Heading permalink="slack" level={2}>Rich Notifications with <span className="text-accent">Slack</span></Heading>
                </div>

                <p><a href="https://slack.com/" target="_blank">Slack</a> is a messaging app for teams. Opsee can send notifications to Slack channels. Just connect Opsee to Slack in your profile, and choose a Slack channel to send notifications to when you create health checks.</p>
                <p>Read more about setting up your Slack notifications <a href="https://app.opsee.com/docs/notifications" target="_blank">in our docs</a>.</p>
                </div>
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