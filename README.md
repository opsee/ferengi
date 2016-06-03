<p align="center">
  <img src="http://i.imgur.com/2y8QKAE.jpg">
</p>

# ferengi

[![Circle CI](https://circleci.com/gh/opsee/ferengi.svg?style=shield&circle-token=e6bf9dbd148aecb25807ad154244710458a14999)](https://circleci.com/gh/opsee/ferengi)

marketing wabsite

### Developing

```
// Install the dependencies
npm install

// Start up a webpack dev server (with hot reload) for the site at http://localhost:8081.
npm run start

// Deploy to staging
npm run staging
```

### Deploying
Ferengi's `master` branch is deployed to the production S3 bucket [by CircleCI](https://github.com/opsee/ferengi/blob/master/circle.yml#L4) after successful builds. All you need to do to deploy is to merge your PR into master.