import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './solutions.css';
// import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewDivider from '../../layout/SkewDivider';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Quote from '../../global/Quote';
import Panel from '../../panels/Panel';
import { Heading } from '../../type';

import BaseSVG from '../../images/BaseSVG';
import solutionsStartupSVG from '../../images/solutions-startup.svg';
import solutionsEnterpriseSVG from '../../images/solutions-enterprise.svg';

const Solutions = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}><span className="text-accent-static">Solutions</span> for every team</h1>
            <h3>Companies of all sizes are using Opsee to make monitoring effortless</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col>
                <div className={style.prosePanel}>
                  <div className="text-center-xs">
                    <Heading level={2}>Complete coverage, <span className="text-accent">right now</span></Heading>
                  </div>

                  <p>Running in AWS, monitoring can be effortless. Opsee automatically discovers your infrastructure and updates health checks as your environment scales. You get full coverage with nothing to maintain and no agents to run on your systems.</p>

                  <Padding tb={2} r={4}>
                    <Padding tb={1}>
                      <Row>
                        <Col xs={3} sm={2} className="text-center">
                          <div className={style.awsHeading}>
                            <a href="/solutions/startup"><BaseSVG svg={solutionsStartupSVG} /></a>
                          </div>
                        </Col>

                        <Col xs={9} sm={10}>
                          <Padding b={2}><Heading level={3}>Startup</Heading></Padding>
                          <p className="no-space"><strong>The good news:</strong> a startup team running in AWS can grow bigger than ever without dedicated ops. <strong>The bad news:</strong> now your dev team has to own their availability and performance. Open-source tools are a pain to set up and configure, and today’s SaaS products are powerful but expensive, and overkill for our needs. How do you bootstrap your monitoring efforts to stay in control?</p>

                            <p><a href="/solutions/startup">Learn more about Opsee for startups</a></p>
                        </Col>
                      </Row>
                    </Padding>

                    <Padding tb={2}>
                      <Row>
                        <Col xs={3} sm={2} className="text-center">
                          <div className={style.awsHeading}>
                            <a href="/solutions/enterprise"><BaseSVG svg={solutionsEnterpriseSVG} /></a>
                          </div>
                        </Col>

                        <Col xs={9} sm={10}>
                          <Padding b={2}><Heading level={3}>Enterprise</Heading></Padding>
                          <p className="no-space">It&rsquo;s a big company, but your team still feels like a startup. You&rsquo;re here to build product, and have limited access to ops. How can your team take charge of your application without a dedicated ops team or expensive and hard-to-maintain software?</p>

                          <p><a href="/solutions/enterprise">Learn more about Opsee for enterprise teams</a></p>
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
              <Col xs={10} xsOffset={1}>
                <Quote quote="pingdom" />
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