const config = require('config');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    aws_s3: {
      options: {
        accessKeyId: config.aws.access_key_id,
        secretAccessKey: config.aws.secret_access_key,
        region: config.aws.region,
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
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

    webpack: {
      dev: require('./webpack/dev.config')
    }
  });

  grunt.registerTask('build', ['webpack'])
  grunt.registerTask('deploy', 'deploy the site to production s3', ['build', 'aws_s3:prod']);
};