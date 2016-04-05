import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import BaseSVG from '../../images/BaseSVG';
import notificationsSVG from '../../images/product-notifications.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="Monitoring You Can Use Anywhere" splashClass={style.splashUX}>
        <SplitContainer className={style.section}>
          <SplitPanel className={style.prosePanel} >
            <Padding tb={2}>
              <h2>Take action <span className="text-accent">anywhere</span></h2>
              <h3>Powerful health checks, rich notifications, and deep AWS integration.</h3>
            </Padding>

            <p>Opsee is designed to work anywhere. Health checks tell you if your services are working as you expect, and our rich notifications and deep AWS integration help you find and fix problems effortlessly.</p>
          </SplitPanel>

          <SplitPanel className={style.screenshotPanel}>
            <BaseSVG svg={notificationsSVG} className={style.svg} />
          </SplitPanel>
        </SplitContainer>

        <SkewDivider className={style.offsetDivider} />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote quote="coffee" />
            </Col>
          </Row>
        </Panel>
      </TryCampaign>
    );
  }
});