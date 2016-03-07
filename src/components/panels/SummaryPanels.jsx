import React from 'react';

import { Block, BlockGroup } from '../layout/Grid';
import Panel from './Panel.jsx';

export default React.createClass({
  render() {
    return (
      <Panel>
        <BlockGroup>
          <Block width={50}>block</Block>
          <Block width={50}>block</Block>
        </BlockGroup>
      </Panel>
    );
  }
});