import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import SkewDivider from '../../layout/SkewDivider';
import Panel from '../../panels/Panel';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import Quote from '../../global/Quote';
import TryCampaign from './TryCampaign';

import BaseSVG from '../../images/BaseSVG';
import azaveaLogo from '../../images/logos/azavea-logo.png';
import cleanSimpleSVG from '../../images/clean-simple.svg';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="A Better Alternative to Pingdom" splashClass={style.splashNagios}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2>Run health checks <span className="text-accent">inside your AWS environment</span></h2>
              <h3>Better visibility and rich, actionable notifications.</h3>
            </Padding>

            <p>Opsee runs checks inside your AWS environment to help you ensure your services, both inside and outside the firewall, are operating as you expect. Opsee is seamlessly integrated into your environment, with no agents to install or shell scripts to cURL.</p>
          </SplitPanel>

          <SplitPanel className={style.screenshotPanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider className={style.offsetDivider} />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote author="Hector Castro" position="Operations Engineer" company="Azavea" url="http://www.azavea.com/" logo={azaveaLogo}>
                <p>"Opsee is like Pingdom running inside of my AWS environment, but with more sophisticated options for where and how I apply health checks. I can see exactly what services and hosts are having problems. The notifications highlight issues in my responses, and I can resolve them right from the app."</p>
              </Quote>
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});