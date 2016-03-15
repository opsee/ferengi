import Panel from './Panel.jsx';
import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Padding from '../layout/Padding';

import style from './signUpPanel.css';

export default React.createClass({
  render() {
    return (
      <Panel>
        <div className={style.panel}>
          <div className={style.container}>

            <div className="text-center">
              <h1 className={style.heading}>Ready to try a <span className="text-accent">new kind</span> of monitoring?</h1>
              <div className={['prose', style.prose].join(' ')}>Get powerful health checks, rich notifications, and
              deep AWS integration. Track your services and take action anywhere and get
              you to problem resolution.</div>
           </div>

            <div>
              <div>
                <Padding t={2} b={1}>
                  <Input className={style.input} placeholder="Your name"/>
                  <Input className={style.input} placeholder="Your email"/>
                </Padding>
              </div>

              <div>
                <Padding t={1} b={2}>
                  <Button className={style.button}>Sign up for Opsee</Button>
                </Padding>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
});