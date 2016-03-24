import React from 'react';
import {Padding } from '../layout';

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="text-accent">We&rsquo;re Hiring!</h2>
        <p>Opsee doesn't have any open positions. However, we’re always interested in meeting talented people. Send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co?subject=love too work at opsee">work@opsee.co</a>. Every thoughtful application we receive will be replied to, we promise.</p>

        <div className="section">
          <h3>Benefits</h3>
          <ul className="bullet_list">
            <li><p>Compensation is competitive and includes a generous equity grant and full medical, dental, and vision benefits</p></li>
            <li><p>Unlimited budget for your workstation</p></li>
            <li><p>Paid time off</p></li>
          </ul>
        </div>

        <div className="section">
          <h3>About Opsee</h3>
          <p>We&rsquo;re located in the beautiful <a href="http://heavybit.com/clubhouse" target="_blank">Heavybit clubhouse</a> in San Francisco, CA where we offer free catered lunches, coffee, tea, and other beverages. We also offer, and actively support, remote working.</p>
          <p>Opsee is founded by <a href="https://twitter.com/moonpolysoft" target="_blank">Cliff Moon</a> & <a href="https://twitter.com/sboak" target="_blank">Steve Boak</a>. Our team has built some of the most beloved tools in the monitoring industry, including Boundary and Sensu. We're a technology company in the truest sense of the term. We're here to build great technology and a product that we and our users use and love.</p>
          <p>Opsee Co. is an Equal Opportunity Employer.</p>
        </div>
      </div>
    );
  }
});