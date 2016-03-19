import React from 'react';
import { Expandable, Padding } from '../layout';

export default React.createClass({
  render() {
    return (
      <div>
        <h2 className="text-accent">We&rsquo;re Hiring!</h2>
        <p>We’re always looking for talented people to join, so even if you don’t see a position listed, reach out to us. Just send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co?subject=love too work at opsee">work@opsee.co</a>. Every thoughtful application we receive will be replied to, we promise.</p>

        <div className="section">
          <Padding t={1}>
            <Expandable noFade>
              <div style={{width: '100%'}}>
              <h3>Frontend Developer</h3>
              <p>Opsee is looking for talented frontend engineers to help build our web application. You’ll be using your expertise in Javascript and modern JS frameworks (like React.js) to build tools that developers love.</p>
              <p>You’ll work closely with the backend team to spec and build new features, and process real-time data streams (WebSockets) from our APIs and bastion hosts. You’ll also work with design to create a seamless and delightful product experience, and a powerful web application to notify users of problems and visualize and report on their application health and performance.</p>
              <p>To apply, send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co">work@opsee.co</a>.</p>
              <h3>Requirements</h3>
              <ul className="bullet_list">
                <li><p>At least three years of experience working with JavaScript professionally, and a strong portfolio of launched projects</p></li>
                <li><p>Experience with modern Javascript frameworks like React.js (which we use) and mastery of component/directive design</p></li>
                <li><p>Expertise at testing and performance-tuning Javascript in the browser</p></li>
                <li><p>Experience with responsive design and mobile-first design principles</p></li>
              </ul>
              <h3>Nice to haves</h3>
              <ul className="bullet_list">
                <li><p>Previous work in small startup environments</p></li>
                <li><p>Experience with modern browser technologies like WebSockets</p></li>
                <li><p>Background in computer science</p></li>
                <li><p>Previous work on marketing websites, and with marketing departments</p></li>
                <li><p>Mobile application development experience</p></li>
              </ul>
              </div>
            </Expandable>
          </Padding>
        </div>

        <div className="section">
          <Padding t={1}>
            <Expandable noFade>
              <div style={{width: '100%'}}>
                <h3>Backend Developer</h3>
                <p>Opsee is looking for talented application developers to help craft our APIs, and design and build new product features. Our language of choice is Go, so expertise is a plus, but it is required. Professional experience developing web applications and a willingness to learn are the only requirements.</p>
                <p>We’re a small team, and your talents will be put to wide use. This can include:</p>
                <ul className="bullet_list">
                  <li><p>Designing, building and deploying Go microservices</p></li>
                  <li><p>Adding functionality to our streaming event processor</p></li>
                  <li><p>Sketching the design of a new feature with the rest of the team</p></li>
                  <li><p>Helping to scale our build, test, and deployment tooling, and our infrastructure</p></li>
                </ul>
                <p>To apply, send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co">work@opsee.co</a>.</p>
                <h3>Requirements</h3>
                <ul className="bullet_list">
                  <li><p>It’s important to us that you’ve been building software professionally for a few years, and have a portfolio of launched work that we can talk about</p></li>
                  <li><p>Having the competence and confidence to solve a variety of development tasks with strong, maintainable code is critical</p></li>
                  <li><p>As is being able to work and communicate well with our team</p></li>
                </ul>
                <h3>Nice to haves</h3>
                <ul className="bullet_list">
                  <li><p>We make and advocate for distributed systems, and we’re building a product to monitor them. It’s in our blood. If that interests you, you could fit in well here</p></li>
                  <li><p>Previous work on small startup teams will help you feel at home in the sometimes-chaotic environment</p></li>
                  <li><p>A strong understanding of AWS services and infrastructure will give you some immediate clarity into what we’re building</p></li>
                  <li><p>Previous experience with Go</p></li>
                </ul>
              </div>
            </Expandable>
          </Padding>
        </div>

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