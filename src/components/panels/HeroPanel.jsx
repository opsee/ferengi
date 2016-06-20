import React from 'react';

import Panel from './Panel.jsx';
import style from './heroPanel.css';
import Padding from '../layout/Padding';
import TryCheck from '../check/TryCheck';
import { Heading } from '../type';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.heroPanel}>
          <div className={style.heroContent}>
            <div className={style.heading}>
              <Padding tb={1}>
                <Heading l={1}><span className="text-accent">Health checks</span> for microservices</Heading>
              </Padding>
              <div className={style.subHeader}>See the availability and performance of your sites, APIs and internal services in one place</div>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});