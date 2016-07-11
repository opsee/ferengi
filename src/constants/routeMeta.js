/**
 * ADDING A NEW ROUTE?
 * Don't forget to update ferengi/src/routes.js!
 */
module.exports = {
  DEFAULT_META: {
    title: 'Opsee',
    excerpt: 'We watch your APIs—Instant alerts for applications in distress',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/opsee_logo_blue_400px.png',
    twitter: '@GetOpsee'
  },

  ROUTE_META: {
    '/': { /* use defaults */ },

    '/about': {
      title: 'Opsee / About'
    },

    '/features': {
      title: 'Opsee / Features'
    },

    '/how': {
      title: 'Opsee / How It Works'
    },

    '/pricing': {
      title: 'Opsee / Pricing'
    },

    '/integrations': {
      title: 'Opsee / Integrations'
    },

    '/privacy': {
      title: 'Opsee / Privacy Policy'
    },

    '/terms-of-use': {
      title: 'Opsee / Terms of Use'
    },

    '/beta-tos': {
      title: 'Opsee / Beta TOS'
    },

    '/summit': {
      title: 'Opsee / AWS Summit'
    },

    '/pingdom-alternative': {
      title: 'Opsee / Try a Better Alternative to Pingdom',
      excerpt: 'Be sure your sites, APIs and internal services respond the way you expect',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/guides': {
      title: 'Opsee / Guides'
    },

    '/guides/dropwizard': {
      title: 'Opsee / Effective Health Checks With Dropwizard',
      excerpt: 'One of the nice features of Dropwizard is providing you with a consistent mechanism for exposing your services’ health checks',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/guide-banner-dropwizard.jpg'
    },

    '/guides/gochecks': {
      title: 'Opsee / Effective Health Checks in Go',
      excerpt: 'Even if you’re not using frameworks and simply implementing a bare bones Go service it’s fast and easy to add simple health checks',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/guide-banner-go.jpg'
    },

    '/guides/nodechecks': {
      title: 'Opsee / Effective Health Checks in Node',
      excerpt: 'Node.JS adheres to a fail-fast design philosophy, often exiting a process under unexpected conditions. This makes monitoring health checks all the more essential for a production Node.JS deployment',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/guide-banner-node.jpg'
    },

    '/guides/awsmonitoring': {
      title: 'Opsee / Bootstrap your AWS monitoring with CloudWatch'
    },

    '/solutions': {
      title: 'Opsee / Solutions'
    },

    '/solutions/startup': {
      title: 'Opsee / Startup Solutions',
      excerpt: 'DevOps for dev teams — for startups who want to get back to shipping product',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev2.jpg'
    },

    '/solutions/enterprise': {
      title: 'Opsee / Enterprise Solutions',
      excerpt: 'DevOps for dev teams — for enterprise teams who need effortless monitoring',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev2.jpg'
    },

    '/try/aws': {
      title: 'Opsee / Monitoring Built for AWS',
      excerpt: 'Integrate and auto-scale seamlessly with your infrastructure. No agents to install or shell scripts to cURL.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-aws.jpg'
    },

    '/try/checks': {
      title: 'Opsee / Health Checks Cut Through the Noise',
      excerpt: 'Continuously Test Your Services and Deploy with Confidence',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev2.jpg'
    },

    '/try/dev': {
      title: 'Opsee / Monitoring for the On-Call Developer',
      excerpt: 'Effortless health checks for your services so you can get back to coding.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev2.jpg'
    },

    '/try/icinga': {
      title: 'Opsee / Try a Simpler Alternative to Icinga',
      excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/try/microservices': {
      title: 'Opsee / Monitoring for Microservices',
      excerpt: 'Health checks cut through the noise.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev2.jpg'
    },

    '/try/nagios': {
      title: 'Opsee / Try a Simpler Alternative to Nagios',
      excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/try/pingdom': {
      title: 'Opsee / Try a Better Alternative to Pingdom',
      excerpt: 'Health checks running inside your AWS environment for better visibility',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/try/sensu': {
      title: 'Opsee / Try a Simpler Alternative to Sensu',
      excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/try/ux': {
      title: 'Opsee / Monitoring You Can Use Anywhere',
      excerpt: 'Powerful health checks, rich notifications, and deep AWS integration to take action anywhere.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-ux.jpg'
    }
  }
};