import React from 'react';

import {Col, Grid, Padding, Row} from '../layout';

const BetaTOS = React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Padding tb={3}>
                <h1>Terms and Conditions</h1>
                <p>By accessing the Opsee Co. website (the “Site”), you are agreeing to be bound by these web site Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing the Site. Opsee Co. may revise these terms of use at any time without notice.</p>
                <h3>Disclaimer</h3>
                <p>All materials provided on the Site are provided “as is,” without warranty of any kind, and Opsee Co. makes no warranties, express or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Opsee Co. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of any materials on the Site or otherwise relating to such materials or on any sites linked to this site.</p>
                <h3>Limitations</h3>
                <p>In no event shall Opsee Co. be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on the Site, even if Opsee Co. or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                <h3>Revisions and Errata</h3>
                <p>The materials appearing on the Site may include technical, typographical, or photographic errors. Opsee Co. does not warrant that any of the materials on the Site are accurate, complete, or current. Opsee Co. may make changes to the materials contained on its web site at any time without notice.  For clarity, Opsee Co. does not make any commitment and has no obligation to update the materials.</p>
                <h3>Links</h3>
                <p>Opsee Co. has not reviewed all of the websites linked to on the Site and is not responsible for the contents of any such linked website. The inclusion of any link on the Site does not imply endorsement by Opsee Co. of any such linked website. Use of any such linked website is at the user’s own risk.</p>
                <h3>Governing Law</h3>
                <p>Any claim relating to the Site shall be governed by the laws of the State of California without regard to its conflict of law provisions.</p>
              </Padding>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

export default BetaTOS;