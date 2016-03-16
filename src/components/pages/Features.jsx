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

import BaseSVG from '../images/BaseSVG';
import actionsSVG from '../images/home-actions.svg';
import bastionSVG from '../images/home-bastion3.svg';
import checksSVG from '../images/home-checks2.svg';
import checkDiagramSVG from '../images/product-checks.svg';
import notificationsSVG from '../images/product-notifications.svg';

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
                  <h3>Health checks update automatically when your environment changes.</h3>

                <p className="prose">
                  You never need to maintain Opsee health checks. When you create a
                  check for a dynamic target like a Security Group, Elastic Load
                  Balancer, or Auto Scale Group, we use AWS APIs to scan your
                  environment and update your checks automatically.
                </p>
              </SplitColumn>

              <SplitColumn order={1}>
                <BaseSVG svg={checkDiagramSVG} style={{maxWidth: '100%'}} />
              </SplitColumn>
            </SplitPanel>
          </div>

          <SkewDivider className={style.divider} />

          <div className={style.section}>
            <Padding tb={4}>
              <SplitPanel>
                <SplitColumn order={1}>
                  <BaseSVG svg={notificationsSVG} style={{maxWidth: '100%'}} />
                </SplitColumn>

                <SplitColumn order={2}>
                  <Padding tb={1}>
                    <h2><span className='text-accent'>Rich notifications</span> help you solve problems faster</h2>
                  </Padding>

                  <h3>Health checks update automatically when your environment changes.</h3>

                  <p className="prose">
                    We do more with notifications. Opsee can send
                    notifications to email, Slack, and webhooks with ease. We show
                    you failing responses in notifications, and if the failure
                    happened in a group, we tell you where the problem occurred.
                    We even have tools to take action on problem instances in the Opsee app.
                  </p>
                </SplitColumn>
              </SplitPanel>
            </Padding>

            <Padding t={4}>
              <SplitPanel>
                <SplitColumn order={2}>
                  <Padding tb={1}>
                    <h2><span className='text-accent'>Assertions:</span> more than status codes</h2>
                  </Padding>

                  <h3>Be sure your services are responding as expected.</h3>

                  <p className="prose">
                    Your services can return a 200 status code even if they’re
                    broken or misconfigured. Assertions let you dig deep into the
                    response and ensure that everything is working exactly as
                    expected, from headers to JSON keys in the response body.
                  </p>
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
                  <h2><span className='text-accent'>Complete coverage</span> with just AWS keys</h2>
                </Padding>

                <h3>Deep integration with your environment, zero effort.</h3>

                <p className="prose">
                  We install with just AWS keys — no SSH or cURL required. Use our
                  IAM guide to add Opsee’s instance to your environment and we do
                  the rest. We even try to create health checks for you.
                </p>
              </SplitColumn>
            </SplitPanel>
          </div>

          <SkewDivider className={style.offsetDivider} />

          <div className={style.section}>
            <SplitPanel>
              <SplitColumn order={2}>
                <Padding tb={1}>
                  <h2>Opsee is monitoring for <span className='text-accent'>on-call dev teams</span></h2>
                </Padding>

                <h3>Effortless integration and rich notifications so you can get back to coding.</h3>

                <p className="prose">
                  Opsee integrates with your AWS environment and creates health
                  checks for you, so you can get back to coding.
                </p>
              </SplitColumn>

              <SplitColumn order={1}>
                <BaseSVG svg={actionsSVG} style={{maxWidth: '100%'}} />
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
