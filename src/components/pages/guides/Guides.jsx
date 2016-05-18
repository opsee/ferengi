import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
// import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';
import { Heading } from '../../type';

import BaseSVG from '../../images/BaseSVG';
import DropwizardThumbImg from '../../images/guides/guides-dropwizard.png';
// import CloudWatchThumbImg from '../../images/guides/guides-cloudwatch.png';

const Guides = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>We&rsquo;re here to help you <span className="text-accent-static">move faster</span></h1>
            <h3>Tips and tools for teams that deploy microservices in AWS</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col>
                <div className={style.prosePanel}>
                  <Padding tb={1}>
                    <Row>
                      <Col xs={3} sm={2} className="text-center">
                        <div className={style.awsHeading}>
                          <a href="/guides/dropwizard">
                            <BaseSVG svg={DropwizardThumbImg} className={style.logo} />
                          </a>
                        </div>
                      </Col>

                      <Col xs={9} sm={10}>
                        <Padding b={2}><Heading level={3}>Effective Health Checks With Dropwizard</Heading></Padding>
                        <p className="no-space">One of the nice features of Dropwizard is providing you with a consistent mechanism for exposing your services&rsquo; health checks. Having a consistent scheme for health checks make everything from deployment to monitoring that much easier, especially in polyglot environments where multiple languages and/or frameworks are being deployed into production.</p>

                          <p><a href="/guides/dropwizard">Read more &rsaquo;</a></p>
                      </Col>
                    </Row>
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

export default Guides;