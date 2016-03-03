import React from 'react';
import style from './index.css';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';

export default React.createClass({
  render() {
    return (
      <div>
        <HeroPanel />
        <SignUpPanel />
      </div>
    );
  }
});
