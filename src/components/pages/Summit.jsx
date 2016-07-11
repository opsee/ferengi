import React from 'react';

import { Quote } from '../global';
import { Row, Col } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import Header from '../Header';

import FeaturedCustomers from '../panels/FeaturedCustomers';
import HeroPanel from '../panels/HeroPanel';
import Panel from '../panels/Panel';
import SignUpPanel from '../panels/SignUpPanel';
import SkewPanel from '../panels/SkewPanel';
import WizardPanel from '../panels/WizardPanel';

/*eslint-disable no-unused-vars*/
import styleConstants from '../../constants/styleConstants';
/*eslint-enable no-unused-vars*/

export default React.createClass({
  render() {
    return (
      <div>
        <Header theme="dark"/>

        <Panel>
          <h2 className="text-center">Welcome AWS Summit!</h2>
          <h3 className="text-center">Sign up from this page and get 2 extra weeks of free Opsee</h3>
        </Panel>

        <HeroPanel />
        <SkewDivider />

        <WizardPanel />
        <SkewDivider />

        <FeaturedCustomers />
        <SkewDivider />

        <Panel>
          <Row>
            <Col xs={10} xsOffset={1}>
              <Quote quote="pingdom" />
            </Col>
          </Row>
        </Panel>

        <SkewPanel backgroundColor="#303030" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});
