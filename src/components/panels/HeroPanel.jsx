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
              <h1>Health checks <span className="text-accent">cut throught the noisecovered</span></h1>
              <p className={style.subHeader}>
                Continuously test your services and deploy with confidence
              </p>
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