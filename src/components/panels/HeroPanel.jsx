import React from 'react';

import Panel from './Panel.jsx';
import style from './heroPanel.css';
import TryCheck from '../check/TryCheck';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.heroPanel}>
          <div className={style.heroContent}>
            <div className={style.heading}>
              <h1>Always know <span className="text-accent">what&rsquo;s up</span></h1>
              <h3 className={style.subHeader}>See the availability and performance of your sites, APIs and internal services in one place</h3>
            </div>

            <div>
              <TryCheck />
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});