import React from 'react';
import style from './index.css';
import HeroPanel from '../panels/HeroPanel';
import SignUpPanel from '../panels/SignUpPanel';
import TryCheckPanel from '../panels/TryCheckPanel';

export default React.createClass({
  render() {
    return (
      <div>
        <HeroPanel />
        <TryCheckPanel />
        <SignUpPanel />
      </div>
    );
  }
});
