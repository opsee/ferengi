import React from 'react';
import StaticHeader from '../panels/StaticHeader';
import style from './features.css';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';

import Padding from '../layout/Padding';
import SkewDivider from '../layout/SkewDivider';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import Button from '../forms/Button';

import BaseSVG from '../images/BaseSVG';
import checkDiagramSVG from '../images/product-checks.svg';
import notificationsSVG from '../images/product-notifications.svg';
import awsIntegrationsSVG from '../images/integrations-aws.svg';
import passingAssertionsSVG from '../images/passing-assertions.svg';
import securitySVG from '../images/security.svg';
import cleanSimpleSVG from '../images/clean-simple.svg';

const Features = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Great monitoring doesn&rsquo;t need to be <span className="text-accent-static">complicated</span></h1>
            <h3>Opsee is designed for busy teams who want to get back to doing what they love.</h3>
          </div>
        </StaticHeader>

        <div>
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
                <Button className={style.button} secondary chevron>
                  <a href="/how">How it works</a>
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={awsIntegrationsSVG} />
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.imagePanel}>
              <Padding a={4}>
                <BaseSVG svg={checkDiagramSVG} />
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Zero</span> maintenance</h2>
              </Padding>

              <ul>
                <li><span className="prose">Easy install with just AWS keys</span></li>
                <li><span className="prose">Your health checks dynamically adjust to your environment</span></li>
                <li><span className="prose">Clean uninstall via Cloudformation</span></li>
              </ul>

              <Padding tb={2}>
                <Button className={style.button} secondary chevron>
                  <a href="https://app.opsee.com/docs/bastion" target="_blank">Learn more about our AWS instance</a>
                </Button>
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.screenshotPanel}>
              <BaseSVG svg={notificationsSVG} className={style.svg} />
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2>Rich, actionable <span className="text-accent">notifications</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">See failing responses in context</span></li>
                <li><span className="prose">Get notified anywhere: email, Slack, webhooks, or PagerDuty</span></li>
                <li><span className="prose">Take action on problem instances (restart, stop, or terminate)</span></li>
              </ul>

              <Padding tb={2}>
                <Button className={style.button} secondary chevron>
                  <a href="https://app.opsee.com/docs/notifications" target="_blank">Learn more about notifcations</a>
                </Button>
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Assertions:</span> more just than status codes</h2>
              </Padding>

              <ul>
                <li><span className="prose">Parse headers, JSON repsonse bodies, and status codes easily</span></li>
              </ul>

              <Padding tb={2}>
                <Button className={style.button} secondary chevron>
                  <a href="https://app.opsee.com/docs/checks" target="_blank">Learn more about assertions</a>
                </Button>
              </Padding>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <Padding a={4}>
                <BaseSVG svg={passingAssertionsSVG} />
              </Padding>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.imagePanel}>
              <BaseSVG svg={cleanSimpleSVG} className={style.screenshotSVG} />
            </SplitPanel>

            <SplitPanel className={style.screenshotProsePanel}>
              <Padding tb={1}>
                <h2>Clean & <span className="text-accent">simple</span></h2>
              </Padding>

              <ul>
                <li><span className="prose">Failing health checks tell you exactly what’s wrong</span></li>
                <li><span className="prose">Find problems without staring at graphs</span></li>
                <li><span className="prose">Responsive UI works on any device</span></li>
              </ul>
            </SplitPanel>
          </SplitContainer>

          <SkewDivider className={style.offsetDivider} />

          <SplitContainer className={style.section}>
            <SplitPanel className={style.prosePanel}>
              <Padding tb={1}>
                <h2><span className="text-accent">Security</span>-minded</h2>
              </Padding>

              <ul>
                <li><span className="prose">Our CloudFormation templates and IAM roles give you total transparency</span></li>
                <li><span className="prose">No third party software on your systems</span></li>
                <li><span className="prose">Secure communication between Opsee & our instance</span></li>
              </ul>
            </SplitPanel>

            <SplitPanel className={style.imagePanel}>
              <Padding a={4}>
                <BaseSVG svg={securitySVG} className={style.svg} />
              </Padding>
            </SplitPanel>
          </SplitContainer>
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default Features;