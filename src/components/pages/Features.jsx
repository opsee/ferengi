import React from 'react';
import Container from '../layout/Container';
import StaticHeader from '../panels/StaticHeader';

export default React.createClass({
  render() {
    return (
      <div>
        <StaticHeader>
          <h1>Features</h1>
        </StaticHeader>

        <Container>
          Features component
        </Container>
      </div>
    );
  }
});
