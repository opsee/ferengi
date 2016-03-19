import React from 'react';

import style from './footer.css';
import Container from './layout/Container.jsx';

export default React.createClass({
  render() {
    return (
      <div className={style.footer}>
        <div className="text-center">
          <p>Made with &hearts; by Opsee Co.</p>
          <p>123 9th Street &bull; San Francisco, CA</p>
        </div>
      </div>
    );
  }
});