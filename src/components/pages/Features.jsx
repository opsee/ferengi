import React from 'react';
import Container from '../layout/Container';
import StaticHeader from '../panels/StaticHeader';
import style from './features.css';
import SplitPanel from '../panels/SplitPanel';
import SplitColumn from '../panels/SplitColumn';
import Padding from '../layout/Padding';
import SkewDivider from '../layout/SkewDivider';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel'
import Button from '../forms/Button';

import BaseSVG from '../images/BaseSVG';
import actionsSVG from '../images/home-actions.svg';
import bastionSVG from '../images/home-bastion3.svg';
import checksSVG from '../images/home-checks2.svg';
import checkDiagramSVG from '../images/product-checks.svg';
import notificationsSVG from '../images/product-notifications.svg';
import installStepsSVG from '../images/install-steps2.svg';
import howBastionSVG from '../images/how-bastion.svg';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className='text-center'>
            <h1 className={style.header}>Great monitoring doesn't need to be complicated</h1>
            <p>Opsee is designed for busy teams who want to get back to doing what they love.</p>
          </div>
        </StaticHeader>

          <div className={style.section}>
            <SplitPanel>
              <SplitColumn order={2}>
                <Padding tb={1}>
                  <h2>Deep integration with <span className='text-accent'>AWS</span></h2>
                </Padding>

                <ul>
                  <li><span className="prose">Just add our instance to your AWS environment</span></li>
                  <li><span className="prose">We automatically and continuously discover your environment</span></li>
                  <li><span className="prose">No configurations to manage</span></li>
                </ul>

                <Padding tb={2}>
                  <Button className={style.button} secondary chevron>How it works</Button>
                </Padding>
              </SplitColumn>

              <SplitColumn order={1}>
                <BaseSVG svg={checkDiagramSVG} />
              </SplitColumn>
            </SplitPanel>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <SplitPanel>
              <SplitColumn order={1}>
                <BaseSVG svg={installStepsSVG} />
              </SplitColumn>

              <SplitColumn order={2}>
                <Padding tb={1}>
                  <h2><span className='text-accent'>Zero</span> maintenance</h2>
                </Padding>

                <ul>
                  <li><span className="prose">Easy install with just AWS keys</span></li>
                  <li><span className="prose">Your health checks dynamically adjust to your environment</span></li>
                  <li><span className="prose">Clean uninstall via Cloudformation</span></li>
                </ul>

                <Padding tb={2}>
                  <Button className={style.button} secondary chevron>
                    Learn more about our AWS instance
                  </Button>
                </Padding>
              </SplitColumn>
            </SplitPanel>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <Padding tb={4}>
              <SplitPanel>
                <SplitColumn order={1}>
                  <BaseSVG svg={notificationsSVG} style={{maxWidth: '100%'}} />
                </SplitColumn>

                <SplitColumn order={2}>
                  <Padding tb={1}>
                    <h2>Rich, actionable <span className='text-accent'>notifications</span></h2>
                  </Padding>

                  <ul>
                    <li><span className="prose">See failing responses in context</span></li>
                    <li><span className="prose">Get notified anywhere: email, Slack, webhooks, or PagerDuty</span></li>
                    <li><span className="prose">Take action on problem instances (restart, stop, or terminate)</span></li>
                  </ul>

                  <Padding tb={2}>
                    <Button className={style.button} secondary chevron>
                      Learn more about notifcations
                    </Button>
                  </Padding>
                </SplitColumn>
              </SplitPanel>
            </Padding>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <Padding t={4}>
              <SplitPanel>
                <SplitColumn order={2}>
                  <Padding tb={1}>
                    <h2><span className='text-accent'>Assertions:</span> more just than status codes</h2>
                  </Padding>

                  <ul>
                    <li><span className="prose">Parse headers, JSON repsonse bodies, and status codes easily</span></li>
                  </ul>

                  <Padding tb={2}>
                    <Button className={style.button} secondary chevron>
                      Learn more about notifcations
                    </Button>
                  </Padding>
                </SplitColumn>

                <SplitColumn order={1}>
                  <BaseSVG svg={checksSVG} style={{maxWidth: '100%'}} />
                </SplitColumn>
              </SplitPanel>
            </Padding>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <SplitPanel>
              <SplitColumn order={1}>
                <BaseSVG svg={bastionSVG} style={{maxWidth: '100%'}} />
              </SplitColumn>

              <SplitColumn order={2}>
                <Padding tb={1}>
                  <h2>Clean & <span className='text-accent'>simple</span></h2>
                </Padding>

                <ul>
                  <li><span className="prose">Failing health checks tell you exactly what’s wrong</span></li>
                  <li><span className="prose">Find problems without staring at graphs</span></li>
                  <li><span className="prose">Responsive UI works on any device</span></li>
                </ul>
              </SplitColumn>
            </SplitPanel>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <SplitPanel>
              <SplitColumn order={2}>
                <Padding tb={1}>
                  <h2><span className='text-accent'>Security</span>-minded</h2>
                </Padding>

                <ul>
                  <li><span className="prose">Our CloudFormation templates and IAM roles give you total transparency</span></li>
                  <li><span className="prose">No third party software on your systems</span></li>
                  <li><span className="prose">Secure communication between Opsee & our instance</span></li>
                </ul>

                <Padding tb={2}>
                  <Button className={style.button} secondary chevron>
                    Learn more about our IAM & CloudFormation
                  </Button>
                </Padding>
              </SplitColumn>

              <SplitColumn order={1}>
                <BaseSVG svg={howBastionSVG} style={{maxWidth: '100%'}} />
              </SplitColumn>
            </SplitPanel>
          </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>


    );
  }
});
