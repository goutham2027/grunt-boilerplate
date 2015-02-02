module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: ['static/js/jquery.min.js',
              'static/js/bootstrap.min.js',
              'static/js/angular.min.js',
              'static/js/integrase.js'
            ],
            dest: 'static/js/build/production.js'
          }
            // 2. Configuration for concatinating files goes here.
        },

      uglify: {
         build: {
          src: 'static/js/build/production.js',
          dest: 'static/js/build/production.min.js'
        }
      }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};
