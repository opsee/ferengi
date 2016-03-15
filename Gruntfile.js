const _ = require('lodash');
const config = require('config');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Deploy the website to production or staging S3 buckets.
     */
    aws_s3: {
      options: {
        accessKeyId: config.aws.access_key_id,
        secretAccessKey: config.aws.secret_access_key,
        region: config.aws.region,
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      staging: {
        options: {
          bucket: config.aws.buckets.staging,
          differential: true,
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [
          { expand: true, cwd: 'dist/', src: ['**'], dest: '/' }
        ]
      },
      prod: {
        options: {
          bucket: config.aws.buckets.prod,
          differential: true,
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [
          { expand: true, cwd: 'dist/', src: ['**'], dest: '/' }
        ]
      }
    },

    /**
     * Removes the build directory. Typically run before rebuilding everything,
     * useful for ensuring no weird cruft is left behind.
     */
    clean: ['dist'],

    webpack: {
      build: require('./webpack/build.config'),
      watch: _.assign({}, require('./webpack/build.config'), {
        watch: true,
        keepalive: true
      })
    },

    "webpack-dev-server": {
      options: {
        webpack: require('./webpack/dev.config'),
        contentBase: 'dist/',
        progress: true,
        host: 'localhost', // Required for hot reload (http://stackoverflow.com/a/35152862)
        inline: true,
        hot: true,
        colors: true,
        port: 8080
      },
      start: {
        keepAlive: true
      }
    }
  });

  grunt.registerTask('build', 'Builds the static site once (to dist/)', ['clean', 'webpack:build']);
  grunt.registerTask('watch', 'Build the static site, rebuild on changes', ['clean', 'webpack:watch']);
  grunt.registerTask('dev', 'Build the static site & put a devserver on it', ['build', 'webpack-dev-server:start']);

  grunt.registerTask('test', 'Builds the static site, failing on any errors', ['build']);
  grunt.registerTask('deploy:prod', 'Deploy the site to production s3', ['build', 'aws_s3:prod']);
  grunt.registerTask('deploy:staging', 'Deploy the site to production s3', ['build', 'aws_s3:staging']);
};