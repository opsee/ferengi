import React from 'react';
import style from './try.css';
import { Padding, Row, Col } from '../../layout';
import { SplitContainer, SplitPanel } from '../../panels/SplitPanels';
import Button from '../../forms/Button';
import BaseSVG from '../../images/BaseSVG';
import cleanSimpleSVG from '../../images/clean-simple.svg';
import TryCampaign from './TryCampaign';
import Panel from '../../panels/Panel';
import SkewDivider from '../../layout/SkewDivider';
import Quote from '../../global/Quote';

export default React.createClass({
  render() {
    return (
      <TryCampaign title="Monitoring for the On-call Developer" splashClass={style.splashDev}>

        <SplitContainer className={style.section}>
          <SplitPanel className={style.screenshotProsePanel}>
            <Padding tb={1}>
              <h2><span className="text-accent">Effortless</span> Health Checks for Your Services</h2>
              <h3>So you can get back to coding.</h3>
            </Padding>
            <p>Opsee discovers your AWS infrastructure and services, instantly reacts to changes in your environment, and creates health checks for you so you can get back to writing code.</p>

            <Padding t={1}>
              <Button to="/features" className={style.button} secondary chevron>
                Learn more
              </Button>
            </Padding>
          </SplitPanel>
          <SplitPanel className={style.imagePanel}>
            <BaseSVG svg={cleanSimpleSVG} className={style.screenshotSVG} />
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