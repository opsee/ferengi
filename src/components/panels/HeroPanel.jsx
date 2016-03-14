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
              <h1>Health checks have you <span className='text-accent'>covered</span></h1>
              <p className={style.subHeader}>
                Health checks are the best way to know your services are working
                as you expect. Make a request, and ensure that it&rsquo;s responding
                properly.
              </p>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});