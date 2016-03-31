import React from 'react';
import { Button } from '../forms';
import StaticHeader from '../panels/StaticHeader';
import Panel from '../panels/Panel';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewDivider from '../layout/SkewDivider';
import { SplitContainer, SplitPanel } from '../panels/SplitPanels';
import { Padding } from '../layout';
import BaseSVG from '../images/BaseSVG';
import ec2SVG from '../images/aws/ec2-01.svg';
import ecsSVG from '../images/aws/ecs-01.svg';
import rdsSVG from '../images/aws/rds-01.svg'
import installationSVG from '../images/install-steps2.svg';
import style from './aws.css';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <div className="text-center">
            <h1>Getting started on <span className="text-accent-static">AWS</span></h1>
            <h3>Effortless integration with your AWS environment</h3>
          </div>
        </StaticHeader>

        <Panel>
          <div className="row">
            <div className="col col-xs-12 col-sm-10 col-sm-offset-1">
              <div className="text-center">
                <h2>Opsee is monitoring <span className="text-accent">built for AWS</span></h2>

                <Padding tb={1}>
                  <h3>All you need to get started is AWS keys</h3>
                </Padding>
              </div>

              <Padding b={1}>
                <p>All you need is AWS keys to get started with Opsee. We don’t install agents on your systems–instead, we add a new EC2 instance to your environment that’s responsible for health checking and discovery. Here's how it works:</p>
                <ol>
                  <li><p>You use our IAM guide to create a temporary user for installation. Importantly, these keys are used only once and never stored. You can delete the user as soon as installation is done.</p></li>
                  <li><p>You tell us where to add our instance. Just choose an AWS region, VPC, and subnet and we’ll do the rest. We use a CloudFormation template and AMI for our instance, and its permissions are defined by a couple of IAM roles</p></li>
                  <li><p>That’s it! Once our instance is added, you can easily create health checks for your infrastructure and services–we even try to create checks for you.</p></li>
                </ol>
              </Padding>
            </div>
          </div>
        </Panel>

        <div className={style.offsetPhones}>
          <BaseSVG svg={installationSVG} />
        </div>

        <SkewDivider className={style.offsetDivider} />

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3 first-xs">
              <Padding a={2}>
                <BaseSVG svg={ec2SVG} className={style.svg} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9 last-xs">
              <div>
                <h2 id="ec2"><span className="text-accent">EC2</span> Integration</h2>
                <a href="#ec2"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col col-xs-12 col-sm-9 last-xs first-sm">
              <div>
                <h2 id="ecs"><span className="text-accent">ECS</span> Integration</h2>
                <a href="#ecs"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
            </div>

            <div className="col center-xs col-xs-12 col-sm-3 first-xs last-sm">
              <Padding a={2}>
                <BaseSVG svg={ecsSVG} className={style.svg} />
              </Padding>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3 first-xs">
              <Padding a={2}>
                <BaseSVG svg={rdsSVG} className={style.svg} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9 last-xs">
              <div>
                <h2 id="rds"><span className="text-accent">RDS</span> Integration</h2>
                <a href="#rds"><small>(link icon)</small></a>
              </div>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac.</p>
            </div>
          </div>
        </Panel>

        <SkewDivider />

        <Panel>
          <div className="row">
            <div className="col col-xs-12 col-sm-8 col-sm-offset-2">
              <div className="text-center">
                <h2>Want to learn <span className="text-accent">more?</span></h2>
                <p>Check out our <a href="https://blog.opsee.com/monitoring-built-for-aws-49c989c6a2c#.1vigkfjr2" target="_blank">blog post</a> for more on how Opsee integrates with your AWS environment, </p>
              </div>
            </div>
          </div>
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});