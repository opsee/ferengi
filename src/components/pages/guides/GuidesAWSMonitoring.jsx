import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
// import { Highlight } from '../../global/Highlight';

import {Col, Padding, Row} from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';

import BaseSVG from '../../images/BaseSVG';
import logoDark from '../../images/logos/opsee/opseelogo-screen-light-one.svg';
import EC2_01 from '../../images/guides/awsmonitoring/ec2-01.png';
import EC2_03 from '../../images/guides/awsmonitoring/ec2-03.png';
import EC2_04 from '../../images/guides/awsmonitoring/ec2-04.png';
import EC2_05 from '../../images/guides/awsmonitoring/ec2-05.png';
import ELB_00 from '../../images/guides/awsmonitoring/elb-00.png';
import ELB_01 from '../../images/guides/awsmonitoring/elb-01.png';
import ELB_02 from '../../images/guides/awsmonitoring/elb-02.png';
import ELB_03 from '../../images/guides/awsmonitoring/elb-03.png';
import ELB_04 from '../../images/guides/awsmonitoring/elb-04.png';

import R53_01 from '../../images/guides/awsmonitoring/r53-01.png';
import R53_04 from '../../images/guides/awsmonitoring/r53-04.png';
import R53_05 from '../../images/guides/awsmonitoring/r53-05.png';
import R53_07 from '../../images/guides/awsmonitoring/r53-07.png';
import R53_08 from '../../images/guides/awsmonitoring/r53-08.png';

import RDS_01 from '../../images/guides/awsmonitoring/rds-01.png';
import RDS_02 from '../../images/guides/awsmonitoring/rds-02.png';
import RDS_03 from '../../images/guides/awsmonitoring/rds-03.png';
import RDS_04 from '../../images/guides/awsmonitoring/rds-04.png';

import SQS_01 from '../../images/guides/awsmonitoring/sqs-01.png';

const GuidesAWSMonitoring = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>Bootstrap your AWS monitoring with CloudWatch</h1>
            <h3>Get started with alarms for common services and thresholds</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col xs={12} sm={8} smOffset={2}>
                <p>Moving to AWS can be a gateway to lots of other changes - moving from a monolith to microservices, running managed services, auto scaling, containers…even if you&rsquo;ve set up monitoring before, AWS poses a lot of new challenges to getting coverage.</p>

                <p>In this guide, we&rsquo;ll cover how a small dev team running in AWS can bootstrap their monitoring using CloudWatch for some common AWS services. We&rsquo;ll create some common-sense checks to ensure that your services are all running and performing well, alerting you whenever there are problems.</p>

                <p>We&rsquo;ll go service by service, covering:</p>

                <ul>
                  <li>
                    <p><a href="#ec2instancestatus">EC2 instance status</a><br/>
                    The availability of EC2 instances, alarming for health or system check failures</p>
                  </li>
                  <li>
                    <p><a href="#elasticloadbalancer">Elastic Load Balancer (ELB)</a><br/>
                    Alarm when the instances behind ELBs are failing their health checks, or when the ELB returns any 5XX errors</p>
                  </li>
                  <li>
                    <p><a href="#relationaldatabaseservice">Relational Database Service (RDS)</a><br/>
                    Track 3 important metrics for RDS Database Instances: CPU utilization, database connections, and freeable memory
                    </p>
                  </li>
                  <li>
                    <p><a href="#simplequeueservice">Simple Queue Service (SQS)</a><br/>
                    Track the number of delayed messages in the queue
                    </p>
                  </li>
                  <li>
                    <p><a href="#route53">Route53 for public endpoints</a><br/>
                    Test websites and public endpoints, from multiple check locations, to monitor uptime and latency around the globe.</p>
                  </li>
                </ul>

                <p>By the end of the guide, we hope you&rsquo;ve got near 100% coverage of your AWS infrastructure and services with as little effort as possible.</p>

                <hr className={style.sectionHR}/>

                <h2 id="ec2instancestatus">EC2 instance status</h2>

                <p>The <a target="_blank" href="https://console.aws.amazon.com/ec2/v2/home#Instances:sort=instanceId">EC2 management console</a> has 2 different status checks for instances: <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">instance status and system status</a></p>

                <BaseSVG svg={EC2_01} className={style.logo} />

                <p>CloudWatch, though, offers 3 status checks: <code>StatusCheckFailed_Instance</code>, <code>StatusCheckFailed_System</code>, and simply <code>StatusCheckFailed</code> (which will fire if either of the instance or system checks fails). We can see these more efficiently, for all of our instance in CloudWatch, by viewing all <a target="_blank" href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FEC2">EC2 instance metrics</a> and searching for <strong>StatusCheckFailed</strong>. Unfortunately, we have to set these checks up one instance at a time.</p>

                <BaseSVG svg={EC2_03} className={style.logo} />

                <p>Since this is a binary, whenever the Sum (not the Avg, Min, or Max) is <strong>Greater Than (>) 0</strong> we&rsquo;ll trigger the alarm. </p>

                <BaseSVG svg={EC2_04} className={style.logo} />

                <p>We can also trigger <a target="_blank" href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/UsingAlarmActions.html">instance actions</a> based on these alarms. Your circumstances may vary, but here we&rsquo;ll trigger a reboot if the instance is alarming on this check.</p>

                <BaseSVG svg={EC2_05} className={style.logo} />

                <p>Note that to trigger these actions, AWS will prompt you to <em>create an IAM role</em> to perform them. This is a security best-practice in AWS to have clear, granular permissions for actions that will modify important infrastructure.</p>

                <p>You can also set this up using <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">the AWS CLI</a>.</p>

                <p className={style.humbleBrag}>With Opsee you can create health checks for Security Groups and Auto Scale Groups too, and we will automatically apply the checks to their instances. We also check the services running on your instances. You can send failure notifications to Slack, Pagerduty and webhooks as well as email.</p>

                <hr className={style.sectionHR}/>

                <h2 id="elasticloadbalancer">Elastic Load Balancer (ELB)</h2>

                <p>We&rsquo;re going to alert on 2 metrics for ELBs. The first is when the unhealthy host count is greater than 0, meaning an alarm if any instance behind the ELB is failing its health check. The second is when the ELB is returning any 5XX responses, indicating a problem with the ELB itself.</p>

                  <p>First, we&rsquo;ll <a target="_blank" href="https://console.aws.amazon.com/ec2/v2/home#LoadBalancers:">verify the health checks for your ELBs</a> to be sure they are what we want.</p>

                <BaseSVG svg={ELB_00} className={style.logo} />

                <p/>

                <h3>Unhealthy Host Count</h3>

                <p>We want to alert whenever there is an unhealthy host. We&rsquo;ll start by visiting the <a target="_blank" href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FELB">CloudWatch dashboard for ELBs</a>.</p>

                <BaseSVG svg={ELB_01} className={style.logo} />

                <p>We&rsquo;ll choose the <code>UnHealthyHostCount</code> metric and click <strong>Create Alarm</strong>.</p>

                <BaseSVG svg={ELB_02} className={style.logo} />

                <p>The one important change is to alert when the count is <strong>Greater Than (>) 0</strong> and not Greater Than or Equal To (>=) 0, the default.</p>

                <p className={style.humbleBrag}>Opsee automatically creates service checks <a target="_blank" href="https://blog.opsee.com/getting-started-with-http-health-checks-58491c006dd7">for all of your ELBs</a> when you sign up, alerting you whenever instances fail. You can send failure notifications to Slack, Pagerduty and webhooks as well as email.</p>

                <h3>5XX Responses</h3>

                <p>Next we&rsquo;re going to alarm when an ELB returns a 5XX response (<em>note: if your ELB has not returned a 5XX reponse in the last 2 weeks, and/or if your ELB has not been taking traffic, is metric <a target="_blank" href="https://forums.aws.amazon.com/thread.jspa?messageID=329653">may not appear</a> in your CloudWatch dashboard</em>).</p>

                <p>We head to the <a target="_blank" href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FELB">CloudWatch ELB dashboard</a> and search for <strong>HTTPCode_ELB_5XX</strong> to bring up any/all ELBs that have it.</p>

                <BaseSVG svg={ELB_03} className={style.logo} />

                <p>Here, we again want to make sure the threshold is <strong>Greater Than (&gt;) 0</strong> and that we are <a target="_blank" href="http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-cloudwatch-metrics.html">using the Sum</a>, and not the average, min, or max.</p>

                <BaseSVG svg={ELB_04} className={style.logo} />

                <hr className={style.sectionHR}/>

                <h2 id="relationaldatabaseservice">Relational Database Service (RDS)</h2>
                <p>We want to track 3 important metrics for RDS Database Instances:</p>
                <ul>
                  <li>CPU utilization Greater Than (&gt;) 80%</li>
                  <li>Database Connections Greater Than (&gt;) 90% of <a target="_blank" href="https://www.google.com/search?q=rds+max_connections+instance+size&oq=rds+max_connections+instance+size">max for instance size</a></li>
                  <li>Freeable memory Less Than (&lt;) 25% of <a target="_blank" href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#d0e12082">instance memory</a></li>
                </ul>

                <p className={style.humbleBrag}>Opsee will automatically create a health check for each of <a target="_blank" href="https://blog.opsee.com/getting-started-with-rds-health-checks-3fe98550d006">your RDS Database Instances</a>, tracking all 3 of these metrics together, when you sign up. You can send failure notifications to Slack, Pagerduty and webhooks as well as email.</p>

                <h3>CPU utilization</h3>

                <p>We start in the <a href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FRDS">RDS Metrics dashboard in CloudWatch</a>, and select <code>CPUUtilization</code> as the metric.</p>

                <BaseSVG svg={RDS_01} className={style.logo} />

                <p>We set the threshold to <strong>greater than or equal to (>=) 80%</strong>, and we&rsquo;re ready to go.</p>

                <BaseSVG svg={RDS_02} className={style.logo} />

                <p/>

                <h3>Database connections</h3>

                <p>Similar to CPU, we simply choose <code>DatabaseConnections</code> as the metric. We can refer to a table of <a target="_blank" href="https://www.google.com/search?q=rds+max_connections+instance+size&oq=rds+max_connections+instance+size">maximum connection count by instance size</a>, and take 90% of the value for our instance size as the threshold. For example, a t2.micro has a max of 66 connections, so we will set it to alarm above 60 connections.</p>

                <BaseSVG svg={RDS_04} className={style.logo} />

                <p/>

                <h3>Freeable memory</h3>

                <p>Finally, we choose <code>FreeableMemory</code> as the metric and refer to Amazon&rsquo;s <a target="_blank" href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#d0e12082">instance class documentation</a> to see the available memory by instance size. We&rsquo;ll take 25% of the value for the instance as the threshold. For example, a db.t1.micro instance has 0.615GB of memory and 25% of that is <strong>155000000</strong> bytes (we need to enter the value in bytes, without commas, to get it working...lol Amazon)</p>

                <BaseSVG svg={RDS_03} className={style.logo} />

                <hr className={style.sectionHR}/>

                <h2 id="simplequeueservice">Simple Queue Service (SQS)</h2>
                <p>We&rsquo;ll start with a pretty basic check to alarm whenever there are delayed messages in my queue. As sd grow and adapt with SQS, we can tune this value to our service needs.</p>

                <p>Starting in the <a target="_blank" href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FSQS">SQS metrics</a> section of the CloudWatch dashboard, we choose <code>ApproximateNumberOfMessagesDelayed</code> as the metric and create an alarm, then set the threshold to alarm any time it&rsquo;s greater than (>) 0.</p>

                <BaseSVG svg={SQS_01} className={style.logo} />

                <hr className={style.sectionHR}/>

                <h2 id="route53">Route53</h2>

                <p>We&rsquo;re going to create a health check for our website, opsee.com, and run this health check from multiple AWS regions. We&rsquo;re also going to gather, and alert on, latency metrics.</p>

                <p>First, we head to the <a target="_blank" href="https://console.aws.amazon.com/route53/healthchecks/home#/">health checks section</a> of the Route53 dashboard and click <strong>Create health check</strong> to get started:</p>

                <BaseSVG svg={R53_01} className={style.logo} />

                <p>This is going to be an endpoint check on a domain name over HTTPs, so we enter all of the info for our URL here. In the <strong>Advanced configuration</strong> tab, we check the box to include <strong>Latency graphs</strong>. By default this check will run every 30 seconds and notify if the check fails 3 times, but <a target="_blank" href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/AlarmThatSendsEmail.html">these parameters can be changed</a>.</p>

                <BaseSVG svg={R53_04} className={style.logo} />

                <p>Then we need to define an alarm, which can either be an existing SNS topic or a new one to send to an email address, like the one we&rsquo;re creating here. Once that&rsquo;s set, the health check is ready!</p>

                <BaseSVG svg={R53_05} className={style.logo} />

                <p>Now we&rsquo;ll have a look at the latency metrics that got created in CloudWatch. In the <a target="_blank" href="https://console.aws.amazon.com/cloudwatch/home#metrics:metricFilter=Pattern%253DAWS%252FRoute53">CloudWatch dashboard for Route53</a> we can see <code>TimeToFirstByte</code>, as well as <code>SSLHandshakeTime</code> if the check is HTTPS, broken out by region.</p>

                <BaseSVG svg={R53_07} className={style.logo} />

                <p>You can decide what threshold is appropriate for each metric and location, but when choosing a metric in the control panel, set a threshold and number of periods required to alarm.</p>

                <BaseSVG svg={R53_08} className={style.logo} />

                <p>Now our website is monitored from multiple locations for availability and latency, and we can repeat this for each public endpoint we want to monitor.</p>

                <p className={style.humbleBrag}>Opsee can track <a target="_blank" href="https://blog.opsee.com/getting-started-with-http-health-checks-58491c006dd7">all of your public endpoints</a>, checking more than a response code and round-trip time. We also track response headers, body contents, and JSON keys. You can send failure notifications to Slack, Pagerduty and webhooks as well as email.</p>

                <hr className={style.sectionHR}/>

                <Padding t={3}>
                  <BaseSVG className={style.logoGuideFooter} svg={logoDark} />
                  <p className={style.guideFooter}>Opsee helps you create great health checks. When you add our instance to your AWS environment we automatically discover your infrastructure and services, and continuously test your services to ensure they&rsquo;re working as expected. We also integrate with CloudWatch to track and alert on important metrics.</p>
                </Padding>
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

export default GuidesAWSMonitoring;