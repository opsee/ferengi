import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="text-accent">Working at Opsee</h2>

        <div className="section">
          <h3>About Opsee</h3>
          <p>Opsee is founded by <a href="https://twitter.com/moonpolysoft" target="_blank">Cliff Moon</a> & <a href="https://twitter.com/sboak" target="_blank">Steve Boak</a>. Our team has built some of the most beloved tools in the monitoring industry, including Boundary and Sensu. We're a technology company in the truest sense of the term.</p>
          <p>We're here to build great technology and a product that we and our users use and love. We're building a product for people all over the world, and from all walks of life. Monitoring is already a challenging technical field, and part of our mission at Opsee is to make monitoring more approachable to everyone who needs it. To do this we need a diverse team of people, with unique and widely varying perspective. People who identify with, and are committed to, all types of diversity (gender, racial heritage, education, socioeconomic, LGBTQQI, etc) are strongly encouraged to apply. We're only as strong as our team.</p>
        </div>

        <div className="section">
          <h3>Benefits</h3>
          <ul>
            <li><p>We&rsquo;re located in the beautiful <a href="http://heavybit.com/clubhouse" target="_blank">Heavybit clubhouse</a> in San Francisco, CA where we offer free catered lunches, coffee, tea, and other beverages.</p></li>
            <li><p> We also offer, and actively support, remote working.</p></li>
            <li><p>Compensation is competitive and includes a generous equity grant and full medical, dental, and vision benefits</p></li>
            <li><p>Unlimited budget for your workstation</p></li>
            <li><p>Paid time off</p></li>
          </ul>
        </div>

        <div className="section">
          <h3>Job openings</h3>
          <p>Opsee doesn't currently have any open positions, but we're always interested in meeting talented people. Send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co?subject=love too work at opsee">work@opsee.co</a>. Every thoughtful application we receive will be replied to, we promise.</p>
        </div>
      </div>
    );
  }
});