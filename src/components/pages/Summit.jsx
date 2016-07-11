import React, {PropTypes} from 'react';
import style from './index.css';

import { getReferrer } from '../../modules/referrer';
import { Quote } from '../global';
import { Row, Col } from '../layout';
import SkewDivider from '../layout/SkewDivider';
import Header from '../Header';
import Padding from '../layout/Padding';

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
  propTypes: {
    location: PropTypes.object
  },
  getReferrer(){
    return getReferrer(this.props.location);
  },
  renderTitle(){
    if (this.getReferrer().match('/summit')) {
      return (
        <Padding className={style.referralbanner} tb={1} lr={2}>
          <h2>Welcome AWS Summit!</h2>
          <h3>Sign up from this page and get 2 extra weeks of free Opsee</h3>
        </Padding>
      );
    }

    return null;
  },
  render() {
    return (
      <div>
        <Header theme="dark"/>

        {this.renderTitle()}

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
