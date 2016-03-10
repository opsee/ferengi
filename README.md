<p align="center">
  <img src="http://i.imgur.com/2y8QKAE.jpg">
</p>

# ferengi

[![Circle CI](https://circleci.com/gh/opsee/ferengi.svg?style=shield&circle-token=e6bf9dbd148aecb25807ad154244710458a14999)](https://circleci.com/gh/opsee/ferengi)

marketing wabsite

```
// Install the dependencies
npm install

// Build the static site once. Output will be in dist/
NODE_ENV='production' grunt build

// Start up a webpack dev server (with hot reload) for the site
// at http://localhost:8080. (Note that this does not actually build any static
// output to dist/.)
grunt dev

// Run the tests. Everything must lint and build before it can get
// merged onto master.
grunt test

// Deploy to production. You'll want to make sure that $AWS_ACCESS_KEY_ID,
// $AWS_DEFAULT_REGION, and $AWS_SECRET_ACCESS_KEY are set in your env.
NODE_ENV='production' grunt deploy:prod

// Deploy to staging
NODE_ENV='production' grunt deploy:staging

// List all the other cool stuff you can do
grunt --help
```

