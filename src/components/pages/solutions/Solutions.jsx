import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './solutions.css';
// import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';
import { Heading } from '../../type';

import BaseSVG from '../../images/BaseSVG';
import ec2SVG from '../../images/logos/ec2-01.svg';
import rdsSVG from '../../images/logos/rds-01.svg';

const Solutions = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}><span className="text-accent-static">Solutions</span> for every team</h1>
            <h3>Opsee is made for teams who want to get back to doing what they love: shipping product</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col>
                <div className={style.prosePanel}>
                  <div className="text-center-xs">
                    <Heading permalink="aws" level={2}>Opsee + <span className="text-accent">AWS</span> = &hearts;</Heading>
                  </div>

                  <p>With public cloud services like AWS, monitoring can be effortless. Opsee automatically updates health checks on your services and systems, even when your environment scales. You get full coverage of your AWS ecosystem with nothing to maintain.</p>
                  <p>Read more about how Opsee works with AWS on the <a href="https://blog.opsee.com/monitoring-built-for-aws-49c989c6a2c" target="_blank">Opsee blog</a>.</p>

                  <Padding tb={2} r={4}>
                    <Padding tb={1}>
                      <Row>
                        <Col xs={3} sm={2} className="text-center">
                          <div className={style.awsHeading}>
                            <BaseSVG svg={ec2SVG} />
                          </div>
                        </Col>

                        <Col xs={9} sm={10}>
                          <Padding b={2}><Heading level={3}>Startups</Heading></Padding>
                          <p className="no-space"> <strong>The good news:</strong> a startup team running in AWS can grow to 20 or 30 engineers without dedicated ops. <strong>The bad news:</strong> now dev teams need to own their availability and performance. Open-source tools are a pain to set up and configure, and today’s SaaS products are powerful but expensive, and overkill for our needs. <strong>Opsee is here to help.</strong></p>
                        </Col>
                      </Row>
                    </Padding>

                    <Padding tb={2}>
                      <Row>
                        <Col xs={3} sm={2} className="text-center">
                          <div className={style.awsHeading}>
                            <BaseSVG svg={rdsSVG} />
                          </div>
                        </Col>

                        <Col xs={9} sm={10}>
                          <Padding b={2}><Heading level={3}>Enterprises</Heading></Padding>
                          <p className="no-space"><a href="https://aws.amazon.com/rds/" target="_blank">Amazon Relational Database Service</a> (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. Opsee supports health checks for RDS Database Instances, and support is available by default as part of our AWS integration.</p>
                        </Col>
                      </Row>
                    </Padding>

                  </Padding>
                </div>
              </Col>
            </Row>
          </Panel>
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default Solutions;