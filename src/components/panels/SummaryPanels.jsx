import React from 'react';

import Container from '../layout/Container';
import { Block, BlockGroup } from '../layout/Grid';
import Padding from 'emissary/src/js/components/layout/Padding';
import Panel from './Panel.jsx';
import style from './summaryPanels.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <Container>
          <div className={style.panel}>
            <BlockGroup>
              <Block width={50}>
                <h2>Your team loves AWS. So do we.</h2>
                <p>We seamlessly integrate with AWS to do all the hard work for you.
                There's no software to install, no shell scripts to cURL and no
                configuration management to run. Just give us a set of AWS keys
                and we'll take care of the rest. As EC2 instances come and go we'll
                automatically manage the targets of your health checks, so you can
                wave goodbye to false alarms and blind spots.</p>
              </Block>

              <Block width={50}>
                pic
              </Block>
            </BlockGroup>
          </div>
          <div className={style.panel}>
            <BlockGroup>
              <Block width={50}>
                pic
              </Block>

              <Block width={50}>
                <h2>1999 called, and they want their monitoring system back.</h2>
                <p>You've adopted the cloud, you've embraced devops and your team
                is continously delivering software. So why are you using monitoring
                software that's old enough to drive a car? Ditch the perl scripts and...</p>
              </Block>
            </BlockGroup>
          </div>
        </Container>
      </Panel>
    );
  }
});