import React from 'react';

import Panel from './Panel.jsx';
import style from './heroPanel.css';
import Padding from '../layout/Padding';
import TryCheck from '../check/TryCheck';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.heroPanel}>
          <div className={style.heroContent}>
            <div className={style.heading}>
              <h1><span className="text-accent">Health</span> is more than a status code</h1>
              <h3 className={style.subHeader}>Instant alerts for applications in distress</h3>
            </div>

            <div>
              <TryCheck>
                <Padding t={4} b={2}>
                  <h2>Health checks are <span className="text-accent">more</span> than just a status code</h2>
                  <p>Lots of webservers will happily return a status code of 200 even if the underlying service is broken or misconfigured. Assertions let you dig deep into the health check response to ensure that everything is working exactly how you expect. Pull out headers and parse some JSON. Go on, it's fun.</p>
                </Padding>
              </TryCheck>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});