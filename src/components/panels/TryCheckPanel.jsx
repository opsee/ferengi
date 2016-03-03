import React, { PropTypes } from 'react';
import Panel from './Panel.jsx';
import style from './tryCheckPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.tryCheckPanel}>
          try check panel
        </div>
      </Panel>
    );
  }
});