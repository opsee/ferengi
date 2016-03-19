import React from 'react';
import _ from 'lodash';

import {Expandable, Grid, Row, Col, Padding} from '../layout';
import Container from '../layout/Container';
import StaticHeader from '../panels/StaticHeader';
import style from './about.css';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';
import peopleJSON from '../../data/people';

const About = React.createClass({
  getTwitterIcon(){
    return (
      <svg viewBox="0 0 24 24" className={style.icon}>
        <path d="M24,4.3c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2C19.3,2.6,18,2,16.6,2c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,7.8,4.1,5.9,1.7,2.9C1.2,3.6,1,4.5,1,5.4c0,1.7,0.9,3.2,2.2,4.1C2.4,9.4,1.6,9.2,1,8.9c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.2,23.3,5.3,24,4.3L24,4.3z"/>
      </svg>
    );
  },
  getLinkedInIcon(){
    return (
      <svg viewBox="0 0 24 24" className={style.icon}>
        <path d="M18.7,17.7V13c0-2.5-1.3-3.7-3.1-3.7c-1.4,0-2.1,0.8-2.4,1.3V9.5h-2.7c0,0.8,0,8.2,0,8.2h2.7v-4.6c0-0.2,0-0.5,0.1-0.7c0.2-0.5,0.6-1,1.4-1c1,0,1.4,0.7,1.4,1.8v4.4H18.7z M7.6,8.4c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.4-1.5-1.4S6.1,6.2,6.1,7C6.1,7.7,6.7,8.4,7.6,8.4L7.6,8.4z M8.9,17.7V9.5H6.2v8.2H8.9z M0,0h24v24H0V0z"/>
      </svg>
    );
  },
  getPeople(){
    return peopleJSON.map(person => {
      return _.assign(person, {
        id: _.camelCase(person.name)
      });
    });
  },
  renderLinked(person){
    if (person.linked){
      return (
        <a href={person.linked} title={`${person.name} on LinkedIn`} target="_blank">
          {this.getLinkedInIcon()}
        </a>
      );
    }
    return null;
  },
  renderPerson(person){
    const img1 = '/' + require(`../images/about/${person.id}1`);
    const img2 = '/' + require(`../images/about/${person.id}2`);
    return (
      <figure className={style.person}>
        <div className={style.headshot}>
          <img className={style.img} src={img1} alt={person.name}/>
          <img className={style.imgRoll} src={img2} alt={person.name}/>
          <div className={style.figcaption}>
            <div><strong>{person.name}</strong></div>
            <div className={style.icons}>
              <a href={`https://twitter.com/${person.twitter}`} title={`@${person.twitter} on Twitter`} target="_blank">
                {this.getTwitterIcon()}
              </a>
              {this.renderLinked(person)}
            </div>
         </div>
       </div>
      </figure>
    );
  },
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>About Opsee</h1>
            <h3>The company, mission, and team</h3>
          </div>
        </StaticHeader>

        <Container>
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>Our Mission</h2>
                <p>Clouds are replacing datacenters, containers are replacing VMs, and microservices are replacing monolithic applications. Independent microservices help engineering organizations break free of the quarterly release cycle and ship small increments of functionality every single day. There&rsquo;s a cost, though. What once ran in a single process now spans multiple machines, and unreliable infrastructure can add new failure modes between you and your users.</p>
                <p>Now, more than ever, application developers are being asked to own the availability of their code. We&rsquo;re here to help.</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>The Opsee Team</h2>
                <p>We&rsquo;ve got over 15 years experience developing monitoring tools, and working with developers and ops professionals to build some of the most beloved tools in the space including Boundary and Sensu.</p>
                <div className={style.people}>
                  {this.getPeople().map(this.renderPerson)}
                </div>
              </Col>
            </Row>
            <Row>
            <h2>We&rsquo;re Hiring!</h2>
            <p>We’re always looking for talented people to join, so even if you don’t see a position listed, reach out to us. Just send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co?subject=love too work at opsee">work@opsee.co</a>. Every thoughtful application we receive will be replied to, we promise.</p>

              <Padding t={1}>
                <Expandable noFade>
                  <div style={{width: '100%'}}>
                  <h3>Frontend Developer</h3>
                  <p>Opsee is looking for talented frontend engineers to help build our web application. You’ll be using your expertise in Javascript and modern JS frameworks (like React.js) to build tools that developers love.</p>
                  <p>You’ll work closely with the backend team to spec and build new features, and process real-time data streams (WebSockets) from our APIs and bastion hosts. You’ll also work with design to create a seamless and delightful product experience, and a powerful web application to notify users of problems and visualize and report on their application health and performance.</p>
                  <p>To apply, send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co">work@opsee.co</a>.</p>
                  <h3>Requirements</h3>
                  <ul className="bullet_list">
                    <li>At least three years of experience working with JavaScript professionally, and a strong portfolio of launched projects</li>
                    <li>Experience with modern Javascript frameworks like React.js (which we use) and mastery of component/directive design</li>
                    <li>Expertise at testing and performance-tuning Javascript in the browser</li>
                    <li>Experience with responsive design and mobile-first design principles</li>
                  </ul>
                  <h3>Nice to haves</h3>
                  <ul className="bullet_list">
                    <li>Previous work in small startup environments</li>
                    <li>Experience with modern browser technologies like WebSockets</li>
                    <li>Background in computer science</li>
                    <li>Previous work on marketing websites, and with marketing departments</li>
                    <li>Mobile application development experience</li>
                  </ul>
                  </div>
                </Expandable>
              </Padding>
              <Padding t={1}>
                <Expandable noFade>
                  <div style={{width: '100%'}}>
                    <h3>Backend Developer</h3>
                    <p>Opsee is looking for talented application developers to help craft our APIs, and design and build new product features. Our language of choice is Go, so expertise is a plus, but it is required. Professional experience developing web applications and a willingness to learn are the only requirements.</p>
                    <p>We’re a small team, and your talents will be put to wide use. This can include:</p>
                    <ul className="bullet_list">
                      <li>Designing, building and deploying Go microservices</li>
                      <li>Adding functionality to our streaming event processor</li>
                      <li>Sketching the design of a new feature with the rest of the team</li>
                      <li>Helping to scale our build, test, and deployment tooling, and our infrastructure</li>
                    </ul>
                    <p>To apply, send an email with your résumé and a little about yourself to <a href="mailto:work@opsee.co">work@opsee.co</a>.</p>
                    <h3>Requirements</h3>
                    <ul className="bullet_list">
                      <li>It’s important to us that you’ve been building software professionally for a few years, and have a portfolio of launched work that we can talk about</li>
                      <li>Having the competence and confidence to solve a variety of development tasks with strong, maintainable code is critical</li>
                      <li>As is being able to work and communicate well with our team</li>
                    </ul>
                    <h3>Nice to haves</h3>
                    <ul className="bullet_list">
                      <li>We make and advocate for distributed systems, and we’re building a product to monitor them. It’s in our blood. If that interests you, you could fit in well here</li>
                      <li>Previous work on small startup teams will help you feel at home in the sometimes-chaotic environment</li>
                      <li>A strong understanding of AWS services and infrastructure will give you some immediate clarity into what we’re building</li>
                      <li>Previous experience with Go</li>
                    </ul>
                  </div>
                </Expandable>
              </Padding>
              <h3>Benefits</h3>
              <ul className="bullet_list">
                <li>Compensation is competitive and includes a generous equity grant and full medical, dental, and vision benefits</li>
                <li>Unlimited budget for your workstation</li>
                <li>Paid time off</li>
              </ul>
              <h3>About Opsee</h3>
              <p>We&rsquo;re located in the beautiful <a href="http://heavybit.com/clubhouse" target="_blank">Heavybit clubhouse</a> in San Francisco, CA where we offer free catered lunches, coffee, tea, and other beverages. We also offer, and actively support, remote working.</p>
              <p>Opsee is founded by <a href="https://twitter.com/moonpolysoft" target="_blank">Cliff Moon</a> & <a href="https://twitter.com/sboak" target="_blank">Steve Boak</a>. Our team has built some of the most beloved tools in the monitoring industry, including Boundary and Sensu. We're a technology company in the truest sense of the term. We're here to build great technology and a product that we and our users use and love.</p>
              <p>Opsee Co. is an Equal Opportunity Employer.</p>
          </Row>
          <Row>
            <Col xs={12}>
            <h2>Press Kit</h2>
              <p>A collection of Opsee brand resources and assets for your use:</p>

              <h3>Logo Usage Guidelines</h3>
              <ul>
                <li>Do not modify these logos, or use them suggest sponsorship or endorsement by Opsee.</li>
                <li>Do not use these logos to confuse any other brand with Opsee</li>
                <li>Do not use these logos on colors that clash, or are difficult to read. Different versions of the logo are provided for light and dark backgrounds - please use them appropriately. Monochrome logos are also provided if your usage requires them, or if you&rsquo;re in doubt about which color version will work best.</li>
                <li>Do not change the colors, rotate, or obstruct any part of the logo</li>
              </ul>

              <h3>Logo Pack</h3>

              <p>All logo variants, available for download as a .ZIP file:</p>

              <div className="row padding-tb">
                <div className="col-xs-12 text-center">
                  <div className="padding-b">
                    <a href="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip"><img src={'/' + require('../images/press/opseelogos-all.png')} alt="all Opsee logos for download"/></a>
                  </div>
                  <div className="padding-b">
                    <a className="btn btn-primary btn-block" href="https://s3-us-west-1.amazonaws.com/opsee-public-images/opseelogos-all.zip">DOWNLOAD</a>
                    <small>All logos come in small and large PNG, and vector SVG formats (161kB .ZIP file)</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Container>

        <SkewPanel backgroundColor="#333" skewBottom={false}>
          <SignUpPanel />
        </SkewPanel>
      </div>
    );
  }
});

export default About;