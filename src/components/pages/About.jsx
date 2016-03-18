import React from 'react';
import {Grid, Row, Col} from '../layout';

import Container from '../layout/Container';
import StaticHeader from '../panels/StaticHeader';
import style from './how.css';
import SkewPanel from '../panels/SkewPanel';
import SignUpPanel from '../panels/SignUpPanel';

const About = React.createClass({
  getTwitterIcon(){
    return (
      <svg>
        <path d="M24,4.3c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2C19.3,2.6,18,2,16.6,2c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,7.8,4.1,5.9,1.7,2.9C1.2,3.6,1,4.5,1,5.4c0,1.7,0.9,3.2,2.2,4.1C2.4,9.4,1.6,9.2,1,8.9c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.2,23.3,5.3,24,4.3L24,4.3z"/>
      </svg>
    );
  },
  getLinkedInIcon(){
    return (
      <svg>
        <path d="M18.7,17.7V13c0-2.5-1.3-3.7-3.1-3.7c-1.4,0-2.1,0.8-2.4,1.3V9.5h-2.7c0,0.8,0,8.2,0,8.2h2.7v-4.6c0-0.2,0-0.5,0.1-0.7c0.2-0.5,0.6-1,1.4-1c1,0,1.4,0.7,1.4,1.8v4.4H18.7z M7.6,8.4c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.4-1.5-1.4S6.1,6.2,6.1,7C6.1,7.7,6.7,8.4,7.6,8.4L7.6,8.4z M8.9,17.7V9.5H6.2v8.2H8.9z M0,0h24v24H0V0z"/>
      </svg>
    );
  },
  render() {
    return (
      <div>
        <StaticHeader className={style.header}>
          <div className="text-center">
            <h1 className={style.header}>About Opsee</h1>
            <p>The company, mission, and team</p>
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
                <h2>Our Mission</h2>
                <p>Clouds are replacing datacenters, containers are replacing VMs, and microservices are replacing monolithic applications. Independent microservices help engineering organizations break free of the quarterly release cycle and ship small increments of functionality every single day. There&rsquo;s a cost, though. What once ran in a single process now spans multiple machines, and unreliable infrastructure can add new failure modes between you and your users.</p>
                <p>Now, more than ever, application developers are being asked to own the availability of their code. We&rsquo;re here to help.</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2>The Opsee Team</h2>
                <p>We&rsquo;ve got over 15 years experience developing monitoring tools, and working with developers and ops professionals to build some of the most beloved tools in the space including Boundary and Sensu.</p>
                <div className="text-center padding-t-md">
                  <figure className={style.headshot} data-event="cliff">
                    <img src={`/${require('../images/about/cliff_moon1.jpg')}`} alt="Cliff Moon"/>
                    <img className="team_headshot_ro" src={`/${require('../images/about/cliff_moon2.jpg')}`} alt="Cliff Moon"/>
                    <div className={style.figcaption}>
                      <div><strong>Cliff Moon</strong></div>
                      <div className={style.icons}>
                        <a href="https://twitter.com/moonpolysoft" title="@moonpolysoft on Twitter" target="_blank">
                          {this.getTwitterIcon()}
                        </a>
                        <a href="https://www.linkedin.com/pub/cliff-moon/4/44b/283" title="Cliff Moon on LinkedIn" target="_blank">
                          {this.getLinkedInIcon()}
                        </a>
                      </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="steve">
                   <img src={`/${require('../images/about/steve_boak1.jpg')}`} alt="Steve Boak"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/steve_boak2.jpg')}`} alt="Steve Boak"/>
                   <div className={style.figcaption}>
                     <div><strong>Steve Boak</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/sboak" title="@sboak on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/stephenboak" title="Steve Boak on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="greg">
                   <img src={`/${require('../images/about/greg_poirier1')}`} alt="Greg Poirier"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/greg_poirier2')}`} alt="Greg Poirier"/>
                   <div className={style.figcaption}>
                     <div><strong>Greg Poirier</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/grepory" title="@grepory on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/grepory" title="Greg Poirier on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="corey">
                   <img src={`/${require('../images/about/corey_light1')}`} alt="Corey Light"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/corey_light2')}`} alt="Corey Light"/>
                   <div className={style.figcaption}>
                     <div><strong>Corey Light</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/coreyalight" title="@coreyalight on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/coreylight" title="Corey Light on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="mark">
                   <img src={`/${require('../images/about/mark_martin1')}`} alt="Mark Martin"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/mark_martin2.gif')}`} alt="Mark Martin"/>
                   <div className={style.figcaption}>
                     <div><strong>Mark Martin</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/snorecone" title="@snorecone on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/owlchaos" title="Mark Martin on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="dan">
                   <img src={`/${require('../images/about/dan_compton1')}`}alt="Dan Compton"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/dan_compton2')}`} alt="Dan Compton"/>
                   <div className={style.figcaption}>
                     <div><strong>Dan Compton</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/danc0mpton" title="@danc0mpton on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/daniel-compton-7428b2a3" title="Dan Compton on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="dan">
                   <img src={`/${require('../images/about/mike_borsuk1')}`} alt="Mike Borsuk"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/mike_borsuk1')}`} alt="Mike Borsuk"/>
                   <div className={style.figcaption}>
                     <div><strong>Mike Borsuk</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/wireds0ul" title="@wireds0ul on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/in/mikeborsuk" title="Mike Borsuk on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot} data-event="sara">
                   <img src={`/${require('../images/about/sara1')}`} alt="Sara Bee"/>
                   <img className="team_headshot_ro" src={`/${require('../images/about/sara2')}`} alt="Sara Bee"/>
                   <div className={style.figcaption}>
                     <div><strong>Sara Bee</strong></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/doeg" title="@doeg on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
                  <figure className={style.headshot}>
                   <a href="https://twitter.com/opseeco" target="_blank"><img src="/public/img/opseeco.png" alt="Person"/></a>
                   <div className={style.figcaption}>
                     <div><a href="https://twitter.com/opseeco" target="_blank">@opseeco</a></div>
                     <div className={style.icons}>
                       <a href="https://twitter.com/opseeco" title="@opseeco on Twitter" target="_blank">
                         {this.getTwitterIcon()}
                       </a>
                       <a href="https://www.linkedin.com/company/opsee" title="Opsee on LinkedIn" target="_blank">
                         {this.getLinkedInIcon()}
                       </a>
                     </div>
                   </div>
                  </figure>
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