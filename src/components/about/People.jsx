import _ from 'lodash';
import React from 'react';
import peopleJSON from '../../data/people';
import style from './people.css';

export default React.createClass({
  getTwitterIcon(){
    return (
      <svg viewBox="0 0 24 24" className={style.twitterIcon}>
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
            <div className={style.name}><strong>{person.name}</strong></div>
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
        <h2 className="text-accent">The Opsee Team</h2>
        <p>We&rsquo;ve got over 15 years experience developing monitoring tools, and working with developers and ops professionals to build some of the most beloved tools in the space including Boundary and Sensu.</p>

        <div className="section">
          <div className={style.people}>
            {this.getPeople().map(this.renderPerson)}
          </div>
        </div>
      </div>
    );
  }
});