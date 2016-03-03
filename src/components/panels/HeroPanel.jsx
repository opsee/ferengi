import React, { PropTypes } from 'react';

import TryCheck from '../widgets/TryCheck';
import Panel from './Panel.jsx';
import style from './heroPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.heroPanel}>
          <div className={style.heroContent}>
            <div className={style.heading}>
              <h1>Health checks have you covered</h1>
              <p className={style.subHeader}>
                Whether you're watching 1 instance or 1000, Opsee lets you be sure
                that your services are always responding the way you expect.
              </p>
            </div>

            <h2>Try it for yourself. Run a check:</h2>
            <div className={style.widgetWrap}>
              <TryCheck />
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});