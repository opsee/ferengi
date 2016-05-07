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

                  <p>Opsee automatically discovers your infrastructure and updates health checks as your environment scales. You get full coverage with no configurations to maintain or agents to run on your systems.</p>

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
                          <p className="no-space">The good news: AWS helps startup teams ship code faster than ever, and manage infrastructure without dedicated ops. The bad news: we need to hire DevOps to manage the complexity of legacy monitoring tools. How do we bootstrap our monitoring efforts to stay in control?</p>

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
                          <p className="no-space">It&rsquo;s a big company, but our team still feels like a startup. We build product, and have limited access to ops. How can our team take charge of our application without a dedicated ops team or expensive and hard-to-maintain software?</p>

                          <p><a href="/solutions/enterprise">Learn more about Opsee for enterprise teams</a></p>
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