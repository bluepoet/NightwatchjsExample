module.exports = function(grunt) {
  grunt.initConfig({
      nightwatch: {
        options: {
          cwd: './'
        },
        browserstack: {
          argv: {
            env: 'browserstack'
          },
          settings: {
            silent: true
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-nightwatch');
};