import React from 'react';

import Panel from '../panels/Panel';
import SkewDivider from '../layout/SkewDivider';
import StaticHeader from '../panels/StaticHeader';
import style from './about.css';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';

import { Hiring, Mission, People, PressKit } from '../about';

const About = React.createClass({

  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>About Opsee</h1>
            <h3>The company, mission, and team</h3>
          </div>
        </StaticHeader>

        <Panel>
          <Mission />
        </Panel>

        <SkewDivider />

        <Panel>
          <People />
        </Panel>

        <SkewDivider />

        <Panel>
          <Hiring />
        </Panel>

        <SkewDivider />

        <Panel>
          <PressKit />
        </Panel>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default About;