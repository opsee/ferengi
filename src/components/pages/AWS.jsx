import React from 'react';
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
import checkDiagramSVG from '../images/product-checks.svg';
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
            <div className="col center-xs col-xs-12 col-sm-3">
              <Padding a={2}>
                <BaseSVG svg={ec2SVG} className={style.svg} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9">
              <h2><span className="text-accent">EC2</span> Integration</h2>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac. Nullam lobortis a enim a eleifend. Maecenas tincidunt commodo arcu, pulvinar dignissim ligula accumsan sed. Aliquam fringilla maximus venenatis. Sed quis urna dolor. Phasellus placerat sem fringilla, bibendum urna quis, tempus lacus. Curabitur eget magna felis. Sed eros felis, aliquet id ante quis, pharetra viverra augue. Aenean sodales faucibus ante id vehicula.</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="row">
            <div className="col col-xs-12 col-sm-9">
              <h2><span className="text-accent">ECS</span> Integration</h2>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac. Nullam lobortis a enim a eleifend. Maecenas tincidunt commodo arcu, pulvinar dignissim ligula accumsan sed. Aliquam fringilla maximus venenatis. Sed quis urna dolor. Phasellus placerat sem fringilla, bibendum urna quis, tempus lacus. Curabitur eget magna felis. Sed eros felis, aliquet id ante quis, pharetra viverra augue. Aenean sodales faucibus ante id vehicula.</p>
            </div>

            <div className="col center-xs col-xs-12 col-sm-3">
              <Padding a={2}>
                <BaseSVG svg={ecsSVG} className={style.svg} />
              </Padding>
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="row">
            <div className="col center-xs col-xs-12 col-sm-3">
              <Padding a={2}>
                <BaseSVG svg={rdsSVG} className={style.svg} />
              </Padding>
            </div>

            <div className="col col-xs-12 col-sm-9">
              <h2><span className="text-accent">RDS</span> Integration</h2>

              <p>Amazon EC2 Container Service (ECS) is a container management service
              that lets you run applications from Docker containers on clusters of EC2 instances.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam malesuada magna, finibus sollicitudin metus porta ac. Nullam lobortis a enim a eleifend. Maecenas tincidunt commodo arcu, pulvinar dignissim ligula accumsan sed. Aliquam fringilla maximus venenatis. Sed quis urna dolor. Phasellus placerat sem fringilla, bibendum urna quis, tempus lacus. Curabitur eget magna felis. Sed eros felis, aliquet id ante quis, pharetra viverra augue. Aenean sodales faucibus ante id vehicula.</p>
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