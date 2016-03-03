import React from 'react';
import style from './index.css';
import Panel from '../panels/Panel.jsx';
import SignUpPanel from '../panels/SignUpPanel';

export default React.createClass({
  render() {
    return (
      <div>
        <div className={style.heroPanel}>
          <Panel>
            <h1 className={style.header}>
              Health checks have you covered
            </h1>
            <p className={style.subHeader}>
              Whether you're watching 1 instance or 1000, Opsee lets you be sure
              that your services are always responding the way you expect.
            </p>
          </Panel>
        </div>

        <SignUpPanel />
      </div>
    );
  }
});
