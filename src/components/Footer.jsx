import React from 'react';

import style from './footer.css';
import Container from './layout/Container.jsx';

export default React.createClass({
  render() {
    return (
      <div className={style.footer}>
        <Container>
          I'm a footer
        </Container>
      </div>
    );
  }
});