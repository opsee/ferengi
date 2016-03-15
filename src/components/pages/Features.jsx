import React from 'react';
import Container from '../layout/Container';
import StaticHeader from '../panels/StaticHeader';
import style from './features.css';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className='text-center'>
            <h1 className={style.header}>A good heading about features</h1>
            <p>This is a very cool tagline about features!</p>
          </div>
        </StaticHeader>

        <Container>
          Features component
        </Container>
      </div>
    );
  }
});
