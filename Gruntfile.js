const _ = require('lodash');
const config = require('config');
const fs = require('fs');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      options: {
        NODE_ENV: process.env.NODE_ENV
      }
    },

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
          differential: false,
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [
          { expand: true, cwd: 'dist/', src: ['**'], dest: '/' }
        ]
      },
      prod: {
        options: {
          bucket: config.aws.buckets.prod,
          differential: false,
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
    clean: {
      dist: ['dist'],
      //this removes all source files that can be gzipped for later upload by s3
      gzip: ['dist/**/*.css', 'dist/**/*.svg', 'dist/**/*.js']
    },

    webpack: {
      build: _.assign(require('./webpack/build.config'), {
        profile: true,
        json: true,
        storeStatsTo: 'stats'
      }),
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
        port: 8081
      },
      start: {
        keepAlive: true
      }
    }
  });

  grunt.registerTask('saveWebpackStats', 'save em', function(){
    fs.writeFileSync('stats.json', JSON.stringify(grunt.config.getRaw('stats')));
  });

  grunt.registerTask('build', 'Builds the static site once (to dist/)', ['env', 'clean:dist', 'webpack:build', 'saveWebpackStats']);
  grunt.registerTask('watch', 'Build the static site, rebuild on changes', ['env', 'clean:dist', 'webpack:watch']);
  grunt.registerTask('dev', 'Build the static site & put a devserver on it', ['env', 'build', 'webpack-dev-server:start']);

  grunt.registerTask('deploy:prod', 'Deploy the site to production s3', ['env', 'clean:gzip', 'aws_s3:prod']);
  grunt.registerTask('deploy:staging', 'Deploy the site to production s3', ['env', 'build', 'aws_s3:staging']);
};