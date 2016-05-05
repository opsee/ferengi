import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './solutions.css';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';

import { Padding, Row, Col } from '../../layout';
import SkewDivider from '../../layout/SkewDivider';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Button from '../../forms/Button';
// import Quote from '../../global/Quote';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
// import checkDiagramSVG from '../../images/product-checks.svg';
// import notificationsSVG from '../../images/product-notifications.svg';
import awsIntegrationsSVG from '../../images/integrations-aws.svg';
// import passingAssertionsSVG from '../../images/passing-assertions.svg';
// import securitySVG from '../../images/security.svg';
// import cleanSimpleSVG from '../../images/clean-simple.svg';

const Solutions = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}><span className="text-accent-static">Bootstrap</span> your devops team</h1>
            <h3>Opsee is made for startups who want to get back to doing what they love: shipping product</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={10} xsOffset={1}>
                <p>The good news: a startup team running in AWS can grow to 20 or 30 engineers without dedicated ops</p>
                <p>The bad news: now dev teams need to own their availability and performance</p>
                <p>Open-source tools are a pain to set up and configure, and today’s SaaS products are powerful but expensive, and overkill for our needs.</p>
                <p>Opsee is here to help.</p>
              </Col>
            </Row>
          </Panel>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding tb={1}>
                <h2>Deep integration with <span className="text-accent">AWS</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">Just add our instance to your AWS environment</span></li>
                <li><span className="prose">We automatically and continuously discover your environment</span></li>
                <li><span className="prose">No configurations to manage</span></li>
              </ul>

              <Padding tb={2}>
                <Button to="/how" className={style.button} secondary chevron>
                  How it works
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={awsIntegrationsSVG} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default Solutions;