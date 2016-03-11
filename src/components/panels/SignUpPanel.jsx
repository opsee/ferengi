import Panel from './Panel.jsx';
import React from 'react';

import style from './signUpPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.panel}>
          sign up panel
        </div>
      </Panel>
    );
  }
});