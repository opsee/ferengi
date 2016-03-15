import Container from '../layout/Container';
import Panel from './Panel.jsx';
import React from 'react';

import style from './signUpPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.panel}>
          <Container>
            <div className="text-center">
              <h2 className={style.heading}>Ready to try a new kind of monitoring?</h2>
              <div className={['prose', style.prose].join(' ')}>Get powerful health checks, rich notifications, and
              deep AWS integration. Track your services and take action anywhere and get
              you to problem resolution.</div>
           </div>
          </Container>
        </div>
      </Panel>
    );
  }
});