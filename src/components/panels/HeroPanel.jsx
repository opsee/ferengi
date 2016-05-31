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
              <div className="text-center">
                <h1><span className="text-accent">Health checks</span> cut through the noise</h1>
                <h3 className={style.subHeader}>Continuously test your services and deploy with confidence</h3>
              </div>
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