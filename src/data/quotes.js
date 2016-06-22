import azaveaLogo from '../components/images/logos/azavea-logo.png';
import mettzerLogo from '../components/images/logos/mettzer.png';
import realSelfLogo from '../components/images/logos/realself.png';
import strathcomLogo from '../components/images/logos/strathcom.png';
import autodeskLogo from '../components/images/logos/autodesk.png';

export default {
  assertions: {
    author: 'Hector Castro',
    position: 'Operations Engineer',
    company: 'Azavea',
    url: 'http://www.azavea.com/',
    logo: azaveaLogo,
    quote: 'Integrating Opsee into our existing AWS environment was elegant and seamless. Within a handful of minutes, we had fully functional instance and load balancer level assertions against our existing service health checks.'
  },

  pingdom: {
    author: 'Hector Castro',
    position: 'Operations Engineer',
    company: 'Azavea',
    url: 'http://www.azavea.com/',
    logo: azaveaLogo,
    quote: 'Opsee is like Pingdom running inside of my AWS environment, but with more sophisticated options for where and how I apply health checks. I can see exactly what services and hosts are having problems. The notifications highlight issues in my responses, and I can resolve them right from the app.'
  },

  coffee: {
    author: 'Brian Livingston',
    position: 'SysAdmin',
    company: 'Strathcom Media',
    url: 'http://www.strathcom.ca/',
    logo: strathcomLogo,
    quote: 'I love that Opsee\'s on-boarding process consists mostly of waiting for my coffee to brew. I got almost 60 health checks created for me, and almost 50% of my EC2 instances covered, with zero effort.'
  },

  alarms: {
    author: 'Sergio Mendonça',
    position: 'CTO & Co-founder',
    company: 'Mettzer',
    url: 'https://www.mettzer.com/',
    logo: mettzerLogo,
    quote: 'It\'s much easier to configure my alarms in Opsee than AWS, and we use Slack for all of our communication so getting notifications there is awesome.'
  },

  autochecks: {
    author: 'Ed Anderson',
    position: 'DevOps',
    company: 'RealSelf',
    logo: realSelfLogo,
    url: 'https://www.realself.com/',
    quote: 'When we got started with Opsee we got about a dozen health checks created for us automatically. Not long after that, we had a bad deploy and one of these checks caught it! Our first experience with the product was great.'
  },

  autodeskChecks: {
    author: 'Ian Keough',
    position: 'Developer',
    company: 'Autodesk',
    logo: autodeskLogo,
    url: 'https://www.autodesk.com/',
    quote: 'With Opsee’s health checks we always know our services are working the way we wrote them. Notifications tell us exactly when and where problems arise and make it easy to restore the system to operational readiness.'
  },

  autodeskTeam: {
    author: 'Greg Marr',
    position: 'Developer',
    company: 'Autodesk',
    logo: autodeskLogo,
    url: 'https://www.autodesk.com/',
    quote: 'We’re a small team of developers working on a pre-release product with limited access to our corporate ops team. With Opsee we know that our services are working the way we expect without a lot of development effort.'
  }

};