import React from 'react';

import TryCheck from '../check/TryCheck';
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
                How do you know when your services are working? The only way to
                be sure is health checks. Make a request against your service,
                and ensure that it's responding properly.
              </p>
            </div>

            <h2>Go ahead and try it out</h2>
            <div className={style.widgetWrap}>
              <TryCheck />
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});