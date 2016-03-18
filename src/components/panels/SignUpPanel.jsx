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
              <h1 className={style.heading}>Ready to <span className="text-accent">get opsee?</span></h1>
              <div className={['prose-darkbg', style.prose].join(' ')}>Opsee is free during public beta. Join now by giving us your email address below, and we'll send you a link to your very own Opsee account.</div>
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