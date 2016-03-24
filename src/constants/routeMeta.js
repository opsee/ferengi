module.exports = {
  DEFAULT_META: {
    title: 'Opsee',
    excerpt: 'Continuously test your services and deploy with confidence',
    cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/opsee_logo_blue_400px.png',
    twitter: '@GetOpsee'
  },

  ROUTE_META: {
    '/': { /* use defaults */ },

    '/about': {
      title: 'Opsee / About'
    },

    '/beta-tos': {
      title: 'Opsee / Beta TOS'
    },

    '/features': {
      title: 'Opsee / Features'
    },

    '/how': {
      title: 'Opsee / How It Works'
    },

    '/try/aws': {
      title: 'Opsee / Get Monitoring Built for AWS',
      excerpt: 'Integrate and auto-scale seamlessly with your infrastructure. No agents to install or shell scripts to cURL.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-aws.jpg'
    },

    '/try/checks': {
      title: 'Opsee / Health Checks: Your First Line of Defense',
      excerpt: 'Monitor your AWS infrastructure and services using checks that auto-scale with you.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg'
    },

    '/try/dev': {
      title: 'Opsee / Monitoring for On-Call Dev Teams',
      excerpt: 'Effortless health checks for your services so you can get back to coding.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg'
    },

    '/try/icinga': {
      title: 'Opsee / Try a Simpler Alternative to Icinga',
      excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-nagios.jpg'
    },

    '/try/microservices': {
      title: 'Opsee / Monitoring for Microservices',
      excerpt: 'Health checks cut through the noise.',
      cover: 'https://s3-us-west-1.amazonaws.com/opsee-public-images/twitter-try-dev.jpg'
    },

    '/try/nagios': {
      title: 'Opsee / Try a Simpler Alternative to Nagios',
      excerpt: 'Health checks for your AWS infrastructure and services, zero maintenance.',
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