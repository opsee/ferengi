import React, { PropTypes } from 'react';

import Container from '../layout/Container';
import Panel from './Panel.jsx';
import TryCheck from '../check/TryCheck';

export default React.createClass({
  render() {
    return (
      <Panel>
        <Container>
          <TryCheck />
        </Container>
      </Panel>
    );
  }
});