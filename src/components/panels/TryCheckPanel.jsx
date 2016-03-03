import React, { PropTypes } from 'react';
import style from './tryCheckPanel.css';

import Panel from './Panel';
import TryCheck from '../widgets/TryCheck';


export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.tryCheckPanel}>
          <div className={style.widgetWrap}>
            <TryCheck />
          </div>
        </div>
      </Panel>
    );
  }
});