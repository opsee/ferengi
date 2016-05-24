import React from 'react';
import {Link} from 'react-router';

import {Col, Grid, Padding, Row} from '../layout';

const BetaTOS = React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Padding tb={3}>
                <h1>Privacy Policy</h1>
                <p>This policy was last modified on May 23, 2016.</p>
                <p>We at Opsee know you care about how your personal information is used and shared, and we take your privacy seriously.  Please read the following to learn more about our Privacy Policy.  By using or accessing the Site in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.</p>
                <p>Remember that your use of Opsee’s website (the “Site”) is at all times subject to the <Link to="/terms-of-use">Terms of Use</Link>, which incorporates this Privacy Policy.  Any terms we use in this Policy without defining them have the definitions given to them in the <Link to="/terms-of-use">Terms of Use</Link>.</p>
                <h3>What information do we collect?</h3>
                <p>We collect information from you when you fill out a form, express interest in obtaining additional information from us, or register to use one of the services we offer. You may be asked to enter your name, e-mail address, or other information to help us provide you with the information or services you’re looking for. However, you may also visit the Site without providing us that information.</p>
                <h3>What do we use your information for?</h3>
                <p>Any of the information we collect from you may be used in one of the following ways:</p>
                <ul>
                  <li style={{paddingBottom: '1rem'}}>To process transactions</li>
                  <li style={{paddingBottom: '1rem'}}>To administer a contest, promotion, survey or other site feature</li>
                  <li style={{paddingBottom: '1rem'}}>To send periodic emails</li>
                  <li style={{paddingBottom: '1rem'}}>The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.</li>
                </ul>
                <Padding t={2}>
                  <h3>Do we disclose any information to outside parties?</h3>
                </Padding>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
                <h3>Third party links</h3>
                <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                <h3>Children’s Online Privacy Protection Act Compliance</h3>
                <p>We do not knowingly collect or solicit personally identifiable information from children under 13; if you are a child under 13, please do not attempt to register for any of our services or send any personal information about yourself to us.  If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible.  If you believe that a child under 13 may have provided us personal information, please contact us at <a href="mailto:support@opsee.com">support@opsee.com</a>. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
                <h3>Online Privacy Policy Only</h3>
                <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
                <h3>Changes to our Privacy Policy</h3>
                <p>If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date above.</p>
                <h3>Contacting Us</h3>
                <p>If there are any questions regarding this privacy policy you may contact us using the following information:</p>
                <ul>
                  <li>Email: support@opsee.com</li>
                  <li>Address: 325 9th St, San Francisco, CA</li>
                </ul>
              </Padding>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

export default BetaTOS;