import React from 'react';
import StaticHeader from '../../panels/StaticHeader';
import style from './guides.css';
// import { Highlight } from '../../global/Highlight';

import { Row, Col } from '../../layout';
import SkewPanel from '../../panels/SkewPanel';
import SignUpPanel from '../../panels/SignUpPanel';
import Panel from '../../panels/Panel';
// import { Heading } from '../../type';

// import BaseSVG from '../../images/BaseSVG';
// import solutionsStartupSVG from '../../images/solutions-startup.svg';
// import solutionsEnterpriseSVG from '../../images/solutions-enterprise.svg';

const GuidesAWSMonitoring = React.createClass({
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}><span className="text-accent-static">Guides</span> to help you get more opsee</h1>
            <h3>Leading thoughts since 2016</h3>
          </div>
        </StaticHeader>

        <div>
          <Panel>
            <Row>
              <Col>
              </Col>
            </Row>
          </Panel>
        </div>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default GuidesAWSMonitoring;